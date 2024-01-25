import './globals.css'
import './styles.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Audread',
  description: 'Read, Learn, Think',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={urbanist.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
