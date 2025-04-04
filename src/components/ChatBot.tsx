'use client'

import { useChatGPT } from '@/hooks/useChatGPT'
import { useState } from 'react'

export default function ChatBot() {
  const { messages, sendMessage, loading } = useChatGPT()
  const [input, setInput] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    await sendMessage(input)
    setInput('')
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white border rounded-lg shadow-lg p-4">
      <div className="h-64 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className={`p-2 rounded ${msg.role === 'user' ? 'bg-blue-100 text-blue-900' : 'bg-gray-100 text-gray-800'}`}>
            <strong>{msg.role === 'user' ? 'Vous' : 'GPT'}:</strong> {msg.content}
          </div>
        ))}
        {loading && <div className="text-sm text-gray-500 italic">GPT est en train de réfléchir...</div>}
      </div>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border px-3 py-2 rounded"
          placeholder="Pose une question..."
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Envoyer
        </button>
      </form>
    </div>
  )
}
