import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const works = ['AI','AR/VR' ,'SaaS','E-commerce','web3','Real estate' ,'Startups','Apps','Enterprise Innovators']
const clients = [{id:1,title:'Speaklish.co',url: 'speaklish.co'},{id:2,url: 'https://tradezone.uz/',title:'Tradezone.uz'},{id:3,url: 'https://t.me/mySpeaky_bottitle',title:'Speaklish App'},{id:4,url: 'https://krinstitut.com/',title:'KRInstitut'},{id:5,url: 'https://www.tarteeb.uz/',title:'Tarteeb.uz'},{id:6,url: '#',title: 'AHA Research'},{id:7,url: 'https://www.facebook.com/dmukhiddinova/',title:'Gifted Accountant'},{id:8,url: 'https://innovaite.uz/',title:'Innovative.uz'},{id:9,url: '#',title:'The Wahda'},{id:10,url:'https://bonafit.uz/',title:'Bonafit'},{id:11,url: 'https://www.instagram.com/fitness_moda.uz',title:'Jasmine'},{id:12,url: 'https://www.goldenheritagepublishing.com/home.html',title:'Golden Heritage'},{id:13,url: '#',title:'View all'}]
const technologies = ['React.js', 'Flutter','SwiftUI','Node.js','Python/Django','.NET Core','UX Research','Motion','No-code','Web/mobile app design','Design systems','Logo & Brand design','MVPs']
const deadlines = ['Websites: 1-4 weeks','Design systems: 2-4 weeks','Branding: 1-3 weeks']

type Props = {
  className?: string;
};
interface Client {
  id: number;
  title: string;
  url: string;
}



export default function SkillsPart({ className }: Props) {
  return (
    <div className={className}>
    <div className='flex justify-center items-center flex-col text-center'>
      <p className='text-gray-500 text-[13px]'>What we do</p>
      <h2 className='text-3xl font-semibold mt-5'>From concept to code. Full scope </h2>
      <h2 className='text-3xl font-semibold text-gray-500'>Service to get you from 0 -{'>'} 1</h2>
    </div>
  
    <div className='max-w-[1086px] w-full mx-auto mt-10 rounded-3xl bg-[#FAFAFA] shadow-xl relative overflow-visible flex flex-col justify-center items-center px-4 md:px-0'>
      <div className='flex flex-col md:flex-row justify-center gap-7 p-6'>
        
        {/* Left Column */}
        <div className='w-full md:w-[510px] bg-[#DAE2EA59] rounded-xl'>
          <p className='p-5 text-[12px] text-[#606E80] tracking-wider'>Who we work with:</p>
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
          <div className="px-5 mt-4 mb-2 flex flex-wrap gap-3">
            {clients.map((client: Client, index) =>
              client.title === 'View all' ? (
                <button
                  key={index}
                  className="px-5 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-[#7E00E1] transition-colors"
                >
                  {client.title}
                </button>
              ) : (
                <Link
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="px-5 py-2 bg-white text-gray-500 hover:text-black border border-dashed border-gray-300 rounded-lg text-sm font-medium"
                >
                  {client.title}
                </Link>
              )
            )}
          </div>
        </div>
  
        {/* Right Column */}
        <div className='w-full md:w-[490px] bg-[#121213] rounded-xl mt-5 md:mt-0'>
          <p className='p-5 text-[12px] text-white tracking-wider'>What we do:</p>
          <div className="px-5 mt-4 flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-7 py-2 bg-[#49494C] hover:bg-black text-white border border-dashed border-gray-100 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
  
          <p className='p-5 text-[12px] text-white mt-3 tracking-wider'>How fast we do it:</p>
          <div className="px-5 mb-2 flex flex-wrap gap-3">
            {deadlines.map((deadline, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-[#49494C] text-white hover:bg-black border border-dashed border-gray-300 rounded-lg text-sm font-medium"
              >
                {deadline}
              </span>
            ))}
          </div>
        </div>
      </div>
  
      <p className='text-gray-500 text-[13px]'>Our tool stack</p>
      <div className='flex flex-col mb-5'>
        <div className='mt-4 flex flex-wrap justify-center gap-6'>
          <Image width={32} height={32} src="/assets/figma.svg" alt="figma" />
          <Image width={32} height={32} src="/assets/webflow.svg" alt="webflow" />
          <Image width={32} height={32} src="/assets/adobe-after-effect.svg" alt="ae" />
          <Image width={32} height={32} src="/assets/blender.svg" alt="blender" />
          <Image width={32} height={32} src="/assets/vsCode.svg" alt="vscode" />
        </div>
      </div>
    </div>
  </div>
  
  )
}
