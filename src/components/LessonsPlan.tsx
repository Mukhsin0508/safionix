import { Link } from "@/lib/i18n/routing"
import { cn } from "@/lib/utils"

const LessonsPlan = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  const lessonsPlansData = [
    {
      title: "Basic knowledge of UX/UI design",
      link: "my-room/lessons/basic-knowledge-ui-ux-design",
      lessons: [
        "What is UX/UI? Figma upload and interface explanation",
        "Getting to know Figma tools and plugins",
        "1st design in Figma",
      ],
    },
    {
      title: "Learn to use the most important tools you need for design",
      link: "#",
      lessons: [
        "Opening an account on the Behance platform , Behance secrets",
        "Photoshop",
        "Continuing to explore Photoshop",
      ],
    },
    {
      title: "Deeper dive into the world of design",
      link: "#",
      lessons: [
        "Working on a real project website",
        "Continuing to work on the real project website",
        "Mobile applications",
      ],
    },
    {
      title: "PRO skills",
      link: "#",
      lessons: ["UI Kit", "Learn to design UI Kit", "UX Flow chart"],
    },
    {
      title: "Get your first order and get ready for the interview.",
      link: "#",
      lessons: ["Portfolio", "Resume", "Learn how to talk to a client"],
    },
  ]

  return (
    <div className={cn("dashboard-box mt-6 p-4.5", className)}>
      <div className="text-base font-medium text-dsgBlackMain">Lessons</div>
      <div className="px-6 mt-3.5 flex flex-col gap-3.5">
        {lessonsPlansData.map((item, index) => (
          <div className="" key={index}>
            <Link
              href={item.link}
              className="flex items-center gap-1.5 text-icon-dashboard"
            >
              <div className="size-3.5">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5073 1.94088L1 11.5034M10.5073 1.94088C10.0133 1.44627 6.6856 1.49237 5.9821 1.50238M10.5073 1.94088C11.0013 2.4355 10.9552 5.76749 10.9452 6.4719"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {item.title}
            </Link>
            <div className="border-l border-l-icon-dashboard mt-2 ml-5 pl-6 py-2.5 text-color5 ">
              <ul className="flex flex-col gap-3" style={{ listStyle: "none" }}>
                {item.lessons.map((lesson, index) => (
                  <li key={index} className="text-sm leading-tight">
                    {lesson}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-sm leading-tight">...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LessonsPlan
