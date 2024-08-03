import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import classNames from 'classnames'
import ProviderWrapper from './components/ProviderWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coin Stream',
  description:
    'We bring the cryptocurrency market to your fingertips with real-time data and insightful analytics.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, 'relative')}>
        <ProviderWrapper>
          <div className="">
            <Navbar />
            {children}
          </div>
        </ProviderWrapper>
      </body>
    </html>
  )
}
