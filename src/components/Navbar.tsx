"use client"
import { useState, useEffect } from "react"
import { RainbowButton, NumberTicker, Dropdown } from "./"
import { FaInstagram, FaStar } from "react-icons/fa6"
import { Sparkles } from "lucide-react"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Link } from "@/lib/i18n/routing"

const Navbar = () => {
  const t = useTranslations()
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleScrollToId = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="container px-[120px] py-7.5 max-xl:px-8">
      <div className="relative flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="cursorPointer flex-shrink-0 z-[12]">
          <div className="text-dsgblackMain">
            <svg
              width="120"
              height="19"
              viewBox="0 0 120 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.32 18.336C3.792 18.336 1.536 16.656 0.6 14.184L3.912 12.264C4.512 13.656 5.544 14.592 7.44 14.592C9.264 14.592 9.72 13.872 9.72 13.224C9.72 12.192 8.76 11.784 6.24 11.088C3.744 10.392 1.296 9.192 1.296 5.976C1.296 2.736 4.032 0.863999 6.936 0.863999C9.696 0.863999 11.856 2.184 13.08 4.656L9.84 6.552C9.264 5.352 8.472 4.608 6.936 4.608C5.736 4.608 5.136 5.208 5.136 5.88C5.136 6.648 5.544 7.176 8.16 7.968C10.704 8.736 13.56 9.624 13.56 13.176C13.56 16.416 10.968 18.336 7.32 18.336ZM27.8447 18L27.0047 15.36H20.7647L19.9247 18H15.7247L21.4367 1.2H26.3327L32.0447 18H27.8447ZM21.9167 11.76H25.8527L23.8847 5.592L21.9167 11.76ZM45.5972 4.896H39.2372V8.136H45.4772V11.832H39.2372V18H35.3972V1.2H45.5972V4.896ZM49.7859 1.2H53.6259V18H49.7859V1.2ZM66.4485 18.336C61.6245 18.336 57.7125 14.544 57.7125 9.6C57.7125 4.656 61.6245 0.863999 66.4485 0.863999C71.2725 0.863999 75.1845 4.656 75.1845 9.6C75.1845 14.544 71.2725 18.336 66.4485 18.336ZM66.4485 14.592C69.1845 14.592 71.3445 12.6 71.3445 9.6C71.3445 6.6 69.1845 4.608 66.4485 4.608C63.7125 4.608 61.5525 6.6 61.5525 9.6C61.5525 12.6 63.7125 14.592 66.4485 14.592ZM88.6266 1.2H92.4666V18H89.5866L83.1066 8.88V18H79.2666V1.2H82.1466L88.6266 10.32V1.2ZM97.2647 1.2H101.105V18H97.2647V1.2ZM119.111 18H114.743L111.911 13.152L109.079 18H104.711L109.727 9.384L104.951 1.2H109.319L111.911 5.64L114.503 1.2H118.871L114.095 9.384L119.111 18Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div
          className={cn(
            "fixed top-0 left-0 w-full z-[11] max-xl:px-8",
            scrolled ? "z-20" : ""
          )}
        >
          <div
            className={cn(
              "container flex items-center justify-center py-7.5 max-xl:justify-end",
              scrolled ? "py-4 max-xl:justify-center" : ""
            )}
          >
            <div
              className={cn(
                "flex items-center gap-10 border border-transparent transition-[background,padding] duration-200 lg:py-1.5 ",
                scrolled
                  ? "bg-dsgWhiteMain/50 backdrop-blur-md rounded-full px-10 py-3 border-[#B2B2B22B] max-xl:px-5 max-xl:justify-between max-xl:py-1 max-xl:gap-4 max-xl:w-full max-xl:max-w-[822px]"
                  : ""
              )}
            >
              {[
  { name: "navbar-link-1", link: "bundles" },
  { name: "navbar-link-2", link: "services", scrollToId: true },
  { name: "navbar-link-3", link: "become-pro" },
  { name: "navbar-link-4", link: "club-house" },
].map((item) =>
  item.scrollToId ? (
    <button
      key={item.name}
      onClick={() => handleScrollToId(item.link)}
      className="text-sm transition-colors text-dsgBlackMain hover:text-dsgBinafshaSecondary"
    >
      {t(item.name)}
    </button>
  ) : (
    <Link
      key={item.name}
      href={`/${item.link}`}
      className="text-sm transition-colors text-dsgBlackMain hover:text-dsgBinafshaSecondary"
    >
      {t(item.name)}
    </Link>
  )
)}


              <Dropdown
                onOpenChange={setDropdownOpen}
                trigger={
                  <button className="flex items-center gap-2 text-sm text-dsgBlackMain">
                    {t("navbar-link-8")}{" "}
                    <Image
                      className={cn(
                        "size-3 transition-transform duration-300",
                        {
                          "rotate-180": dropdownOpen,
                        }
                      )}
                      src="/assets/chevron-right-dark.svg"
                      alt="dropdown chevron icon"
                      width={12}
                      height={12}
                    />
                  </button>
                }
                align="end"
              >
                <ul className="overflow-hidden rounded-lg ">
                  {[
                    { name: "navbar-link-9", link: "founder", icon: "👋🏻" },
                    { name: "navbar-link-16", link: "my-room" },
                    { name: "navbar-link-10", link: "daily-news" },
                    { name: "navbar-link-11", link: "live-events" },
                    { name: "navbar-link-12", link: "reviews" },
                    { name: "navbar-link-13", link: "telegram-chanel" },
                    { name: "navbar-link-14", link: "youTube-chanel" },
                    { name: "navbar-link-15", link: "about" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={`/${item.link}`}
                      className="px-4 py-2 flex justify-end gap-[0.2rem] text-sm transition-colors duration-300 text-nowrap group hover:bg-dsgBlackMain lg:pl-10"
                    >
                      <p className="invisible transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:visible">
                        {item.icon}
                      </p>
                      {t(item.name)}
                    </Link>
                  ))}
                </ul>
              </Dropdown>
              <RainbowButton
                className={cn(
                  `group flex items-center gap-1.5 text-dsgWhiteMain transition-all`,
                  scrolled ? "" : "hidden"
                )}
              >
                <Sparkles className="size-5" />
                {t("navbar-link-6")}{" "}
                <Image
                  className="size-3 transform transition-transform duration-200 group-hover:translate-x-[50%]"
                  src="/assets/chevron-right.svg"
                  alt="chevron right icon"
                  loading="lazy"
                  width={12}
                  height={12}
                />
              </RainbowButton>
            </div>
          </div>
        </div>
        <RainbowButton className="group flex items-center gap-1.5 text-dsgWhiteMain z-[12] max-xl:hidden">
          <FaInstagram className="size-6" />
          {t("navbar-link-7")}
          <FaStar className="size-6 group-hover:text-color9  transition duration-300 text-[#989898]" />
          <div className="xl:min-w-12">
            <NumberTicker
              className="text-dsgWhiteMain min-w-10"
              value={11664}
            />
          </div>
        </RainbowButton>
      </div>
    </nav>
  )
}

export default Navbar
