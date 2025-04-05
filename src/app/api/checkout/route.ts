import { stripe } from '@/lib/stripe'
import { NextResponse } from 'next/server'

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Acompte projet Dave & Luce'
          },
          unit_amount: 5000
        },
        quantity: 1
      }
    ],
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel'
  })

  return NextResponse.json({ url: session.url })
}
