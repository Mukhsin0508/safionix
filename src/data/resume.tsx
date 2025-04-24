import { Icons } from "@/components/ui/icons";
import { CalendarCheck2Icon, InstagramIcon, NotebookIcon } from "lucide-react";
import { FaTelegram } from "react-icons/fa6";

export const DATA = {
  name: "Safionix",
  initials: "SA",
  url: "https://safionix.com",
  location: "Tashkent, Uzbekistan",
  locationLink: "https://www.google.com/maps/place/Tashkent",
  description: "A Connoisseur of Design, Architect of Digital Legacies",
  summary: `
    With an unshakable belief that true design marries aesthetics with purpose, 
    I’ve dedicated my career to crafting experiences that resonate beyond screens. 
    As the founder and CEO of Safionix, my journey began not as a pursuit of trends, 
    but as a relentless quest to redefine how technology interacts with human intuition.

    What distinguishes my leadership:
    - A polymath’s curiosity – From UI/UX to backend architecture, I speak the language 
      of both designers and engineers, ensuring no detail escapes perfection.
    - An aristocrat’s discretion – Like Swiss watchmakers, we prioritize quiet excellence 
      over loud announcements. Our work whispers quality.
    - A general’s resolve – The late nights refining projects mirror my philosophy: 
      "If it doesn’t stir the soul, it doesn’t leave this studio."
  `,
  avatarUrl: "/assets/founder.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "TailwindCSS",
    "UI/UX Design",
    "Branding",
    "Figma",
  ],
  navbar: [
    { href: "/", icon: Icons.home, label: "Home" },
    { href: "https://chat.whatsapp.com/JkvSJrD0FfT0MyVUVmPr62", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@safionix.com",
    tel: "+998901234567",
    social: {
      Cal: {
        name: "Cal",
        url: "https://cal.com/safionix.com/book.a.call",
        icon: CalendarCheck2Icon,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sevara-abdukhalilova/",
        icon: Icons.linkedin,
        navbar: true,
      },
      IG: {
        name: "Instagram",
        url: "https://www.instagram.com/safionix?igsh=OTBkZHF2eGRrNXNs",
        icon: InstagramIcon,
        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/idesign_ux_ui",
        icon: FaTelegram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hello@safionix.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Safionix",
      href: "https://safionix.com",
      badges: ["Founder & CEO"],
      location: "Tashkent, Uzbekistan",
      title: "Founder & CEO",
      logoUrl: "/assets/safionix.png",
      start: "2020",
      end: "Present",
      description:
        "Founded Safionix to create intentional design solutions that blend beauty, function, and legacy. Led the development of award-winning projects like Speaklish’s AI-driven dashboard and Bonafit’s fitness ecosystem, scaling the studio to serve global clients with quiet excellence.",
    },
  ],
  education: [
    {
      school: "Tashkent University of Information Technologies",
      href: "https://tuit.uz",
      degree: "Bachelor’s in Computer Science",
      logoUrl: "/assets/tuit-logo.png",
      start: "2016",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Speaklish AI Dashboard",
      href: "https://speaklish.uz",
      dates: "2024 - 2025",
      active: true,
      description:
        "Crafted an AI-driven dashboard and mini-app for Speaklish, honored with Uzbekistan’s Presidential Tech Award in the AI-Driven Technologies category.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Node.js",
        "Postgres",
      ],
      links: [
        {
          type: "Website",
          href: "https://speaklish.uz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/speaklish.png",
      video: "",
    },
    {
      title: "Jasmine Sportswear Branding",
      href: "https://www.instagram.com/fitness_moda.uz",
      dates: "2024 - 2025",
      active: true,
      description:
        "Reimagined Jasmine Sportswear’s brand identity, elevating it to Tashkent’s premier activewear atelier.",
      technologies: ["UI/UX Design", "Branding", "Figma"],
      links: [
        {
          type: "Website",
          href: "https://jasmine-sportswear.uz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/jasmine.png",
      video: "",
    },
    {
      title: "KRlnstitut Digital Presence",
      href: "https://krinstitut.com/",
      dates: "2024 - 2025",
      active: true,
      description:
        "Architected KRlnstitut’s scholarly digital presence, mirroring their academic gravitas.",
      technologies: ["React", "Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://krinstitut.uz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/krinstitut.png",
      video: "",
    },
    {
      title: "The Wahda Luxury Branding",
      href: "https://thewahda.com",
      dates: "2024 - 2025",
      active: true,
      description:
        "Designed The Wahda’s luxury branding suite, featured in Vogue Arabia’s startup spotlight.",
      technologies: ["UI/UX Design", "Branding", "Figma"],
      links: [
        {
          type: "Website",
          href: "https://aha-research.uz/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/thewahda.png",
      video: "",
    },
    {
      title: "Bonafit Fitness Ecosystem",
      href: "https://bonafit.uz",
      dates: "2025",
      active: true,
      description:
        "Designed Bonafit’s fitness ecosystem app, achieving a 4.8★ rating on the App Store with 15K+ downloads.",
      technologies: [
        "React Native",
        "Typescript",
        "TailwindCSS",
        "Node.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://bonafit.uz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/bonafit.png",
      video: "",
    },
    {
      title: "Innovatie.uz Interface",
      href: "https://innovaite.uz/",
      dates: "2025",
      active: true,
      description:
        "Pioneered Innovatie.uz’s tech-forward interface, doubling their investor engagement.",
      technologies: ["React", "Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://innovatie.uz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/innovatie.png",
      video: "",
    },
  ],
  hackathons: [],
  threePillars: {
    beauty: "Every pixel must honor its purpose.",
    function: "Technology should serve, not distract.",
    legacy: "We build what outlives trends.",
  },
  leadershipTraits: [
    {
      title: "Strategic Alchemy",
      description:
        "Turned Safionix from a concept into a globally referenced design authority in 5 years. Foresaw the AI-design convergence early, embedding it into our 2025 roadmap.",
    },
    {
      title: "Uncompromising Craftsmanship",
      description:
        "Personally oversee all projects, ensuring they meet the Three Pillars of beauty, function, and legacy.",
    },
    {
      title: "Leadership as Patronage",
      description:
        "Cultivate talent like Renaissance masters nurtured apprentices.",
    },
  ],
  philosophy: {
    quote: "I measure success not in valuations, but in problems solved with elegance.",
    signature: "/assets/signature.svg",
  },
  timeline: [
    {
      period: "2024-2025",
      achievements: [
        "Crafted Speaklish’s AI-driven dashboard and mini-app, later honored with Uzbekistan’s Presidential Tech Award (AI-Driven Technologies category).",
        "Reimagined Jasmine Sportswear’s brand identity, elevating it to Tashkent’s premier activewear atelier.",
        "Scaled Safionix to serve global clients.",
        "Architected KRlnstitut’s scholarly digital presence, mirroring their academic gravitas.",
        "Designed The Wahda’s luxury branding suite, now featured in Vogue Arabia’s startup spotlight.",
      ],
    },
    {
      period: "2025",
      achievements: [
        "Launched Safionix.com as a private portal for our most discerning patrons.",
        "Designed Bonafit’s fitness ecosystem App design (4.8★ on App Store, 15K+ downloads).",
        "Pioneered Innovatie.uz’s tech-forward interface, doubling their investor engagement.",
      ],
    },
  ],
} as const;