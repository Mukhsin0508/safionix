import { Booking } from "@/components";
import FounderNavbar from "@/components/founder-footer";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <main className="flex flex-col max-w-2xl mx-auto py-12 sm:py-24 px-6 space-y-14 min-h-[100dvh]">
      <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex mt-10 justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text="Hi, I'm Safionix 👋"
                />
                <BlurFadeText
                  className="max-w-[500px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border ">
                  <AvatarImage className="object-cover mb-4" alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>

        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose prose-neutral dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </section>

        <section id="three-pillars">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Creative</h2>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Object.entries(DATA.threePillars).map(([key, value], id) => (
              <BlurFade key={key} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <Card className="hover:shadow-xl rounded-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="capitalize text-lg font-semibold">{key}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{value}</p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="leadership-traits">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">How I Lead</h2>
          </BlurFade>
          <div className="space-y-4">
            {DATA.leadershipTraits.map((trait, id) => (
              <BlurFade key={trait.title} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                <Card className="hover:bg-muted transition-colors rounded-2xl duration-300">
                  <CardHeader>
                    <CardTitle>{trait.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{trait.description}</p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="work">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Experience</h2>
          </BlurFade>
          <div className="space-y-4">
            {DATA.work.map((work, id) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="education">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Education</h2>
          </BlurFade>
          <div className="space-y-4">
            {DATA.education.map((edu, id) => (
              <BlurFade key={edu.school} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <ResumeCard
                  href={edu.href}
                  logoUrl={edu.logoUrl}
                  altText={edu.school}
                  title={edu.school}
                  subtitle={edu.degree}
                  period={`${edu.start} - ${edu.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 14 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="text-center space-y-3">
              <div className="inline-block px-3 py-1 text-sm bg-foreground text-background rounded">
                My Projects
              </div>
              <h2 className="text-3xl font-bold">Latest Highlights</h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-base">
                Crafted to merge form, function, and meaning.
              </p>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {DATA.projects.map((project, id) => (
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 16 + id * 0.05}>
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="timeline">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="text-center space-y-3">
              <div className="inline-block px-3 py-1 text-sm bg-foreground text-background rounded">
                Timeline
              </div>
              <h2 className="text-3xl font-bold">Journey Highlights</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Important milestones in my creative evolution.
              </p>
            </div>
          </BlurFade>
          <div className="space-y-4 mt-8">
            {DATA.timeline.map((entry, id) => (
              <BlurFade key={entry.period} delay={BLUR_FADE_DELAY * 18 + id * 0.05}>
                <Card>
                  <CardHeader>
                    <CardTitle>{entry.period}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {entry.achievements.map((ach, index) => (
                        <li key={index}>{ach}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="philosophy">
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <div className="text-center space-y-4 py-10">
              <div className="inline-block px-3 py-1 text-sm bg-foreground text-background rounded">
                Philosophy
              </div>
              <h2 className="text-3xl font-bold">Design is My Fingerprint</h2>
              <p className="max-w-lg mx-auto text-muted-foreground text-lg italic">
                “{DATA.philosophy.quote}”
              </p>
              <img
                src={DATA.philosophy.signature}
                alt="Signature"
                className="mx-auto h-16"
              />
            </div>
          </BlurFade>
        </section>

        <section id="contact">
          <BlurFade delay={BLUR_FADE_DELAY * 20}>
            <div className="text-center space-y-4 py-10">
              <div className="inline-block px-3 py-1 text-sm bg-foreground text-background rounded">
                Contact
              </div>
              <h2 className="text-3xl font-bold">Let’s Connect</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                DM me on{" "}
                <Link href={DATA.contact.social.IG.url} className="text-blue-500 hover:underline">Instagram</Link>, 
                book a{" "}
                <Link href={DATA.contact.social.Cal.url} className="text-blue-500 hover:underline">call</Link>, 
                or reach out via{" "}
                <Link href={DATA.contact.social.LinkedIn.url} className="text-blue-500 hover:underline">LinkedIn</Link>.
              </p>
              <p className="text-sm text-muted-foreground">
                Email: <Link href={DATA.contact.social.email.url} className="hover:underline text-blue-500">{DATA.contact.email}</Link><br />
                Phone: <span>{DATA.contact.tel}</span>
              </p>
            </div>
          </BlurFade>
        </section>

        <TooltipProvider delayDuration={0}>
          <FounderNavbar />
        </TooltipProvider>
      </main>
      <Booking />
    </div>
  );
}
