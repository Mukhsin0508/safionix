import { BookingBlock, Callobaration, CommentsSection, HomeHeader, NewProjects, OfferBlock, Showcase, SkillsPart, SuccesStories } from "@/components"

export default function Home() {
  return (
    <div className="">
      
      <main >
      <div className="container">
        <OfferBlock />
        <HomeHeader />
        <Showcase className="mt-[110px]" />
        <BookingBlock className="mt-[110px]" />
        <CommentsSection className="mt-[110px]" />
        <SkillsPart className="mt-[110px]" />
        <SuccesStories className="mt-[110px]" />
        <NewProjects  />
      </div>
       <Callobaration  />
       <div className="container">

       </div>
      </main>

    </div>
  )
}
