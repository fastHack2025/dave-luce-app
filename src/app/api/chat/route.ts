import { openai } from '@/lib/openai'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages,
    temperature: 0.7
  })

  return NextResponse.json({ reply: response.choices[0].message.content })
}
