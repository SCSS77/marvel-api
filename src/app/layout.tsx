import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@fontsource/roboto-condensed'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marvel App',
  description: 'Find your favorite Marvel characters!',
  icons: {
    icon: [
      {
        url: '/favicon.png',
        href: '/favicon.png'
      }
    ]
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
