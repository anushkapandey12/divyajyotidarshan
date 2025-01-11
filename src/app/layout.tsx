import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Divya Jyoti Darshan - Empowering Communities in Jharkhand',
  description: 'Divya Jyoti Darshan is an NGO based in Bokaro, Jharkhand, dedicated to supporting underprivileged communities through education, healthcare, and rural development initiatives.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

