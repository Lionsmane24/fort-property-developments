'use client'

import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { createAgentChat, AgentChat } from '@21st-sdk/nextjs'
import '@21st-sdk/react/styles.css'
import type { Chat } from '@ai-sdk/react'
import type { UIMessage } from 'ai'

interface ThreadItem {
  id: string
  name: string
}

function ChatPanel({
  sandboxId,
  threadId,
  isActive,
}: {
  sandboxId: string
  threadId: string
  isActive: boolean
}) {
  const chat = useMemo(
    () =>
      createAgentChat({
        agent: 'fort-assistant',
        tokenUrl: '/api/agent/token',
        sandboxId,
        threadId,
      }),
    [sandboxId, threadId],
  )
  const { messages, sendMessage, status, stop, error, setMessages } = useChat({
    chat: chat as Chat<UIMessage>,
  })
  const didHydrateRef = useRef(false)
  const storageKey = `fort-chat:messages:${sandboxId}:${threadId}`

  useEffect(() => {
    if (didHydrateRef.current) return
    didHydrateRef.current = true
    if (messages.length > 0) return
    try {
      const stored = localStorage.getItem(storageKey)
      if (!stored) return
      const parsed = JSON.parse(stored) as UIMessage[]
      if (parsed.length > 0) setMessages(parsed)
    } catch {}
  }, [messages.length, setMessages, storageKey])

  useEffect(() => {
    if (messages.length === 0) return
    try {
      localStorage.setItem(storageKey, JSON.stringify(messages))
    } catch {}
  }, [messages, storageKey])

  return (
    <div className={`${isActive ? '' : 'hidden '}h-full`}>
      <AgentChat
        messages={messages}
        onSend={(msg) => sendMessage({ text: msg.content })}
        status={status}
        onStop={stop}
        error={error ?? undefined}
      />
    </div>
  )
}

function ChatPageContent() {
  const [sandboxId, setSandboxId] = useState<string | null>(null)
  const [threads, setThreads] = useState<ThreadItem[]>([])
  const [activeThreadId, setActiveThreadId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const initRef = useRef(false)

  useEffect(() => {
    if (initRef.current) return
    initRef.current = true

    async function init() {
      try {
        let sbId = localStorage.getItem('fort_sandbox_id')

        if (!sbId) {
          const sbRes = await fetch('/api/agent/sandbox', { method: 'POST' })
          if (!sbRes.ok) throw new Error(`Failed to create sandbox: ${sbRes.status}`)
          const data = await sbRes.json()
          sbId = data.sandboxId
          localStorage.setItem('fort_sandbox_id', sbId!)
        }

        setSandboxId(sbId)

        const threadsRes = await fetch(`/api/agent/threads?sandboxId=${sbId}`)
        if (!threadsRes.ok) throw new Error(`Failed to fetch threads: ${threadsRes.status}`)
        const existingThreads: ThreadItem[] = await threadsRes.json()

        if (existingThreads.length > 0) {
          setThreads(existingThreads)
          const savedId = localStorage.getItem('fort_thread_id')
          const threadId = existingThreads.find((t) => t.id === savedId)
            ? savedId!
            : existingThreads[0]!.id
          setActiveThreadId(threadId)
          localStorage.setItem('fort_thread_id', threadId)
        } else {
          const newRes = await fetch('/api/agent/threads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sandboxId: sbId, name: 'Chat 1' }),
          })
          if (!newRes.ok) throw new Error(`Failed to create thread: ${newRes.status}`)
          const newThread: ThreadItem = await newRes.json()
          setThreads([newThread])
          setActiveThreadId(newThread.id)
          localStorage.setItem('fort_thread_id', newThread.id)
        }
      } catch (err) {
        console.error('[fort-chat] Init failed:', err)
        setError(err instanceof Error ? err.message : 'Failed to initialize')
      }
    }

    init()
  }, [])

  const handleNewThread = useCallback(async () => {
    if (!sandboxId) return
    const name = `Chat ${threads.length + 1}`
    try {
      const res = await fetch('/api/agent/threads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sandboxId, name }),
      })
      if (!res.ok) throw new Error(`Failed to create thread: ${res.status}`)
      const thread: ThreadItem = await res.json()
      setThreads((prev) => [thread, ...prev])
      setActiveThreadId(thread.id)
      localStorage.setItem('fort_thread_id', thread.id)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create thread')
    }
  }, [sandboxId, threads.length])

  if (error) {
    return (
      <div className="h-[calc(100vh-5rem)] flex items-center justify-center">
        <div className="text-center space-y-2">
          <p className="text-red-500 font-sans">{error}</p>
          <button
            onClick={() => {
              setError(null)
              initRef.current = false
              window.location.reload()
            }}
            className="text-sm text-fort-gray hover:text-fort-charcoal underline font-sans"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-[calc(100vh-5rem)] flex bg-white">
      {/* Sidebar */}
      <aside className="w-64 flex flex-col h-full border-r border-fort-charcoal/10 bg-fort-bg">
        <div className="p-3 border-b border-fort-charcoal/10">
          <button
            onClick={handleNewThread}
            className="w-full px-3 py-2 text-sm rounded-md font-sans font-semibold transition-colors bg-fort-gold text-white hover:bg-amber-600"
          >
            + New Conversation
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {threads.map((thread) => (
            <button
              key={thread.id}
              onClick={() => {
                setActiveThreadId(thread.id)
                localStorage.setItem('fort_thread_id', thread.id)
              }}
              className={`w-full text-left px-3 py-2 text-sm rounded-md font-sans transition-colors ${
                thread.id === activeThreadId
                  ? 'bg-fort-charcoal text-white'
                  : 'text-fort-gray hover:bg-fort-charcoal/5'
              }`}
            >
              {thread.name || 'Untitled'}
            </button>
          ))}
        </div>
      </aside>

      {/* Chat area */}
      <div className="flex-1">
        {sandboxId && activeThreadId ? (
          threads.map((thread) => (
            <ChatPanel
              key={thread.id}
              sandboxId={sandboxId}
              threadId={thread.id}
              isActive={thread.id === activeThreadId}
            />
          ))
        ) : (
          <div className="flex items-center justify-center h-full text-fort-gray font-sans">
            <div className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Loading...
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ChatPage() {
  return (
    <Suspense fallback={<div className="h-[calc(100vh-5rem)] flex items-center justify-center font-sans text-fort-gray">Loading...</div>}>
      <ChatPageContent />
    </Suspense>
  )
}
