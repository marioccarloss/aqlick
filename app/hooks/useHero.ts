import { Hero } from '../types/Hero.d'

export default function useHero () {
  const data: Hero = {
    hero: {
      title: '¿Quieres que tus ventas crezcan?',
      tagline: 'Soluciones en marketing digital'
    },
    cta: {
      button: 'Cuéntanoslo',
      link: 'https://calendly.com/d/g47-6rr-nz7/promociones-y-servicios?month=2023-01'
    }
  }
  return { data }
}
