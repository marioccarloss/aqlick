import { ReactNode } from 'react'
import { Navigation } from './components/navigation/Navigation'
import { fontPrimary, fontSecondary } from './components/font'
import '../styles/globals.css'

export default function RootLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
    <html>
      <head />
      <body className={`${fontPrimary.variable} ${fontSecondary.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
