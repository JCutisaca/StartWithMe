import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Start With Me',
  description: '¡Haz de tu declaración de amor un momento épico y único! "Start With Me" te ofrece la oportunidad de sorprender a esa persona especial con propuestas divertidas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta property="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="description" content={metadata.description as string} />
        <meta property="keywords" content="amor, propuestas, sorpresa, jóvenes, declaración, proponer, novia" />
        <meta property="author" content="Lucas Soldier" />
        <title>{metadata.title as string}</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}