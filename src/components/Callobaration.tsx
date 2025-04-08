import Image from 'next/image'
import React from 'react'

const callobaration = [
  {id:1,title: 'Crystal - communication',img: '/assets/crystal.png',description: 'HD video meetings with real-time whiteboarding.'},
  {id:2,title: 'Exceeding expectations',img: '/assets/exceeding.png',description: '93% of projects delivered ahead of schedule.'},
  {id:3,title: 'Anticipatory service',img: '/assets/anticipatory.png',description: 'Proactive updates and solutions before requests arise.'},
]

export default function Collaboration() {
  return (
    <div className="w-full h-[889px]  mt-[110px]  bg-cover bg-center" 
         style={{ backgroundImage: "url('/assets/bg.png')" }}>

        <div className='flex gap-1 px-[588px]  flex-col pt-[29px]'>
        <h2 className='text-3xl text-black font-semibold'>Seamless Digital </h2>
        <span className='text-3xl font-semibold text-gray-500'>Collaboration</span>
        <p className='text-gray-500 mt-2 tracking-wide w-[300px]'>
        Where distance becomes irrelevant and quality takes center stage.
        </p>
        </div>

        <div className='flex mt-[550px] gap-[90px]  mx-[560px] '>
              {callobaration.map((item) => (
                <div key={item.id} className='flex flex-col gap-4  px-4'>
                  <Image width={50} height={50} src={item.img} alt={item.title} className='w-[50px] h-[50px]' />
                  <div className='flex flex-col gap-2 '>
                    <h3 className='text-xl font-semibold tracking-wide text-black'>{item.title}</h3>
                    <p className='text-gray-500 w-[258px]  text-start h-[44px]'>{item.description}</p>
                  </div>
                </div>
              ))}
          </div>

    </div>
  )
}