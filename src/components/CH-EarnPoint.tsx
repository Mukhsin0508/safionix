
  import Image from 'next/image';
  import React from 'react';
  
  const pointsData = [
    {url: "/assets/point-korzinka.png",
      title: 'Make a Purchase',
      desc: 'Earn 5 points for every $1 spent.',
    },
    {
      url: "/assets/point-user.png",
      title: 'Create an Account',
      desc: 'Get started with 0 points (but don’t worry, there’s more to come!)',
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
      <section className="bg-white mt-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">How to earn points</h2>
          <p className="text-gray-500 mb-12">
            Redeem your points for discounts, free products, and more…
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First Row: 3 Small Cards */}
            {pointsData.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="border flex justify-center items-center flex-col text-center border-dashed rounded-lg p-6  bg-[#F0F0F0] hover:shadow-md transition"
              >
                <Image src={item.url} width={40} height={40} alt={item.title} className="mb-4"/>
                <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
  
            {/* Second Row: 2 Small Cards + Large Card */}
            {pointsData.slice(3, 5).map((item, index) => (
              <div
                key={index}
                className="border flex justify-center items-center flex-col text-center border-dashed rounded-lg p-6  bg-[#F0F0F0] hover:shadow-md transition"
              >
               <Image src={item.url} width={40} height={40} alt={item.title} className="mb-4"/>
                <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
  
            {/* Third Row: 2 Small Cards + Large Card (continued) */}
            {pointsData.slice(5, 7).map((item, index) => (
              <div
                key={index}
                className="border flex justify-center items-center flex-col text-center border-dashed rounded-lg p-6  bg-[#F0F0F0] hover:shadow-md transition"
              >
                <Image src={item.url} width={40} height={40} alt={item.title} className="mb-4"/>
                <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
  
            {/* Large Card (Spans 2 Rows on the Right) */}
            <div className="lg:row-span-2  lg:col-start-3 lg:row-start-2 border border-dashed rounded-lg p-6 bg-[#F0F0F0] flex flex-col justify-between">
              <div>
                <Image
                  className="mx-auto mb-3"
                  src={'/assets/laptopboy.svg'}
                  width={189}
                  height={180}
                  alt="laptop"
                />
                <h3 className="font-semibold text-gray-800 mb-1">Refer a Friend</h3>
                <p className="text-sm text-gray-500">
                  Earn a whopping 1,500 points for every friend who joins.
                </p>
              </div>
              <button className="mt-6 bg-black mx-auto text-white text-sm py-2 px-4 rounded-full w-full hover:bg-gray-800">
                Join the CLUB →
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }