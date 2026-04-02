'use client'

import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { createAgentChat, AgentChat as AgentChatUI } from '@21st-sdk/nextjs'
import '@21st-sdk/react/styles.css'
import type { Chat } from '@ai-sdk/react'
import type { UIMessage } from 'ai'

function ChatPanel({ sandboxId, threadId }: { sandboxId: string; threadId: string }) {
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
  const { messages, sendMessage, status, stop, error } = useChat({
    chat: chat as Chat<UIMessage>,
  })

  return (
    <div className="h-full">
      <AgentChatUI
        messages={messages}
        onSend={(msg) => sendMessage({ text: msg.content })}
        status={status}
        onStop={stop}
        error={error ?? undefined}
      />
    </div>
  )
}

function ChatContent() {
  const [sandboxId, setSandboxId] = useState<string | null>(null)
  const [threadId, setThreadId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const initRef = useRef(false)

  useEffect(() => {
    if (!isOpen || initRef.current) return
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

        let tId = localStorage.getItem('fort_thread_id')
        if (!tId) {
          const tRes = await fetch('/api/agent/threads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sandboxId: sbId, name: 'Chat' }),
          })
          if (!tRes.ok) throw new Error(`Failed to create thread: ${tRes.status}`)
          const thread = await tRes.json()
          tId = thread.id
          localStorage.setItem('fort_thread_id', tId!)
        }

        setThreadId(tId)
      } catch (err) {
        console.error('[fort-chat] Init failed:', err)
        setError(err instanceof Error ? err.message : 'Failed to initialize chat')
      }
    }

    init()
  }, [isOpen])

  return (
    <>
      {/* Floating chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-fort-gold text-white shadow-lg hover:bg-amber-600 transition-all duration-300 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold focus-visible:ring-offset-2"
        aria-label={isOpen ? 'Close chat' : 'Chat with Fort AI'}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] h-[520px] rounded-2xl shadow-2xl border border-fort-charcoal/10 overflow-hidden bg-white flex flex-col">
          {/* Header */}
          <div className="bg-fort-charcoal px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-fort-gold flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold font-sans">Fort AI Assistant</p>
                <p className="text-gray-400 text-xs font-sans">Ask about multiplex development</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Chat body */}
          <div className="flex-1 overflow-hidden">
            {error ? (
              <div className="flex items-center justify-center h-full p-4">
                <div className="text-center">
                  <p className="text-red-500 text-sm">{error}</p>
                  <button
                    onClick={() => {
                      setError(null)
                      initRef.current = false
                    }}
                    className="text-xs text-fort-gray hover:text-fort-charcoal underline mt-2"
                  >
                    Retry
                  </button>
                </div>
              </div>
            ) : sandboxId && threadId ? (
              <ChatPanel sandboxId={sandboxId} threadId={threadId} />
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="flex items-center gap-2 text-fort-gray text-sm">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Connecting...
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default function FortAgentChat() {
  return (
    <Suspense fallback={null}>
      <ChatContent />
    </Suspense>
  )
}
