import Image from 'next/image';
import React from 'react'
type Props = {
    className?: string;
  };
  const items = ["App design", "Dashboard design", "Figma", "UX/UI system"];
export default function succesStories({ className }: Props) {
  return (
    <div className={className}>
        <div className='flex justify-center items-center flex-col'>
        <p className='text-gray-500 text-[13px] '>How we helped  others  succed</p>
        <h2 className='text-3xl font-semibold mt-5'>Our success stories </h2>
        </div>

        <div className='w-[1145px] h-[580px] mx-auto mt-10 rounded-3xl bg-[#FAFAFA] relative overflow-visible  flex flex-col justify-center items-center'>
                <div className='flex gap-7 '>
                    <div className='w-[532px] h-[532px] bg-white flex rounded-2xl'>

                    </div>
                    <div className='w-[532px] h-[532px] flex flex-col rounded-2xl'>
                        <div className='flex items-center gap-3'>
                            <Image width={28} height={28} src="/assets/speaklishLogo.svg" alt="speaklish" />
                            <p className='font-semibold text-2xl'>Speaklish.uz</p>
                        </div>
                        <p className='mt-5 text-[24px]'>Designed/admin dashboard and mini-app from concept to launch.</p>
                        <div className='flex gap-5 mt-5'>
                        <p className='px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl'>AI</p>
                            <p className='px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl'>IELTS</p>
                            <p className='px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl'>App</p>
                            <p className='px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl'>Dashboard</p>
                        </div>

                        <div className='w-[530px] h-[1px] bg-[#DAE2EA] mt-[220px]'></div>
                        <div className='flex flex-col gap-1'>
                        <div className='flex gap-1 mt-5'>
                        <h2 className='text-2xl font-bold text-[#121213] tracking-wider'>3 Dashboard / App</h2>
                        <p className='flex text-[18px] text-[#606E80] tracking-wider items-end'>Designed</p>
                        </div>

                        <ul className="flex gap-8 mt-5">
                          {items.map((item, index) => (
                            <li key={index} className="flex items-center text-[#606E80]">
                              <span className="w-[6px] h-[6px]  rounded-full bg-[#7E00E1] mr-2"></span>
                              {item}
                            </li>
                          ))}
                        </ul>

                        </div>
                       
                    </div>
                </div>
        </div>
    </div>
  )
}
