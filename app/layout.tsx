import { ReactNode } from 'react'
import { Navigation } from './components/navigation/Navigation'
import { fontPrimary, fontSecondary } from './components/font'
import '../styles/globals.css'
import Footer from './components/footer/Footer'

export default function RootLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang='es'>
      <head />
      <body className={`${fontPrimary.variable} ${fontSecondary.variable}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
