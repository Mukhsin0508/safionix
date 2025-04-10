// components/HowItWorks.tsx
import Image from 'next/image'
import React from 'react'

const steps = [
  {
    id: 1,
    title: 'Sign Up & Start',
    icon: '/assets/pinkwork1.png',
    points: [
      'Join the exclusive IMGNRS Clubhouse.',
      'Earn 50 bonus points just for joining!',
    ],
  },
  {
    id: 2,
    title: 'Earn points',
    icon: '/assets/pinkwork2.png', 
    points: [
      'Shop with us and earn points on every purchase.',
      'Participate in special events to collect extra points.',
    ],
  },
  {
    id: 3,
    title: 'Redeem & Enjoy',
    icon: '/assets/pinkwork2.png', 
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
          <div key={step.id} className="flex flex-col  text-start text-white px-6">
            <Image
              src={step.icon}
              width={60}
              height={60}
              alt={step.title}
              className="mb-6 flex items-start"
            />
            <h3 className="text-xl font-semibold mb-4"> {step.id}. {step.title}</h3>
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
