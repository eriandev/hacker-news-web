import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'

import './globals.css'
import type { Component } from 'types/global'

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

export default function RootLayout ({ children }: { children: React.ReactNode }): Component {
  return (
    <html lang='en'>
      <body className={['min-h-screen bg-gray-100', roboto.className].join(' ')}>
        {children}
      </body>
    </html>
  )
}
