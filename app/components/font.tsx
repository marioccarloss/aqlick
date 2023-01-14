// eslint-disable-next-line camelcase
import { Montserrat, Bebas_Neue } from '@next/font/google'
export const fontPrimary = Montserrat({
  weight: ['100', '300', '600', '800'],
  subsets: ['latin'],
  variable: '--font-primary'
})

export const fontSecondary = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-secondary'
})
