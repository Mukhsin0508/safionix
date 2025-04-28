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
    icon: '/assets/reedem.png', 
    points: [
      'Redeem your points for exclusive Clubhouse rewards.',
      'Enjoy perks like discounts, early access, and members-only gifts!',
    ],
  },
]

export default function HowItWorks() {
  return (
    <div className="bg-[#121213] py-24 px-6">
      <h2 className="text-4xl font-bold text-white text-center mb-24">How it works</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-24 gap-y-20">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col px-4 text-white">
            <Image
              src={step.icon}
              width={70}
              height={70}
              alt={step.title}
              className="mb-6"
            />
            <h3 className="text-lg font-semibold mb-3">
              {step.id}. {step.title}
            </h3>
            <ul className="text-gray-400 space-y-3 text-base leading-relaxed">
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

