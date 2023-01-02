import { ReactNode } from 'react'
import { Navigation } from './components/navigation/Navigation'
import { font } from './components/font'
import '../styles/globals.css'
export default function RootLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
    <html>
      <head />
      <body className={font.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
