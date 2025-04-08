import {
  BookingBlock,
  CommentsSection,
  HomeHeader,
  NewProjects,
  OfferBlock,
  Partners,
  Showcase,
  SkillsPart,
  SuccesStories
} from "@/components";
import Collaboration from "@/components/Callobaration";

export default function Home() {
  return (
    <div>
      <main>
        <div className="container mx-auto px-4">
          <OfferBlock />
          <HomeHeader />
          <Showcase className="mt-[110px]" />
          <BookingBlock className="mt-[110px]" />
          <CommentsSection className="mt-[110px]" />
          <SkillsPart className="mt-[110px]" />
          <SuccesStories className="mt-[110px]" />
          <NewProjects />
          
        </div>
        <Collaboration  />
        <div className="container mx-auto px-4">
          <Partners/>
        </div>
      </main>
    </div>
  );
}
