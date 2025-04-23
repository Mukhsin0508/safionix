import Image from 'next/image';
import React from 'react';

const pointsData = [
  {
    url: "/assets/point-korzinka.png",
    title: 'Make a Purchase',
    desc: 'Earn 5 points for every $1 spent.',
  },
  {
    url: "/assets/point-user.png",
    title: 'Create an Account',
    desc: "Get started with 0 points (but don't worry, there's more to come!)",
  },
  {
    url: "/assets/point-message.png",
    title: 'Sign Up to Our Mailing List',
    desc: 'Receive 150 points instantly.',
  },
  {
    url: "/assets/point-instagram.png",
    title: 'Follow Us on Instagram',
    desc: 'Grab 25 points just for following us.',
  },
  {
    url: "/assets/point-cake.png",
    title: 'Celebrate Your Birthday',
    desc: 'Enjoy a special gift of 200 points on your big day!',
  },
  {
    url: "/assets/point-telegram.png",
    title: 'Follow Us on Telegram',
    desc: 'Add 15 points to your balance.',
  },
  {
    url: "/assets/point-whatsapp.png",
    title: 'Follow Us on WhatsApp',
    desc: 'Another 15 points are waiting for you!',
  },
];

export default function EarnPoints() {
  return (
    <section className="bg-white mt-16 sm:mt-24 md:mt-32 px-4 sm:px-6 md:px-0">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">How to earn points</h2>
        <p className="text-gray-500 mb-8 md:mb-12">
          Redeem your points for discounts, free products, and more…
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {/* First row (3 items) */}
          {pointsData.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="border flex justify-center items-center flex-col text-center border-dashed rounded-lg p-4 md:p-6 bg-[#F0F0F0] hover:shadow-md transition"
            >
              <div className="relative w-10 h-10 mb-3">
                <Image 
                  src={item.url} 
                  fill
                  style={{ objectFit: 'contain' }}
                  alt={item.title}
                />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}

          {/* Second row (2 items) */}
          {pointsData.slice(3, 5).map((item, index) => (
            <div
              key={index}
              className="border flex justify-center items-center flex-col text-center border-dashed rounded-lg p-4 md:p-6 bg-[#F0F0F0] hover:shadow-md transition"
            >
              <div className="relative w-10 h-10 mb-3">
                <Image 
                  src={item.url} 
                  fill
                  style={{ objectFit: 'contain' }}
                  alt={item.title}
                />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}

          {/* Third row (2 items) */}
          {pointsData.slice(5, 7).map((item, index) => (
            <div
              key={index}
              className="border flex justify-center items-center flex-col text-center border-dashed rounded-lg p-4 md:p-6 bg-[#F0F0F0] hover:shadow-md transition"
            >
              <div className="relative w-10 h-10 mb-3">
                <Image 
                  src={item.url} 
                  fill
                  style={{ objectFit: 'contain' }}
                  alt={item.title}
                />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}

          {/* Special "Refer a Friend" card - keeps original desktop layout but improves on mobile */}
          <div className="border border-dashed rounded-lg p-4 md:p-6 bg-[#F0F0F0] flex flex-col justify-between lg:row-span-2 lg:col-start-3 lg:row-start-2">
            <div>
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-3">
                <Image
                  src={'/assets/laptopboy.svg'}
                  fill
                  style={{ objectFit: 'contain' }}
                  alt="laptop"
                />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Refer a Friend</h3>
              <p className="text-sm text-gray-500">
                Earn a whopping 1,500 points for every friend who joins.
              </p>
            </div>
            <button className="mt-4 md:mt-6 group bg-black mx-auto text-white text-sm py-2 px-4 rounded-full w-full hover:bg-gray-800 transition">
              Join the CLUB <span>
                <Image
                  className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1"
                  src="/assets/chevron-right.svg"
                  alt="chevron right"
                  width={6}
                  height={6}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}