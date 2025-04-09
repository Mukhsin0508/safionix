// components/HowItWorks.tsx
import Image from 'next/image'
import React from 'react'

const steps = [
  {
    id: 1,
    title: 'Sign Up & Start',
    icon: '/assets/crystal.png', // o'zing kerakli iconni joylashtir
    points: [
      'Join the exclusive IMGNRS Clubhouse.',
      'Earn 50 bonus points just for joining!',
    ],
  },
  {
    id: 2,
    title: 'Earn points',
    icon: '/assets/exceeding.png', 
    points: [
      'Shop with us and earn points on every purchase.',
      'Participate in special events to collect extra points.',
    ],
  },
  {
    id: 3,
    title: 'Redeem & Enjoy',
    icon: '/assets/anticipatory.png', 
    points: [
      'Redeem your points for exclusive Clubhouse rewards.',
      'Enjoy perks like discounts, early access, and members-only gifts!',
    ],
  },
]

export default function HowItWorks() {
  return (
    <div className="bg-[#121213] py-20 px-4">
      <h2 className="text-3xl font-bold text-white text-center mb-16">How it works</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center text-white px-4">
            <Image
              src={step.icon}
              width={60}
              height={60}
              alt={step.title}
              className="mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              {step.points.map((point, idx) => (
                <li key={idx}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
