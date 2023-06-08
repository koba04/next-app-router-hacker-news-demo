import { NavLinks } from './_components/NavLinks'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next HackerNews',
  description: 'HackerNews App with Next App Router',
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
          <h1 className="text-5xl text-center py-4">Next HackerNews</h1>
          <NavLinks links={[{ text: "Home", url: "/"}, { text: "My", url: "/my" }]} />
        </header>
        {children}
      </body>
    </html>
  )
}
