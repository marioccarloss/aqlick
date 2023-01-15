import { Marquee } from '../types/Marquee.d'

export default function useMarquee () {
  const dataHero: Marquee[] = [
    {
      id: 0,
      content: 'Expertos en marketing digital y promocional'
    }
  ]

  const dataFooter: Marquee[] = [
    {
      id: 1,
      content: '¡No esperes más, haz que tu empresa crezca!'
    },
    {
      id: 2,
      content: 'Arrasa con las promociones de bolsillo'
    },
    {
      id: 3,
      content: 'Conversaciones de impacto'
    },
    {
      id: 4,
      content: 'Respuestas inmediatas del usuario.'
    },
    {
      id: 5,
      content: 'Campañas de escándalo que repetirás por su sencillez y resultados.'
    }
  ]
  return { dataHero, dataFooter }
}
