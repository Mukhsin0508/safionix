"use client"
import { useState, useEffect } from "react"
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core"
import "@react-pdf-viewer/core/lib/styles/index.css"
import { useTranslations } from "next-intl"

const MyCertificatesPdfComp = () => {
  const t = useTranslations("certificates-page")
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)

  useEffect(() => {
    const generatePdf = async () => {
      const url = await ModifyPdf(
        "there should have been someone's certificate here",
        "/assets/example.pdf"
      )
      setPdfUrl(url)
    }
    generatePdf()
  }, [])

  return (
    <div className="mt-6 p-4.5 dashboard-box w-full h-full max-h-[592px] overflow-auto scrollbarVariant1">
      <h5 className="font-medium text-dsgBlackMain">{t("texts.1")}</h5>
      <p className="mt-4.5 text-icon-dashboard text-sm">{t("texts.2")}</p>
      <div className="mt-4.5 flex gap-6">
        <div className="w-[45%] flex-shrink-0">
          <Worker workerUrl="/pdf.worker.min.js">
            {pdfUrl ? (
              <Viewer
                fileUrl={pdfUrl}
                defaultScale={SpecialZoomLevel.PageWidth}
              />
            ) : (
              <p>Loading PDF...</p>
            )}
          </Worker>
        </div>
        <div className="">
          <div className="text-sm leading-tight">
            <span className="text-color5">Stage</span>
            <p className="mt-2 font-semibold text-icon-dashboard">1st 20%</p>
          </div>
          <div className="mt-4.5 text-sm leading-tight">
            <span className="text-color5">Dates of passage</span>
            <p className="mt-2 font-semibold text-icon-dashboard">
              11.01.2025 - 12.01.2025
            </p>
          </div>
          <div className="mt-4.5">
            <button
              className="flex items-center gap-2 text-icon-dashboard text-sm font-medium"
              onClick={() =>
                navigator.clipboard.writeText(window.location.href)
              }
            >
              <div className="size-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 13.229C10.1416 13.4609 10.3097 13.6804 10.5042 13.8828C11.7117 15.1395 13.5522 15.336 14.9576 14.4722C15.218 14.3121 15.4634 14.1157 15.6872 13.8828L18.9266 10.5114C20.3578 9.02184 20.3578 6.60676 18.9266 5.11718C17.4953 3.6276 15.1748 3.62761 13.7435 5.11718L13.03 5.85978"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10.9703 18.14L10.2565 18.8828C8.82526 20.3724 6.50471 20.3724 5.07345 18.8828C3.64218 17.3932 3.64218 14.9782 5.07345 13.4886L8.31287 10.1172C9.74413 8.62761 12.0647 8.6276 13.4959 10.1172C13.6904 10.3195 13.8584 10.539 14 10.7708"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              Link to certificate
            </button>
            <p className="mt-2 text-xs leading-tight text-color5">
              The link is publicly available: it confirms the originality of the
              certificate! Attach it to your resume or portfolio.
            </p>
          </div>
          <div className="mt-4.5">
            <a
              href={pdfUrl || ""}
              download="certificate.pdf"
              className="flex items-center gap-2 text-icon-dashboard text-sm font-medium"
            >
              <div className="size-6">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 14.5V4.5M12 14.5C11.2998 14.5 9.99153 12.5057 9.5 12M12 14.5C12.7002 14.5 14.0085 12.5057 14.5 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 16.5C20 18.982 19.482 19.5 17 19.5H7C4.518 19.5 4 18.982 4 16.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              Download PDF
            </a>
            <p className="mt-2 text-xs leading-tight text-color5">
              Download the certificate as a pdf (for printing, posting on social
              networks, etc.)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCertificatesPdfComp

import { PDFDocument, rgb, StandardFonts } from "pdf-lib"

const ModifyPdf = async (text: string, fileSrc: string) => {
  // Load the existing certificate template (place it in /public)
  const existingPdfBytes = await fetch(fileSrc).then((res) => res.arrayBuffer())

  // Load the PDF
  const pdfDoc = await PDFDocument.load(existingPdfBytes)
  const pages = pdfDoc.getPages()
  const firstPage = pages[0]

  // Embed a font
  const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

  // Draw the user’s text on the certificate
  firstPage.drawText(text, {
    x: 50, // Adjust position based on your PDF
    y: 700,
    size: 20,
    font,
    color: rgb(0 / 255, 0 / 255, 0 / 255),
  })

  // Save the modified PDF
  const modifiedPdfBytes = await pdfDoc.save()
  const blob = new Blob([modifiedPdfBytes], { type: "application/pdf" })
  return URL.createObjectURL(blob)
}
