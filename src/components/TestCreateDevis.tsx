'use client'

export default function TestCreateDevis() {
  const handleClick = async () => {
    const res = await fetch('/api/devis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        projet: 'Création site web IA',
        montant: 1000,
        statut: 'en attente'
      })
    })

    const data = await res.json()
    console.log('✅ Réponse de l’API :', data)
  }

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
    >
      ➕ Créer un devis test
    </button>
  )
}
