import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/PagesLayout/Navigation/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className={inter.className}>{children}</main>
      </body>
    </html>
  )
}