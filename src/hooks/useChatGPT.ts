'use client'

import { useState } from 'react'
import { ChatMessage } from '@/types/chat'

export function useChatGPT() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async (message: string) => {
    const updatedMessages: ChatMessage[] = [
      ...messages,
      { role: 'user', content: message }
    ]
    setMessages(updatedMessages)
    setLoading(true)

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: updatedMessages })
    })

    const data = await res.json()

    setMessages([
      ...updatedMessages,
      { role: 'assistant', content: data.reply }
    ])
    setLoading(false)
  }

  return { messages, sendMessage, loading }
}
