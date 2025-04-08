import Image from 'next/image'
import React from 'react'

export default function Partners() {
  return (
    <div className='mt-[110px]'>
        <div className="flex justify-center items-center flex-col">
            <p className="text-gray-500 text-[13px]">Testimonals</p>
            <h2 className="text-3xl font-semibold mt-5">Hear it from our partners</h2>
        </div>

        <div className='flex justify-around mt-16 gap-7'>
            <div className='flex flex-col'>
                <h2 className='text-2xl flex mt-[120px] font-semibold'>Tarteeb.uz</h2>
                <p className='w-[540px] h-[100px] mt-8 '>Safionix has <span className='font-semibold'>provided our startup with significant leverage.</span> Their work is <span className='font-semibold'>exceptionally professional,</span> and they are <span className='font-semibold'>always attentive to our needs,</span> taking the time to understand our briefs and offer valuable direction.</p>

                <div className='flex gap-2 mt-12'>
                <Image src={'/assets/image-10.webp'} width={50} height={50} alt='Elbek'></Image>
                <div>
                <h3 className='font-semibold'>Elbek Normurodov</h3>
                <p className='text-[#252727]'>Microsoft MVP .NET Expert</p>
                </div>
                </div>

            </div>

            <div>
                <Image width={588} height={500} alt='video' src={'/assets/video.png'}/>
            </div>

        </div>

    </div>
  )
}
