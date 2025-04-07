import React from 'react'
import RainbowButton from './ui/rainbow-button'
import Image from 'next/image'

export default function newProjects() {
  return (
    <div className='w-[1145px] h-[480px] bg-[#171D1B] flex mt-20 justify-around rounded-[40px] mx-auto'>
        <div className='px-12 pt-[15px]'>
            <div className='mt-[120px] flex flex-col'>
                <h2 className='text-white text-[40px] font-semibold tracking-wide'>View more work</h2>
                <p className='text-[#8D8F8F] mt-5'>And see how your project could look like soon. ㅤㅤㅤㅤㅤㅤㅤㅤ </p>
            </div>
            <div className='w-full max-w-[700px]  flex items-center gap-5 mt-8'>
            <RainbowButton
                          key="header-4"
                          variant="light"
                          className="grup py-2.5 font-semibold w-1/2 flex items-center gap-1.5"
                        >
                         See all case studies
                          <Image
                            className="size-3 -rotate-90 transform transition-transform duration-200 group-hover:translate-x-[50%]"
                            src="/assets/chevron-right-dark.svg"
                            alt="chevron right dark"
                            width={20}
                            height={12}
                          />
                          
                        </RainbowButton>
              <RainbowButton
                          key="header-3"
                          className="py-2.5 font-semibold w-1/2 flex items-center gap-1.5 text-dsgWhiteMain group"
                        >
                         See recent work
                          <Image
                            className="size-3 transform  transition-transform duration-200 group-hover:translate-x-[50%]"
                            src="/assets/chevron-right.svg"
                            alt="chevron right"
                            width={20}
                            height={12}
                          />
                        </RainbowButton>
                        
            </div>
        </div>

        <div className="w-[481px]   bg-[url('/assets/newProjects.png')] rounded-3xl h-[480px] ">
          <div className='flex justify-end'>
          <button className='rounded-lg p-[6px] px-4 bg-white flex justify-center mt-4  h-[40px]  items-center gap-1'>
          <span className="relative flex items-center justify-center w-3 h-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00be3fcc] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BE3F]"></span>
          </span>
            <a className='flex items-center cursor'>New Projects</a>
          </button>
          </div>
        </div>  


    </div>
  )
}
