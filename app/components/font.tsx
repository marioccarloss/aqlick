// eslint-disable-next-line camelcase
import { Montserrat, Bebas_Neue } from '@next/font/google'

export const fontSecondary = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-secondary'
})

export const fontPrimary = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-primary'
})
