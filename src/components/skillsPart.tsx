import Image from 'next/image'
import React from 'react'

const works = ['AI','AR/VR' ,'SaaS','E-commerce','web3','Real estate' ,'Startups','Apps','Enterprise Innovators']
const clients = ['Speaklish.uz','Tradezone.uz','Speaklish App','KRInstitut','Tarteeb.uz','AHA Research','Gifted Accountant','Innovative.uz','The Wahda','Bonafit','Jasmine','Golden Heritage','View all']
const technologies = ['React.js', 'Flutter','SwiftUI','Node.js','Python/Django','.NET Core','UX Research','Motion','No-code','Web/mobile app design','Design systems','Logo & Brand design','MVPs']
const deadlines = ['Websites: 1-4 weeks','Design systems: 2-4 weeks','Branding: 1-3 weeks']
type Props = {
  className?: string;
};

export default function SkillsPart({ className }: Props) {
  return (
    <div className={className}>
      <div className='flex justify-center items-center flex-col'>
        <p className='text-gray-500 text-[13px] '>What we do</p>
        <h2 className='text-3xl font-semibold mt-5'>From concept to code. Full scope </h2>
        <h2 className='text-3xl font-semibold text-gray-500'>Service to get you from 0 -{'>'} 1</h2>
      </div>

      <div className='w-[1086px]  mx-auto mt-10 rounded-3xl bg-[#FAFAFA] shadow-xl relative overflow-visible  flex flex-col justify-center items-center'>
          <div className='flex justify-center gap-7 p-6'>
            <div className='w-[510px]  bg-[#DAE2EA59] rounded-xl'>
                <p className='p-5 text-[12px] text-[#606E80] tracking-wider'>Who we work with:</p>
                  {/* //works */}
                  <div className="px-5 mt-4 flex flex-wrap gap-3">
              {works.map((work, index) => (
                <span
                  key={index}
                  className="px-7 py-2 bg-white hover:text-black text-gray-500 border border-dashed border-gray-300 rounded-lg text-sm font-medium"
                >
                  {work}
                </span>
              ))}
            </div>

            <p className='p-5 text-[12px] text-[#606E80] mt-3 tracking-wider'>Our clients include:</p>
                  {/* //clients */}
                  <div className="px-5 mt-4 mb-2 flex flex-wrap gap-3">
                          {clients.map((client, index) =>
                    client === 'View all' ? (
                      <button
                        key={index}
                        className="px-5 py-2 bg-gray-800  text-gray-400 hover:text-white   rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                      >
                        {client}
                      </button>
                    ) : (
                      <span
                        key={index}
                        className="px-5 py-2 bg-white  text-gray-500 hover:text-black border border-dashed border-gray-300 rounded-lg text-sm font-medium"
                      >
                        {client}
                      </span>
                    )
                  )}
                      </div>
            </div>
            <div className='w-[490px] h-[498px] bg-[#121213] rounded-xl '>
            <p className='p-5 text-[12px] text-white tracking-wider'>What we do:</p>
                  {/* //what we do */}
                  <div className="px-5 mt-4 flex flex-wrap gap-3">
              {technologies.map((work, index) => (
                <span
                  key={index}
                  className="px-7 py-2 bg-[#49494C] hover:bg-black text-white border border-dashed border-gray-100 rounded-lg text-sm font-medium"
                >
                  {work}
                </span>
              ))}
            </div>

            <p className='p-5 text-[12px] text-white mt-3 tracking-wider'>How fast we do it:</p>
                  {/* //how fast  */}
                  <div className="px-5 mb-2 flex flex-wrap gap-3">
                          {deadlines.map((client, index) =>
                    client === 'View all' ? (
                      <button
                        key={index}
                        className="px-5 py-2 bg-[#49494C] text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                      >
                        {client}
                      </button>
                    ) : (
                      <span
                        key={index}
                        className="px-5 py-2 bg-[#49494C] text-white hover:bg-black border border-dashed border-gray-300 rounded-lg text-sm font-medium"
                      >
                        {client}
                      </span>
                    )
                  )}
                      </div>
            </div>
            
          </div>
          <p className='text-gray-500 text-[13px]'>Our tool stack</p>
          <div className='flex flex-col mb-5'>
                <div className='mt-4 flex gap-[70px]'>
                  <Image width={32} height={32} className='hover: fill-red-600' src="/assets/figma.svg" alt="figma" />
                  <Image width={32} height={32} className='' src="/assets/webflow.svg" alt="figma" />
                  <Image width={32} height={32} className='' src="/assets/adobe-after-effect.svg" alt="figma" />
                  <Image width={32} height={32} className='' src="/assets/blender.svg" alt="figma" />
                  <Image width={32} height={32} className='' src="/assets/vsCode.svg" alt="figma" />
                </div>
          </div>
      </div>
      
    </div>
  )
}
