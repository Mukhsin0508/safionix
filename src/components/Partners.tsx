import Image from 'next/image'
import React from 'react'

export default function Partners() {
  return (
    <div className='mt-[110px]'>
        <div className="flex justify-center items-center flex-col">
            <p className="text-gray-500 text-[13px]">Testimonals</p>
            <h2 className="text-3xl font-semibold mt-5">Hear it from our partners</h2>
        </div>

        <div className='flex justify-center mt-10'>
            <div className='flex items-center'>
                <h2 className='text font-semibold'>Tarteeb.uz</h2>
            </div>

            <div>
                <Image width={588} height={500} alt='video' src={'/assets/video.png'}/>
            </div>

        </div>

    </div>
  )
}
