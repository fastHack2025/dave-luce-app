'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('📨 Formulaire envoyé :', form)
    // 🛠️ Optionnel : envoyer à une API, webhook, service externe...
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 border-t">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">📬 Contactez-nous</h2>
        <p className="text-gray-600 mb-10">
          Une idée de projet ? Une question ? Laissez-nous un message.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={form.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={form.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Votre message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded w-full"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  )
}
