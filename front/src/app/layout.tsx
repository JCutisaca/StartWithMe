import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Start With Me',
  description: '¡Haz de tu declaración de amor un momento épico y único! "Start With Me" te ofrece la oportunidad de sorprender a esa persona especial con propuestas divertidas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
