'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

type Devis = {
  id: string
  projet: string
  montant: number
  statut: string
  created_at: string
}

export default function AdminPage() {
  const [devisList, setDevisList] = useState<Devis[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<Partial<Devis>>({})

  useEffect(() => {
    fetchDevis()
  }, [])

  const fetchDevis = async () => {
    setLoading(true)
    const { data, error } = await supabase.from('devis').select('*').order('created_at', { ascending: false })
    if (!error && data) setDevisList(data)
    setLoading(false)
  }

  const handleEdit = (devis: Devis) => {
    setEditingId(devis.id)
    setForm({ projet: devis.projet, montant: devis.montant, statut: devis.statut })
  }

  const handleUpdate = async (id: string) => {
    if (!form.projet || !form.montant || !form.statut) return
    await supabase.from('devis').update(form).eq('id', id)
    setEditingId(null)
    fetchDevis()
  }

  const handleDelete = async (id: string) => {
    await supabase.from('devis').delete().eq('id', id)
    fetchDevis()
  }

  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🛠️ Admin – Gérer les Devis</h1>

      {loading ? (
        <p>Chargement...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300 bg-white">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3 border">Projet</th>
              <th className="p-3 border">Montant</th>
              <th className="p-3 border">Statut</th>
              <th className="p-3 border">Créé le</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {devisList.map((d) => (
              <tr key={d.id} className="hover:bg-gray-50 transition">
                <td className="p-3 border">
                  {editingId === d.id ? (
                    <input
                      value={form.projet}
                      onChange={(e) => setForm({ ...form, projet: e.target.value })}
                      className="border px-2 py-1 w-full"
                    />
                  ) : (
                    d.projet
                  )}
                </td>
                <td className="p-3 border">
                  {editingId === d.id ? (
                    <input
                      type="number"
                      value={form.montant}
                      onChange={(e) => setForm({ ...form, montant: Number(e.target.value) })}
                      className="border px-2 py-1 w-full"
                    />
                  ) : (
                    `${d.montant} €`
                  )}
                </td>
                <td className="p-3 border">
                  {editingId === d.id ? (
                    <select
                      value={form.statut}
                      onChange={(e) => setForm({ ...form, statut: e.target.value })}
                      className="border px-2 py-1 w-full"
                    >
                      <option value="en attente">En attente</option>
                      <option value="validé">Validé</option>
                      <option value="refusé">Refusé</option>
                    </select>
                  ) : (
                    d.statut
                  )}
                </td>
                <td className="p-3 border text-sm text-gray-500">{new Date(d.created_at).toLocaleString()}</td>
                <td className="p-3 border space-x-2">
                  {editingId === d.id ? (
                    <button
                      onClick={() => handleUpdate(d.id)}
                      className="text-green-600 font-semibold hover:underline"
                    >
                      💾 Sauver
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(d)}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      ✏️ Modifier
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(d.id)}
                    className="text-red-600 font-semibold hover:underline"
                  >
                    ❌ Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  )
}
