"use client"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"
import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserver"
import OverlappingAvatars from "./ui/overlaping-avatars"
import Image from "next/image"

const commentsSectionExampleImages = [
  {
    id: 1,
    src: "/assets/comments-1.webp",
    alt: "First image",
    width: "66%",
    zIndex: 1,
    left: "0%",
    top: "0%",
  },
  {
    id: 2,
    src: "/assets/comments-2.webp",
    alt: "Second image",
    width: "30%",
    zIndex: 2,
    left: "26%",
    top: "14%",
  },
  {
    id: 3,
    src: "/assets/comments-3.webp",
    alt: "Third image",
    width: "29%",
    zIndex: 3,
    left: "40%",
    top: "0%",
  },
  {
    id: 4,
    src: "/assets/comments-4.webp",
    alt: "Fourth image",
    width: "32%",
    zIndex: 2,
    left: "52%",
    top: "14%",
  },
  {
    id: 5,
    src: "/assets/comments-5.webp",
    alt: "Fifth image",
    width: "64%",
    zIndex: 1,
    right: "-5%",
    top: "2%",
  },
]
const commentsData = [
  {
    src: "/assets/image.webp",
    alt: "Avatar 1",
    comment:
      "Assalamu aleykum yaxshimisz Sevaraxon. Mani tavsiya qilganiz uchun <bold><hl>katta raxmat!</hl></bold>",
    author: "Namozova Xafizaxon / Graphic designer",
  },
  {
    src: "/assets/image-1.webp",
    alt: "Avatar 2",
    comment: "Rahmat kattakon <bold><hl>Hurmatli Ustozim!</hl></bold>",
    author: "Mohammad Sajid / @MrMohammadsajid",
  },
  {
    src: "/assets/image-2.webp",
    alt: "Avatar 3",
    comment:
      "I also want to shine a spotlight on the people who <bold><hl>helped me</hl></bold> prepare my presentation and speech in Uzbek. Your <bold><hl>support</hl></bold> meant the world to me!",
    author: "Akbar Asqarov / IT Project Manager Scrum Master Speaker",
  },
  {
    src: "/assets/image-3.webp",
    alt: "Avatar 4",
    comment:
      "I asked Sevara to <bold><hl>create a brand design</hl></bold> for the new business. She <bold><hl>carefully listened</hl></bold> to the business idea, proposed the initial suggestions, and negotiated well. She created nice <bold><hl>initial sketches,</hl></bold> made iterative improvements based on the feedback, and <bold><hl>delivered the results on time</hl></bold>.",
    author:
      "Abbos Reimov / Head Of Department at Ministry of investments and foreign trade of the Republic of Uzbekistan",
  },
  {
    src: "/assets/image-4.webp",
    alt: "Avatar 5",
    comment:
      "I asked Sevara to <bold><hl>create a brand design</hl></bold> for the new business. She <bold><hl>carefully listened</hl></bold> to the business idea, proposed the initial suggestions, and negotiated well. She created nice <bold><hl>initial sketches,</hl></bold> made iterative improvements based on the feedback, and <bold><hl>delivered the results on time</hl></bold>.",
    author: "Jonathan Donado / PMO based in California @Jonathdnado",
  },
  {
    src: "/assets/image-5.webp",
    alt: "Avatar 6",
    comment:
      "I asked Sevara to <bold><hl>create a brand design</hl></bold> for the new business. She <bold><hl>carefully listened</hl></bold> to the business idea, proposed the initial suggestions, and negotiated well. She created nice <bold><hl>initial sketches,</hl></bold> made iterative improvements based on the feedback, and <bold><hl>delivered the results on time</hl></bold>.",
    author: "Abduvosid Malikov / Power BI Data Analyst (Microsoft Certified)",
  },
  {
    src: "/assets/image-6.webp",
    alt: "Avatar 7",
    comment:
      "Manga <bold><hl>logotip</hl></bold> va <bold><hl>ilova dizayni</hl></bold> yoqdi💕 kreativ va ranglaniyam uyg’unligini yaxshi tanlaganiz ilovaga yanayam effekt berdi🔥<bold><hl>Boshqalaga o’xshamiydigan chiroyli</hl></bold> qiberganizchun <bold><hl>rahmat</hl></bold>  tanishlagayam sizzi tavsiya qilaman albatta!",
    author: "Shokhrukh Tashpulatov / Software Engineer @Pro-Data ",
  },
  {
    src: "/assets/image-7.webp",
    alt: "Avatar 8",
    comment:
      "Manga <bold><hl>logotip</hl></bold> va <bold><hl>ilova dizayni</hl></bold> yoqdi💕 kreativ va ranglaniyam uyg’unligini yaxshi tanlaganiz ilovaga yanayam effekt berdi🔥<bold><hl>Boshqalaga o’xshamiydigan chiroyli</hl></bold> qiberganizchun <bold><hl>rahmat</hl></bold>  tanishlagayam sizzi tavsiya qilaman albatta!",
    author: "Bobirjon Mardonov / Data Analyst Engineer CTO Speaklish.uz ",
  },
  {
    src: "/assets/image-8.webp",
    alt: "Avatar 9",
    comment:
      "Manga <bold><hl>logotip</hl></bold> va <bold><hl>ilova dizayni</hl></bold> yoqdi💕 kreativ va ranglaniyam uyg’unligini yaxshi tanlaganiz ilovaga yanayam effekt berdi🔥<bold><hl>Boshqalaga o’xshamiydigan chiroyli</hl></bold> qiberganizchun <bold><hl>rahmat</hl></bold>  tanishlagayam sizzi tavsiya qilaman albatta!",
    author: "Rukhsora / Vice-Rector Influencer @rukhsora_sora",
  },
  {
    src: "/assets/image-9.webp",
    alt: "Avatar 10",
    comment:
      "<bold><hl>“Belgilangan muddatda,</hl></bold> biz kutgandan yaxshiroq design qabul qilib oldik. <bold><hl>Speaklish jamoasi</hl></bold> nomidan tashakkur bildiraman. Ko’pchilik designerlar berilgan taskni o’zinigina qilib kifoyalanishadi. Sizda aloxida <bold><hl>mehir bilan,</hl></bold> o’zizdan ideyalar qo’shgan holatta bizga ma’qul bo’ladigan product taqdim qilganingiz uchun <bold><hl>kottakon rahmat!”</hl></bold>",
    author: "Mirzokhid / @m1rzokhid",
  },
  {
    src: "/assets/image-10.webp",
    alt: "Avatar 11",
    comment:
      "Sevara helped us build the <bold><hl>refined version of our startup</hl></bold> project. She was very open-minded and suggested <bold><hl>ideas</hl></bold> that are <bold><hl>new and trending.</hl></bold> Great talent!",
    author:
      "Elbek Normurodov / Microsoft MVP .NET Expert linkeidn.com/in/elbekdeveloper",
  },
  {
    src: "/assets/image-11.webp",
    alt: "Avatar 12",
    comment:
      "I also appreciate Sevara's willingness to adapt and incorporate my feedback, which made the <bold><hl>collaboration smooth and productive.</hl></bold> Her <bold><hl>designs</hl></bold> have already contributed to enhancing the <bold><hl>visual identity of</hl></bold> my <bold><hl>YouTube channel.</hl></bold>",
    author: "Abdulatif Zokirov / CEO CommerceHub Agency UNITWIN winner PM",
  },
  {
    src: "/assets/image-12.webp",
    alt: "Avatar 13",
    comment:
      "Жудаям хурсандман бу <bold><hl>курсда катнашганлигим учун</hl></bold>, ва сиз манга tutor булганингиз учун😇😇😇",
    author: "Munisa Rakhmatullayeva / UX/UI designer @armeum",
  },
  {
    src: "/assets/image-13.webp",
    alt: "Avatar 14",
    comment:
      "Raxmat kottakon. <bold><hl>Logotip uchun aloxida raxmat. Judayam yoqdi bizaga.</hl></bold> Yana sotrudnichit' qilamiz siz bilan insha'Allah 💐❤️ Ishlarizga omad tiliman.💐",
    author: "Xilola Akmalyevna / https://www.instagram.com/fitness_moda.uz",
  },
  {
    src: "/assets/image-14.webp",
    alt: "Avatar 15",
    comment:
      "The work truly reflects a deep understanding of my <bold><hl>brand's identity and vision. The creativity, attention to detail, and professionalism</hl></bold> in the design exceeded my expectations. I’m genuinely impressed!",
    author:
      "Shayxislam Seytibayev / Founder at Supa-ai.net Beta Version Solutions LLC SmartInfo Industry LLC | Yoshlar Akademiyasi BVS Holding",
  },
  {
    src: "/assets/image-15.webp",
    alt: "Avatar 16",
    comment:
      "The work truly reflects a deep understanding of my <bold><hl>brand's identity and vision. The creativity, attention to detail, and professionalism</hl></bold> in the design exceeded my expectations. I’m genuinely impressed!",
    author: "Abdulatif Zokirov / CEO CommerceHub Agency UNITWIN winner PM",
  },
]

const CommentsSection = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const elementsRef = useRef<(HTMLDivElement | null)[]>([])

  const { isIntersecting } = useIntersectionObserver(
    containerRef as React.RefObject<Element>,
    {
      threshold: 0.2,
      rootMargin: "60% 0px",
    }
  )

  useEffect(() => {
    if (!containerRef.current || !isIntersecting) return

    const loadGSAP = async () => {
      const { gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)

      const elements = elementsRef.current.filter(Boolean) as HTMLDivElement[]

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
          end: "bottom 40%",
        },
      })

      tl.fromTo(
        elements[0],
        { x: "30%", autoAlpha: 1 },
        { x: 0, autoAlpha: 1, duration: 0.6 }
      ).fromTo(
        elements[4],
        { x: "-30%", autoAlpha: 1 },
        { x: 0, autoAlpha: 1, duration: 0.6 },
        "<"
      )

      return () => {
        tl.kill()
      }
    }

    loadGSAP()
  }, [isIntersecting])

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="overflow-hidden w-full px-[324px]">
        <div ref={containerRef} className="relative h-auto">
          <div className="w-[28%] opacity-0">
            <Image
              src="/assets/comments-3.webp"
              alt=""
              width={400}
              height={500}
            />
          </div>
          {commentsSectionExampleImages.map((item) => (
            <div
              key={item.id}
              className={`absolute`}
              ref={(el) => {
                elementsRef.current[item.id] = el
              }}
              style={{
                width: item.width,
                left: item.left,
                right: item.right,
                top: item.top,
                zIndex: item.zIndex,
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full"
                width={400}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
      <OverlappingAvatars avatars={commentsData} />
    </div>
  )
}

export default CommentsSection
