'use client'

export default function PaymentButton() {
  const handleClick = async () => {
    const res = await fetch('/api/checkout', { method: 'POST' })
    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    }
  }

  return (
    <button
      onClick={handleClick}
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow mt-6"
    >
      💳 Commander pour 50€
    </button>
  )
}
