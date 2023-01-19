// eslint-disable-next-line camelcase
import { Montserrat, Bebas_Neue } from '@next/font/google'
export const fontPrimary = Montserrat({
  weight: ['300', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-primary'
})

export const fontSecondary = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-secondary'
})
