import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shota Tonari - Personal Website',
  description: 'IT / Network / Security / DevOps / Cloud / Automation',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-[100dvh]">
          <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
            <div className="container flex items-center justify-between">
              <a className="flex items-center justify-center" href="/">
                <span className="font-bold">Shota Tonari</span>
              </a>
              <nav className="flex gap-4 sm:gap-6">
                <a className="text-sm font-medium hover:underline underline-offset-4" href="/education">
                  Education
                </a>
                <a className="text-sm font-medium hover:underline underline-offset-4" href="/skills">
                  Skills
                </a>
                <a className="text-sm font-medium hover:underline underline-offset-4" href="/experience">
                  Experience
                </a>
                <a className="text-sm font-medium hover:underline underline-offset-4" href="/projects">
                  Projects
                </a>
              </nav>
            </div>
          </header>
          <main className="flex-1 flex items-center justify-center">
            {children}
          </main>
          <footer className="flex justify-center py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-muted-foreground">© 2024 Shota Tonari. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}