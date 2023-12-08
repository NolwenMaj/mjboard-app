
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Provider from './components/Provider'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MJboard',
  description: 'Hé coucou',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
      <Navbar />
        <Provider> {children}</Provider>
      </body>
    </html>
  )
}
