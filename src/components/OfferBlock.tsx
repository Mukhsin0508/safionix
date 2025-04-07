import { useTranslations } from "next-intl"

const OfferBlock = () => {
  const t = useTranslations("offer-block")

  return (
    <div className="bg-black text-dsgWhiteMain font-medium text-sm py-3.5 text-center">
      ✨{t("text-1")}{" "}
      <span className="font-bold">{t("text-2")}</span>
    </div>
  )
}

export default OfferBlock
