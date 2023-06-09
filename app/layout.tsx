import { HeaderTitle } from './_components/HeaderTitle'
import { NavLinks } from './_components/NavLinks'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RSC HackerNews Bookmark',
  description: 'HackerNews Bookmark App with Next App Router',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <HeaderTitle>RSC HackerNews Bookmark</HeaderTitle>
          <NavLinks links={[{ text: "Home", url: "/"}, { text: "My", url: "/my" }]} />
        </header>
        {children}
      </body>
    </html>
  )
}
