import { Bonafit } from '@/components'
import { items } from '@/components/succesStories'
import Image from 'next/image'
import React from 'react'

// xa = url = '/assets/case-studies/bonafit.png'
const innovaiteItems = [ 'Figma', 'UX/UI system', 'Brand book']
const kriItems = ['Figma', 'UX/UI system',]
const wahdaItems = ['Adobe Illustrator','Figma','Brand book']
const tradezoneItems = ['Figma','UX/UI system','Animation']
const fitnesItems = ['Branding','Adobe Illustrator','Figma','Brand Book']
const tarteebItems = ['Figma','UX/UI system']
export default function page() {
  return (
    <div>
        <div className="flex justify-center items-center flex-col text-center">
        <p className="text-gray-500 text-[13px]">How we helped others succeed</p>
        <h2 className="text-3xl font-semibold mt-5">Recent case studies</h2>
        {/* //speaklish */}
        <a href="https://speaklish.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="cursorPointer block">
             <div className="w-full max-w-[1145px] transition-all duration-500 ease-in-out mx-auto mt-10 rounded-3xl bg-[#FAFAFA] relative flex flex-col md:flex-row justify-center items-center hover:-translate-y-5 p-5 md:p-6 gap-6">
                
             <div className="w-full md:w-[532px] h-[300px] md:h-[532px] bg-white flex rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/case-studies/speaklish.png"
                    alt="Bonafit case study"
                    width={532}
                    height={532}
                    className="object-cover w-full h-full"
                  />
                </div>

                
                <div className="w-full md:w-[532px] flex flex-col rounded-2xl">
                  <div className="flex items-center gap-3">
                    <Image width={28} height={28} src="/assets/speaklishLogo.svg" alt="speaklish" />
                    <p className="font-semibold text-2xl">Speaklish.co</p>
                  </div>
        
                  <p className="mt-5 text-start text-[18px] md:text-[24px]">
                    Designed/admin dashboard and mini-app from concept to launch.
                  </p>
        
                  <div className="flex flex-wrap gap-8 mt-5">
                    <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">AI</p>
                    <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">IELTS</p>
                    <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">App</p>
                    <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">Dashboard</p>
                  </div>
        
                  <div className="w-full h-[1px] bg-[#DAE2EA] mt-10 md:mt-[220px]"></div>
        
                  <div className="hidden md:flex flex-col gap-1">
                    <div className="flex gap-1 mt-5">
                      <h2 className="text-2xl font-bold text-[#121213] tracking-wider">3 Dashboard / App</h2>
                      <p className="text-[18px] text-[#606E80] tracking-wider">Designed</p>
                    </div>
        
                    <ul className="flex gap-8 mt-5 flex-wrap">
                      {items.map((item, index) => (
                        <li key={index} className="flex items-center text-[#606E80]">
                          <span className="w-[6px] h-[6px] rounded-full bg-[#7E00E1] mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
             </a>
        
        {/* //innovaite */}
              <a
                href="https://innovaite.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="cursorPointer block"
              >
                 <div className="transition-all duration-500 ease-in-out hover:-translate-y-5 cursor-pointer">
                      <div className="w-full max-w-[1145px] mx-auto mt-10 rounded-3xl bg-[#FAFAFA] relative flex flex-col md:flex-row justify-center items-center md:justify-between p-5 md:p-6 gap-6">
                
                        <div className="w-full h-[300px] md:hidden bg-white rounded-2xl" />
                
                        <div className="w-full md:w-[532px] flex flex-col rounded-2xl order-2 md:order-none px-2 md:px-0">
                          <div className="flex items-center gap-3">
                            <Image width={28} height={28} src="/assets/innovatie.png" alt="innovaite" />
                            <p className="font-semibold text-2xl">Innovaite.uz</p>
                          </div>
                
                          <p className="mt-5 text-start text-[18px] md:text-[24px]">
                          Automate, reduce waits 70%, increase loyalty—Innovate’s solutions.
                          </p>
                
                          <div className="flex flex-wrap gap-8 mt-5">
                            <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">Landing page</p>
                            <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">Figma</p>
                            <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">2025</p>
                          </div>
                
                          <div className="hidden md:block">
                            <div className="w-full h-[1px] bg-[#DAE2EA] mt-[220px]"></div>
                
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1 mt-5">
                                <h2 className="text-2xl font-bold text-[#121213] tracking-wider">Website</h2>
                                <p className="flex text-[18px] text-[#606E80] tracking-wider items-end">Designed</p>
                              </div>
                
                              <ul className="flex flex-wrap gap-4 mt-5">
                                {innovaiteItems.map((item, index) => (
                                  <li key={index} className="flex items-center text-[#606E80]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-[#7E00E1] mr-2"></span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                
                         <div className="w-full md:w-[532px] h-[300px] md:h-[532px] bg-white flex rounded-2xl overflow-hidden">
                                          <Image
                                            src="/assets/case-studies/innovaite.png"
                                            alt="Bonafit case study"
                                            width={532}
                                            height={532}
                                            className="object-cover w-full h-full"
                                          />
                                        </div>
                      </div>
                    </div>
              </a>

              

              {/* //aha reasearch */}
        <a href="https://aha-research.uz/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursorPointer block">
             <div className="w-full max-w-[1145px] transition-all duration-500 ease-in-out mx-auto mt-10 rounded-3xl bg-[#FAFAFA] relative flex flex-col md:flex-row justify-center items-center hover:-translate-y-5 p-5 md:p-6 gap-6">
                
             <div className="w-full md:w-[532px] h-[300px] md:h-[532px] bg-white flex rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/case-studies/aha.png"
                    alt="Bonafit case study"
                    width={532}
                    height={532}
                    className="object-cover w-full h-full"
                  />
                </div>

                
                <div className="w-full md:w-[532px] flex flex-col rounded-2xl">
                  <div className="flex items-center gap-3">
                    <Image width={28} height={28} src="/assets/AhaLogo.svg" alt="speaklish" />
                    <p className="font-semibold text-2xl">AHA Research</p>
                  </div>
        
                  <p className="mt-5 text-start text-[18px] md:text-[24px]">
                    Designed/admin dashboard and mini-app from concept to launch.
                  </p>
        
                  <div className="flex flex-wrap gap-8 mt-5">
                    <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">AI</p>
                    <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">IELTS</p>
                    <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">App</p>
                    <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">Dashboard</p>
                  </div>
        
                  <div className="w-full h-[1px] bg-[#DAE2EA] mt-10 md:mt-[220px]"></div>
        
                  <div className="hidden md:flex flex-col gap-1">
                  <div className="flex gap-1 mt-5">
                <h2 className="text-2xl font-bold text-[#121213] tracking-wider">Website</h2>
                <p className="flex text-[18px] text-[#606E80] tracking-wider items-end">Designed</p>
              </div>
        
                    <ul className="flex gap-8 mt-5 flex-wrap">
                      {items.map((item, index) => (
                        <li key={index} className="flex items-center text-[#606E80]">
                          <span className="w-[6px] h-[6px] rounded-full bg-[#7E00E1] mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
             </a>

             {/* //bonafit */}

              <a
                     href="https://bonafit.uz"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="cursorPointer block"
                   >
                     <Bonafit />
                   </a>

                    {/* //kri ins */}
        <a href="https://krinstitut.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursorPointer block">
             <div className="w-full max-w-[1145px] transition-all duration-500 ease-in-out mx-auto mt-10 rounded-3xl bg-[#FAFAFA] relative flex flex-col md:flex-row justify-center items-center hover:-translate-y-5 p-5 md:p-6 gap-6">
                
             <div className="w-full md:w-[532px] h-[300px] md:h-[532px] bg-white flex rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/case-studies/krinstitut.png"
                    alt="Bonafit case study"
                    width={532}
                    height={532}
                    className="object-cover w-full h-full"
                  />
                </div>

                
                <div className="w-full md:w-[532px] flex flex-col rounded-2xl">
                  <div className="flex items-center gap-3">
                    <Image width={28} height={28} src="/assets/KriLogo.svg" alt="krinsttitut" />
                    <p className="font-semibold text-2xl">Krinstitut.com </p>
                  </div>
        
                  <p className="mt-5 text-start text-[18px] md:text-[24px]">
                  KRI elevates expertise in construction & engineering through Training Centers.                  </p>
        
                  <div className="flex flex-wrap gap-8 mt-5">
                    <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">University</p>
                    <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">Website</p>
                    <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">2025</p>
                  </div>
        
                  <div className="w-full h-[1px] bg-[#DAE2EA] mt-10 md:mt-[220px]"></div>
        
                  <div className="hidden md:flex flex-col gap-1">
                  <div className="flex gap-1 mt-5">
                <h2 className="text-2xl font-bold text-[#121213] tracking-wider">Website</h2>
                <p className="flex text-[18px] text-[#606E80] tracking-wider items-end">Designed</p>
              </div>
        
                    <ul className="flex gap-8 mt-5 flex-wrap">
                      {kriItems.map((item, index) => (
                        <li key={index} className="flex items-center text-[#606E80]">
                          <span className="w-[6px] h-[6px] rounded-full bg-[#7E00E1] mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
             </a>


             {/* /the wahda */}
             <a
                href="https://aha-research.uz/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursorPointer block"
              >
                 <div className="transition-all duration-500 ease-in-out hover:-translate-y-5 cursor-pointer">
                      <div className="w-full max-w-[1145px] mx-auto mt-10 rounded-3xl bg-[#FAFAFA] relative flex flex-col md:flex-row justify-center items-center md:justify-between p-5 md:p-6 gap-6">
                
                        <div className="w-full h-[300px] md:hidden bg-white rounded-2xl" />
                
                        <div className="w-full md:w-[532px] flex flex-col rounded-2xl order-2 md:order-none px-2 md:px-0">
                          <div className="flex items-center gap-3">
                            <Image width={28} height={28} src="/assets/wahda.png" alt="innovaite" />
                            <p className="font-semibold text-2xl">The Wahda</p>
                          </div>
                
                          <p className="mt-5 text-start text-[18px] md:text-[23px]">
                          For &apos;The Wahda&apos;—a cloud-based hosting platform we developed the brand and logo from scratch.
                          </p>
                
                          <div className="flex flex-wrap gap-8 mt-5">
                            <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">Branding</p>
                            <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">Tech</p>
                            <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">2025</p>
                          </div>
                
                          <div className="hidden md:block">
                            <div className="w-full h-[1px] bg-[#DAE2EA] mt-[220px]"></div>
                
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1 mt-5">
                                <h2 className="text-2xl font-bold text-[#121213] tracking-wider">Brand/Logo</h2>
                                <p className="flex text-[18px] text-[#606E80] tracking-wider items-end">Designed</p>
                              </div>
                
                              <ul className="flex flex-wrap gap-4 mt-5">
                                {wahdaItems.map((item, index) => (
                                  <li key={index} className="flex items-center text-[#606E80]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-[#7E00E1] mr-2"></span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                
                         <div className="w-full md:w-[532px] h-[300px] md:h-[532px] bg-white flex rounded-2xl overflow-hidden">
                                          <Image
                                            src="/assets/case-studies/wahda.png"
                                            alt="Bonafit case study"
                                            width={532}
                                            height={532}
                                            className="object-cover w-full h-full"
                                          />
                                        </div>
                      </div>
                    </div>
              </a>

              {/* /tradezone */}

              <a href="https://tradezone.uz/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursorPointer block">
             <div className="w-full max-w-[1145px] transition-all duration-500 ease-in-out mx-auto mt-10 rounded-3xl bg-[#FAFAFA] relative flex flex-col md:flex-row justify-center items-center hover:-translate-y-5 p-5 md:p-6 gap-6">
                
             <div className="w-full md:w-[532px] h-[300px] md:h-[532px] bg-white flex rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/case-studies/tradezone.png"
                    alt="Bonafit case study"
                    width={532}
                    height={532}
                    className="object-cover w-full h-full"
                  />
                </div>

                
                <div className="w-full md:w-[532px] flex flex-col rounded-2xl">
                  <div className="flex items-center gap-3">
                    <Image width={60} height={34} src="/assets/tradezone.png" alt="krinsttitut" />
                    <p className="font-semibold text-2xl">Tradezone.uz </p>
                  </div>
        
                  <p className="mt-5 text-start text-[18px] md:text-[24px]">
                  Website design for TradeZone — sleek, functional, and conversion-focused.                </p>
        
                  <div className="flex flex-wrap gap-8 mt-5">
                    <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">Landing Page</p>
                    <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">Figma</p>
                    <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">2024</p>
                  </div>
        
                  <div className="w-full h-[1px] bg-[#DAE2EA] mt-10 md:mt-[220px]"></div>
        
                  <div className="hidden md:flex flex-col gap-1">
                  <div className="flex gap-1 mt-5">
                <h2 className="text-2xl font-bold text-[#121213] tracking-wider">Website</h2>
                <p className="flex text-[18px] text-[#606E80] tracking-wider items-end">Designed</p>
              </div>
        
                    <ul className="flex gap-8 mt-5 flex-wrap">
                      {tradezoneItems.map((item, index) => (
                        <li key={index} className="flex items-center text-[#606E80]">
                          <span className="w-[6px] h-[6px] rounded-full bg-[#7E00E1] mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
             </a>

             {/* //innovaite */}
             <a
                href="https://innovaite.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="cursorPointer block"
              >
                 <div className="transition-all duration-500 ease-in-out hover:-translate-y-5 cursor-pointer">
                      <div className="w-full max-w-[1145px] mx-auto mt-10 rounded-3xl bg-[#FAFAFA] relative flex flex-col md:flex-row justify-center items-center md:justify-between p-5 md:p-6 gap-6">
                
                        <div className="w-full h-[300px] md:hidden bg-white rounded-2xl" />
                
                        <div className="w-full md:w-[532px] flex flex-col rounded-2xl order-2 md:order-none px-2 md:px-0">
                          <div className="flex items-center gap-3">
                            <Image width={28} height={28} src="/assets/innovatie.png" alt="innovaite" />
                            <p className="font-semibold text-2xl">Innovaite.uz</p>
                          </div>
                
                          <p className="mt-5 text-start text-[18px] md:text-[24px]">
                          Automate, reduce waits 70%, increase loyalty—Innovate’s solutions.
                          </p>
                
                          <div className="flex flex-wrap gap-8 mt-5">
                            <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">Landing page</p>
                            <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">Figma</p>
                            <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">2025</p>
                          </div>
                
                          <div className="hidden md:block">
                            <div className="w-full h-[1px] bg-[#DAE2EA] mt-[220px]"></div>
                
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1 mt-5">
                                <h2 className="text-2xl font-bold text-[#121213] tracking-wider">Website</h2>
                                <p className="flex text-[18px] text-[#606E80] tracking-wider items-end">Designed</p>
                              </div>
                
                              <ul className="flex flex-wrap gap-4 mt-5">
                                {innovaiteItems.map((item, index) => (
                                  <li key={index} className="flex items-center text-[#606E80]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-[#7E00E1] mr-2"></span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                
                         <div className="w-full md:w-[532px] h-[300px] md:h-[532px] bg-white flex rounded-2xl overflow-hidden">
                                          <Image
                                            src="/assets/case-studies/innovaite.png"
                                            alt="Bonafit case study"
                                            width={532}
                                            height={532}
                                            className="object-cover w-full h-full"
                                          />
                                        </div>
                      </div>
                    </div>
              </a>


              {/* /tradezone */}

              <a href="https://www.instagram.com/fitness_moda.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="cursorPointer block">
             <div className="w-full max-w-[1145px] transition-all duration-500 ease-in-out mx-auto mt-10 rounded-3xl bg-[#FAFAFA] relative flex flex-col md:flex-row justify-center items-center hover:-translate-y-5 p-5 md:p-6 gap-6">
                
             <div className="w-full md:w-[532px] h-[300px] md:h-[532px] bg-white flex rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/case-studies/moda.png"
                    alt="Bonafit case study"
                    width={532}
                    height={532}
                    className="object-cover w-full h-full"
                  />
                </div>

                
                <div className="w-full md:w-[532px] flex flex-col rounded-2xl">
                  <div className="flex items-center gap-3">
                    {/* <Image width={60} height={34} src="/assets/tradezone.png" alt="krinsttitut" /> */}
                    <p className="font-semibold text-2xl">Fitness_moda.uz</p>
                  </div>
        
                  <p className="mt-5 text-start text-[18px] md:text-[24px]">
                  Designed branding & logo for @fitness_moda.uz sportswear.            </p>
        
                  <div className="flex flex-wrap gap-8 mt-5">
                    <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">Fitness</p>
                    <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">Branding</p>
                    <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">Logotip</p>
                    <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">2024</p>
                  </div>
        
                  <div className="w-full h-[1px] bg-[#DAE2EA] mt-10 md:mt-[220px]"></div>
        
                  <div className="hidden md:flex flex-col gap-1">
                  <div className="flex gap-1 mt-5">
                <h2 className="text-2xl font-bold text-[#121213] tracking-wider">Branding / Logotip </h2>
                <p className="flex text-[18px] text-[#606E80] tracking-wider items-end">Designed</p>
              </div>
        
                    <ul className="flex gap-8 mt-5 flex-wrap">
                      {fitnesItems.map((item, index) => (
                        <li key={index} className="flex items-center text-[#606E80]">
                          <span className="w-[6px] h-[6px] rounded-full bg-[#7E00E1] mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
             </a>

             {/* //tarteebs */}
             <a
                href="https://tarteeb.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="cursorPointer block"
              >
                 <div className="transition-all duration-500 ease-in-out hover:-translate-y-5 cursor-pointer">
                      <div className="w-full max-w-[1145px] mx-auto mt-10 rounded-3xl bg-[#FAFAFA] relative flex flex-col md:flex-row justify-center items-center md:justify-between p-5 md:p-6 gap-6">
                
                        <div className="w-full h-[300px] md:hidden bg-white rounded-2xl" />
                
                        <div className="w-full md:w-[532px] flex flex-col rounded-2xl order-2 md:order-none px-2 md:px-0">
                          <div className="flex items-center gap-3">
                            <p className="font-semibold text-2xl">Tarteeb</p>
                          </div>
                
                          <p className="mt-5 text-start text-[18px] md:text-[24px]">
                          We designed a custom dashboard for Tarteeb company.
                          </p>
                
                          <div className="flex flex-wrap gap-8 mt-5">
                            <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">Dashboard</p>
                            <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">Tech</p>
                            <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">2024</p>
                          </div>
                
                          <div className="hidden md:block">
                            <div className="w-full h-[1px] bg-[#DAE2EA] mt-[220px]"></div>
                
                            <div className="flex flex-col gap-1">
                              <div className="flex gap-1 mt-5">
                                <h2 className="text-2xl font-bold text-[#121213] tracking-wider">Dashboard</h2>
                                <p className="flex text-[18px] text-[#606E80] tracking-wider items-end">Designed</p>
                              </div>
                
                              <ul className="flex flex-wrap gap-4 mt-5">
                                {tarteebItems.map((item, index) => (
                                  <li key={index} className="flex items-center text-[#606E80]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-[#7E00E1] mr-2"></span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                
                         <div className="w-full md:w-[532px] h-[300px] md:h-[532px] bg-white flex rounded-2xl overflow-hidden">
                                          <Image
                                            src="/assets/case-studies/tarteeb.png"
                                            alt="Bonafit case study"
                                            width={532}
                                            height={532}
                                            className="object-cover w-full h-full"
                                          />
                                        </div>
                      </div>
                    </div>
              </a>
      </div>
    </div>
  )
}
