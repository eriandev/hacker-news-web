import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
  fallback: ['Arial', 'sans-serif'],
  preload: true
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang='en'>
      <body className={['min-h-screen bg-gray-100', roboto.className].join(' ')}>
        {children}
      </body>
    </html>
  )
}
