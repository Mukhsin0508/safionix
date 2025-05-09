// ─── Static-export helpers ────────────────────────────────────────────
export const dynamic = 'force-static';           // don’t switch to SSR

export async function generateStaticParams() {
  // Tell Next to emit /en, /ru and /uz versions of every page
  return [
    { locale: 'en' },
    { locale: 'ru' },
    { locale: 'uz' },
  ];
}
// ──────────────────────────────────────────────────────────────────────

import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Safionix',
  description: 'design',
};

export default async function RootLayout({
                                           children,
                                           params,
                                         }: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;                // not a Promise ➜ plain object
  const messages = await getMessages({     // fetch the right locale bundle
    locale,
  });

  return (
      <html lang={locale}>
      <body className={`${geistSans.variable} antialiased`}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
      </body>
      </html>
  );
}
