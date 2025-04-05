import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const { userId } = auth()
  if (!userId) redirect('/sign-in')

  const user = await currentUser()
  const email = user?.emailAddresses[0].emailAddress
  const avatar = user?.imageUrl
  const nom = `${user?.firstName} ${user?.lastName}`

  const { data: devis } = await supabase
    .from('devis')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  const { data: paiements } = await supabase
    .from('paiements')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* 👤 Profil */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src={avatar ?? ''}
            alt="avatar"
            className="w-16 h-16 rounded-full border shadow"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{nom}</h1>
            <p className="text-gray-600 text-sm">{email}</p>
          </div>
        </div>

        {/* 📄 Devis */}
        <h2 className="text-xl font-semibold mb-4">📄 Vos devis</h2>
        {devis && devis.length > 0 ? (
          <table className="w-full border border-gray-300 bg-white mb-8">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3 border">Projet</th>
                <th className="p-3 border">Montant</th>
                <th className="p-3 border">Statut</th>
                <th className="p-3 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {devis.map((d) => (
                <tr key={d.id} className="hover:bg-gray-50">
                  <td className="p-3 border">{d.projet}</td>
                  <td className="p-3 border">{d.montant} €</td>
                  <td className="p-3 border">{d.statut}</td>
                  <td className="p-3 border text-sm text-gray-500">
                    {new Date(d.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">Aucun devis trouvé pour le moment.</p>
        )}

        {/* 💳 Paiements */}
        <h2 className="text-xl font-semibold mb-4">💳 Vos paiements</h2>
        {paiements && paiements.length > 0 ? (
          <table className="w-full border border-gray-300 bg-white">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3 border">Montant</th>
                <th className="p-3 border">Statut</th>
                <th className="p-3 border">Stripe ID</th>
                <th className="p-3 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {paiements.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="p-3 border">{p.montant} €</td>
                  <td className="p-3 border">{p.statut}</td>
                  <td className="p-3 border text-sm">{p.stripe_id}</td>
                  <td className="p-3 border text-sm text-gray-500">
                    {new Date(p.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">Aucun paiement trouvé.</p>
        )}
      </div>
    </main>
  )
}
