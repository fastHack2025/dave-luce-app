import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ChatBot from '@/components/ChatBot'
import Contact from '@/components/Contact'
import PaymentButton from '@/components/PaymentButton'

export default function Home() {
  return (
    <main className="flex flex-col bg-gray-50 text-gray-900">
      <Hero />
      <Services />
      <section className="p-6 bg-white border-t">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">🤖 Assistant IA</h2>
          <p className="text-gray-600">
            Discutez avec notre assistant intelligent pour obtenir un devis ou un conseil personnalisé.
          </p>
        </div>
        <ChatBot />
      </section>

      {/* 💳 Section Paiement Stripe */}
      <section className="p-6 bg-gray-100 border-t text-center">
        <h2 className="text-2xl font-semibold mb-4">Commander un service</h2>
        <p className="text-gray-600 mb-4">Payez un acompte pour lancer votre projet avec notre équipe.</p>
        <PaymentButton />
      </section>

      <Contact />
    </main>
  )
}
