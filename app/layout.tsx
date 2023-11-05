import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const nunito = Nunito_Sans({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Collpsible Table Rows',
  description: 'Animated Collapsible Table Rows with Framer Motion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
