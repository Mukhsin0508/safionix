import Image from "next/image"
import { Link } from "@/lib/i18n/routing"

const DashboardNav = () => {
  return (
    <nav className="flex items-center justify-between p-7.5">
      <Link href="/my-room" className="flex-shrink-0">
        <div>
          <Image src="/assets/logotip.svg" alt="Logo" width={40} height={30} />
        </div>
      </Link>
      <div className="flex items-center gap-9">
        <button className="text-dsgBinafshaSecondary bg-[#E5E2F5] flex items-center gap-2 rounded-lg px-3 py-2.5">
          <Image
            className="size-6"
            src="/assets/gift.svg"
            alt="gift icon"
            width={24}
            height={24}
          />
          Refer & Earn 200 USD
        </button>
        <Link href="/auth/signup">
          <div className="size-11 text-icon-dashboard cursor-pointer">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.0001 40.3333C32.1253 40.3333 40.3334 32.1252 40.3334 22C40.3334 11.8747 32.1253 3.66663 22.0001 3.66663C11.8749 3.66663 3.66675 11.8747 3.66675 22C3.66675 32.1252 11.8749 40.3333 22.0001 40.3333Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M13.75 31.1667C18.0248 26.6893 25.9292 26.4785 30.25 31.1667M26.5744 17.4167C26.5744 19.948 24.5194 22 21.9844 22C19.4497 22 17.3946 19.948 17.3946 17.4167C17.3946 14.8854 19.4497 12.8334 21.9844 12.8334C24.5194 12.8334 26.5744 14.8854 26.5744 17.4167Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default DashboardNav
