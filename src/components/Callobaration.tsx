import Image from 'next/image'
import React from 'react'

const callobaration = [
  {
    id: 1,
    title: 'Crystal - communication',
    img: '/assets/crystal.png',
    description: 'HD video meetings with real-time whiteboarding.',
  },
  {
    id: 2,
    title: 'Exceeding expectations',
    img: '/assets/exceeding.png',
    description: '93% of projects delivered ahead of schedule.',
  },
  {
    id: 3,
    title: 'Anticipatory service',
    img: '/assets/anticipatory.png',
    description: 'Proactive updates and solutions before requests arise.',
  },
]

export default function Collaboration() {
  return (
    <div className="w-full mt-[110px]">
      <div
        className="hidden md:flex flex-col gap-1 px-[588px] pt-[29px]"
        style={{
          backgroundImage: "url('/assets/bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '889px',
        }}
      >
        <h2 className="text-3xl text-black font-semibold">Seamless Digital</h2>
        <span className="text-3xl font-semibold text-gray-500">Collaboration</span>
        <p className="text-gray-500 mt-2 tracking-wide w-[300px]">
          Where distance becomes irrelevant and quality takes center stage.
        </p>

        <div className="flex mt-[550px] gap-[90px] justify-center ml-[280px]">
          {callobaration.map((item) => (
            <div key={item.id} className="flex flex-col gap-4 px-4">
              <Image width={50} height={50} src={item.img} alt={item.title} className="w-[50px] h-[50px]" />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold tracking-wide text-black">{item.title}</h3>
                <p className="text-gray-500 w-[258px] h-[44px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden flex flex-col gap-2   text-center px-4">
        <div className="-mb-10   relative">
          <h2 className="text-4xl text-black mr-10  font-semibold">Seamless Digital</h2>
          <h3 className="text-4xl tracking-wide mt-4 mr-20 font-semibold text-gray-500">Collaboration</h3>
          <p className="text-gray-500  mt-3 mr-10  tracking-wider max-w-[300px] ">
            Where distance becomes irrelevant and quality takes center stage.
          </p>
        </div>

        <div
          className="w-full h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/bgcollab.png')" }}
        ></div>

        <div className="flex flex-col gap-10 mt-10 mb-20 ">
          {callobaration.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-4 px-4">
              <Image width={50} height={50} src={item.img} alt={item.title} className="w-[50px] h-[50px]" />
              <div className="flex flex-col gap-2 text-center">
                <h3 className="text-xl font-semibold tracking-wide text-black">{item.title}</h3>
                <p className="text-gray-500 w-full max-w-[258px] h-[44px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
