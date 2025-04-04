import Hero from '@/components/Hero'
import ChatBot from '@/components/ChatBot'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <section className="p-6 bg-gray-50">
        <ChatBot />
      </section>
    </main>
  )
}
