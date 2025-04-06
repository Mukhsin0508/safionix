"use client"
import { cn } from "@/lib/utils"
import { Link, usePathname, useRouter } from "@/lib/i18n/routing"

const DashboardSidebar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (lang: string) => {
    router.replace(pathname, { locale: lang })
  }

  const sidebarData = [
    {
      link: "/my-room",
      icon: (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0003 14.1667C12.334 14.6853 11.4588 15 10.5003 15C9.54168 15 8.66652 14.6853 8.00024 14.1667"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M2.45957 11.0112C2.16539 9.09683 2.0183 8.13969 2.38022 7.29115C2.74214 6.4426 3.54511 5.86202 5.15103 4.70088L6.35091 3.83333C8.34866 2.38889 9.34752 1.66667 10.5001 1.66667C11.6526 1.66667 12.6515 2.38889 14.6493 3.83333L15.8491 4.70088C17.4551 5.86202 18.258 6.4426 18.6199 7.29115C18.9818 8.13969 18.8348 9.09683 18.5406 11.0112L18.2898 12.6437C17.8727 15.3574 17.6642 16.7143 16.6909 17.5238C15.7177 18.3333 14.2948 18.3333 11.4491 18.3333H9.5511C6.70536 18.3333 5.28251 18.3333 4.30925 17.5238C3.33599 16.7143 3.12747 15.3574 2.71044 12.6437L2.45957 11.0112Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: "My room",
    },
    {
      link: "/classroom",
      icon: (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.58325 5L7.16659 3.33333L11.7499 5L9.66659 6.25V7.5C9.66659 7.5 9.111 7.08333 7.16659 7.08333C5.22214 7.08333 4.66659 7.5 4.66659 7.5V6.25L2.58325 5ZM2.58325 5V8.33333"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.66675 7.08333V7.82407C9.66675 9.25592 8.54746 10.4167 7.16675 10.4167C5.78604 10.4167 4.66675 9.25592 4.66675 7.82407V7.08333"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.2652 9.19117C13.2652 9.19117 13.6692 8.89708 15.0833 8.89708C16.4975 8.89708 16.9015 9.19117 16.9015 9.19117M13.2652 9.19117V8.33333L11.75 7.5L15.0833 6.25L18.4167 7.5L16.9015 8.33333V9.19117M13.2652 9.19117V9.43183C13.2652 10.436 14.0792 11.25 15.0833 11.25C16.0875 11.25 16.9015 10.436 16.9015 9.43183V9.19117"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.15429 13.2717C3.36831 13.7104 1.30751 14.6063 2.56267 15.7274C3.17581 16.275 3.85869 16.6667 4.71723 16.6667H9.61625C10.4748 16.6667 11.1577 16.275 11.7708 15.7274C13.026 14.6063 10.9652 13.7104 10.1792 13.2717C8.33609 12.2427 5.99741 12.2427 4.15429 13.2717Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.8333 16.6667H16.9206C17.5645 16.6667 18.0767 16.3533 18.5365 15.9153C19.4779 15.0184 17.9323 14.3017 17.3428 13.9507C16.2801 13.3178 14.9976 13.1716 13.8333 13.5117"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: "Classroom",
    },
    {
      link: "/bundles",
      icon: (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.97241 8.74675V12.9149C2.97241 15.2727 2.97241 16.4517 3.70465 17.1842C4.43688 17.9168 5.61539 17.9167 7.97241 17.9167H12.9724C15.3294 17.9167 16.5079 17.9168 17.2402 17.1842C17.9724 16.4517 17.9724 15.2727 17.9724 12.9149V8.74675"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12.9724 14.161C12.4023 14.667 11.4947 14.9943 10.4724 14.9943C9.45008 14.9943 8.54249 14.667 7.97241 14.161"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8.91991 7.0154C8.68493 7.86407 7.83031 9.328 6.20655 9.54017C4.77285 9.7275 3.68546 9.10167 3.40771 8.84C3.10148 8.62783 2.40355 7.94893 2.23263 7.5246C2.0617 7.10027 2.26111 6.18088 2.40355 5.80605L2.97294 4.1574C3.11194 3.7433 3.43733 2.76388 3.77092 2.43261C4.10452 2.10133 4.77992 2.08692 5.05791 2.08692H10.8958C12.3985 2.10815 15.6842 2.07352 16.3337 2.08692C16.9832 2.10032 17.3735 2.64477 17.4874 2.87816C18.4565 5.22551 18.8334 6.56985 18.8334 7.1427C18.7069 7.7538 18.1834 8.90608 16.3337 9.41292C14.4112 9.93958 13.3212 8.91508 12.9793 8.52175M8.12943 8.52175C8.40005 8.85417 9.249 9.52325 10.4796 9.54017C11.7102 9.55717 12.7728 8.69858 13.1502 8.26718C13.2571 8.13988 13.4878 7.76222 13.7272 7.0154"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: "Video courses & bundles",
    },
    {
      link: "/write-review",
      icon: (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7189 3.32846C14.4842 1.95769 12.5337 2.51009 11.3621 3.39001C10.8816 3.7508 10.6414 3.93119 10.5001 3.93119C10.3587 3.93119 10.1186 3.7508 9.63808 3.39001C8.46643 2.51009 6.51599 1.95769 4.28128 3.32846C1.34847 5.12745 0.684848 11.0624 7.44969 16.0695C8.73818 17.0232 9.38241 17.5 10.5001 17.5C11.6177 17.5 12.262 17.0232 13.5505 16.0695C20.3153 11.0624 19.6517 5.12745 16.7189 3.32846Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      label: "Write review",
    },
    {
      link: "/certificates",
      icon: (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0833 18.3333C6.74422 18.3333 5.07466 18.3333 4.03733 17.1129C3 15.8926 3 13.9283 3 10C3 6.07164 3 4.10745 4.03733 2.88706C5.07466 1.66667 6.74422 1.66667 10.0833 1.66667C13.4224 1.66667 15.092 1.66667 16.1293 2.88706C16.9643 3.86944 17.1273 5.33379 17.159 7.91667"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.16675 6.66667H13.0001M7.16675 10.8333H9.66675"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.8411 15.0878C17.5435 14.5765 18.0001 13.7478 18.0001 12.8125C18.0001 11.2592 16.7409 10 15.1876 10H14.9792C13.4259 10 12.1667 11.2592 12.1667 12.8125C12.1667 13.7478 12.6233 14.5765 13.3257 15.0878M16.8411 15.0878C16.377 15.4257 15.8056 15.625 15.1876 15.625H14.9792C14.3612 15.625 13.7898 15.4257 13.3257 15.0878M16.8411 15.0878L17.3267 16.617C17.512 17.2002 17.6047 17.4919 17.5793 17.6735C17.5266 18.0514 17.2183 18.332 16.8544 18.3333C16.6796 18.334 16.4176 18.1965 15.8937 17.9216C15.669 17.8037 15.5567 17.7447 15.4417 17.71C15.2076 17.6394 14.9592 17.6394 14.7251 17.71C14.6102 17.7447 14.4978 17.8037 14.2732 17.9216C13.7492 18.1965 13.4872 18.334 13.3124 18.3333C12.9485 18.332 12.6402 18.0514 12.5875 17.6735C12.5622 17.4919 12.6548 17.2002 12.8401 16.617L13.3257 15.0878"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
      label: "Certificates",
    },
  ]

  return (
    <aside className="flex flex-col justify-center gap-6">
      <div className="px-7.5 flex flex-col gap-6">
        {sidebarData.map((item) => (
          <div key={item.label} className="relative group">
            <Link
              href={item.link}
              className={cn(
                "flex items-center justify-center text-xl rounded-full w-11 h-11 bg-color6 text-icon-dashboard aspect-square ring-1 ring-color3 transition-colors duration-300",
                { "bg-color2 text-color3": pathname === item.link }
              )}
            >
              {item.icon}
            </Link>
            <span className="text-center text-dsgWhiteMain rounded-xl absolute top-1/2 -translate-y-1/2 left-[calc(100%+8px)] text-nowrap text-base py-2 px-3 bg-color7 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:left-[calc(100%+12px)] transition-all duration-200 z-10">
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div className="px-7.5">
        <div className="relative group">
          <div
            className={cn(
              "flex items-center justify-center text-xl rounded-full w-11 h-11 bg-color6 text-icon-dashboard aspect-square ring-1 ring-color3 transition-colors duration-300 group-hover:bg-color2 group-hover:text-color3"
            )}
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66675 4.85631H6.91675M6.91675 4.85631H8.41675M6.91675 4.85631V4.16666M9.66675 4.85631H8.41675M8.41675 4.85631C8.15301 5.79946 7.60071 6.69101 6.97032 7.47454M6.97032 7.47454C6.44831 8.12334 5.87277 8.69807 5.36317 9.16666M6.97032 7.47454C6.64889 7.09769 6.19889 6.48797 6.07032 6.21211M6.97032 7.47454L7.93461 8.47699"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.75 15.8333L12.4444 14.1667M12.4444 14.1667L13.8333 10.8333L15.2223 14.1667M12.4444 14.1667H15.2223M15.9167 15.8333L15.2223 14.1667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.1667 8.33332V6.66666C12.1667 4.30963 12.1667 3.13112 11.4345 2.39889C10.7022 1.66666 9.52375 1.66666 7.16675 1.66666C4.80972 1.66666 3.63121 1.66666 2.89898 2.39889C2.16675 3.13112 2.16675 4.30963 2.16675 6.66666C2.16675 9.02366 2.16675 10.2022 2.89898 10.9344C3.63121 11.6667 4.80972 11.6667 7.16675 11.6667H8.83341"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M8.83325 13.3333C8.83325 10.9763 8.83325 9.79784 9.5655 9.06559C10.2978 8.33334 11.4763 8.33334 13.8333 8.33334C16.1903 8.33334 17.3688 8.33334 18.101 9.06559C18.8333 9.79784 18.8333 10.9763 18.8333 13.3333C18.8333 15.6903 18.8333 16.8688 18.101 17.6011C17.3688 18.3333 16.1903 18.3333 13.8333 18.3333C11.4763 18.3333 10.2978 18.3333 9.5655 17.6011C8.83325 16.8688 8.83325 15.6903 8.83325 13.3333Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M3.83325 13.75C3.83325 14.9204 3.83325 15.5056 4.11414 15.9259C4.23574 16.1079 4.39199 16.2642 4.57397 16.3858C4.99434 16.6667 5.57954 16.6667 6.74992 16.6667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.1667 6.25001C17.1667 5.07963 17.1667 4.49444 16.8858 4.07406C16.7642 3.89208 16.6079 3.73583 16.4259 3.61423C16.0056 3.33334 15.4204 3.33334 14.25 3.33334"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start gap-3 opacity-0 invisible group-hover:opacity-100 absolute top-1/2 -translate-y-1/2 left-[calc(100%+8px)] group-hover:visible group-hover:left-[calc(100%+12px)] transition-all duration-200 text-dsgWhiteMain text-nowrap text-sm">
            <span
              className="cursor-pointer px-3 py-2 rounded-xl bg-color2 hover:bg-color7 transition-all duration-200"
              onClick={() => handleLanguageChange("en")}
            >
              English
            </span>
            <span
              className="cursor-pointer px-3 py-2 rounded-xl bg-color2 hover:bg-color7 transition-all duration-200"
              onClick={() => handleLanguageChange("uz")}
            >
              Uzbek
            </span>
            <span
              className="cursor-pointer px-3 py-2 rounded-xl bg-color2 hover:bg-color7 transition-all duration-200"
              onClick={() => handleLanguageChange("ru")}
            >
              Russian
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default DashboardSidebar
