'use client'

import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { createAgentChat, AgentChat } from '@21st-sdk/nextjs'
import '@21st-sdk/react/styles.css'
import type { Chat } from '@ai-sdk/react'
import type { UIMessage } from 'ai'

const suggestedQuestions = [
  'Can my lot support a multiplex?',
  'What is zoning like in Burnaby?',
  'How does the partnership model work?',
  'What returns can I expect?',
]

function InlineChatPanel({ sandboxId, threadId }: { sandboxId: string; threadId: string }) {
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
    <div className="h-[400px] md:h-[460px]">
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

function HomeAgentDemoContent() {
  const [sandboxId, setSandboxId] = useState<string | null>(null)
  const [threadId, setThreadId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [activated, setActivated] = useState(false)
  const initRef = useRef(false)

  useEffect(() => {
    if (!activated || initRef.current) return
    initRef.current = true

    async function init() {
      try {
        let sbId = localStorage.getItem('fort_home_sandbox_id')
        if (!sbId) {
          const sbRes = await fetch('/api/agent/sandbox', { method: 'POST' })
          if (!sbRes.ok) throw new Error(`Sandbox: ${sbRes.status}`)
          const data = await sbRes.json()
          sbId = data.sandboxId
          localStorage.setItem('fort_home_sandbox_id', sbId!)
        }
        setSandboxId(sbId)

        const tRes = await fetch('/api/agent/threads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sandboxId: sbId, name: 'Home Demo' }),
        })
        if (!tRes.ok) throw new Error(`Thread: ${tRes.status}`)
        const thread = await tRes.json()
        setThreadId(thread.id)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to connect')
      }
    }

    init()
  }, [activated])

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Left: Copy */}
      <div className="flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fort-gold/10 border border-fort-gold/20 w-fit mb-6">
          <span className="w-2 h-2 rounded-full bg-fort-gold animate-pulse" />
          <span className="font-sans text-fort-gold text-xs font-semibold uppercase tracking-wider">AI-Powered</span>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-fort-charcoal leading-tight">
          Get Instant Answers About Your Property
        </h2>
        <p className="font-sans text-fort-gray mt-4 leading-relaxed">
          Our AI assistant knows Metro Vancouver zoning regulations, feasibility requirements,
          and Fort&apos;s development process. Ask anything &mdash; get instant, expert-level answers.
        </p>
        <div className="mt-6 space-y-2">
          <p className="font-sans text-fort-gray text-xs uppercase tracking-wider font-semibold">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                onClick={() => setActivated(true)}
                className="px-3 py-1.5 rounded-full bg-white border border-fort-charcoal/10 font-sans text-fort-gray text-xs hover:border-fort-gold hover:text-fort-gold transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
        <a
          href="/chat"
          className="inline-flex items-center gap-2 mt-8 font-sans text-fort-gold text-sm font-semibold hover:underline"
        >
          Open full chat experience
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Right: Chat interface */}
      <div className="rounded-2xl border border-fort-charcoal/10 overflow-hidden bg-white shadow-lg">
        <div className="bg-fort-charcoal px-5 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-fort-gold flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div>
            <p className="text-white text-sm font-semibold font-sans">Fort AI Assistant</p>
            <p className="text-gray-400 text-xs font-sans">Multiplex development expert</p>
          </div>
        </div>

        {!activated ? (
          <div className="h-[400px] md:h-[460px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-fort-bg/50 to-white">
            <div className="w-16 h-16 rounded-full bg-fort-gold/10 flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-fort-gold">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-fort-charcoal">Ask Dennis AI anything</h3>
            <p className="font-sans text-fort-gray text-sm mt-2 max-w-xs">
              Zoning rules, feasibility estimates, the development process &mdash; get instant answers.
            </p>
            <button
              onClick={() => setActivated(true)}
              className="mt-6 px-6 py-3 rounded bg-fort-gold text-white font-sans font-semibold text-sm hover:bg-amber-600 transition-colors"
            >
              Start a conversation
            </button>
          </div>
        ) : error ? (
          <div className="h-[400px] md:h-[460px] flex items-center justify-center p-8">
            <div className="text-center">
              <p className="text-red-500 text-sm font-sans">{error}</p>
              <button
                onClick={() => { setError(null); initRef.current = false }}
                className="text-xs text-fort-gray hover:text-fort-charcoal underline mt-2 font-sans"
              >
                Retry
              </button>
            </div>
          </div>
        ) : sandboxId && threadId ? (
          <InlineChatPanel sandboxId={sandboxId} threadId={threadId} />
        ) : (
          <div className="h-[400px] md:h-[460px] flex items-center justify-center">
            <div className="flex items-center gap-2 text-fort-gray text-sm font-sans">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Connecting to Fort AI...
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function HomeAgentDemo() {
  return (
    <Suspense fallback={null}>
      <HomeAgentDemoContent />
    </Suspense>
  )
}
