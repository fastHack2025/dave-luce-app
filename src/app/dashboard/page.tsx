import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const { userId } = auth()

  // ❌ Redirection si non connecté
  if (!userId) {
    redirect('/sign-in')
  }

  // ✅ Récupère les infos utilisateur
  const user = await currentUser()

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🎉 Bienvenue, {user?.firstName} !
        </h1>
        <p className="text-gray-600 mb-8">
          Email : <strong>{user?.emailAddresses[0].emailAddress}</strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-2">💼 Vos Projets</h2>
            <p className="text-gray-600 text-sm">Liste de vos devis, paiements, services actifs…</p>
          </div>

          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-2">🎓 Formations</h2>
            <p className="text-gray-600 text-sm">Accès à vos modules et contenus en ligne.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
