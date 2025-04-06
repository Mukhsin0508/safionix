import { BookingBlock, CommentsSection, HomeHeader, OfferBlock, Showcase, SkillsPart } from "@/components"

export default function Home() {
  return (
    <div className="container">
      <OfferBlock />
      <HomeHeader />
      <main>
        <Showcase className="mt-[110px]" />
        <BookingBlock className="mt-[110px]" />
        <CommentsSection className="mt-[110px]" />
        <SkillsPart className="mt-[110px]" />
      </main>
    </div>
  )
}
