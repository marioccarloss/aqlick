import { Content } from '../types/Content'
import imgCatchment from '../../assets/images/catchment.jpg'
import imgCompetence from '../../assets/images/competence.png'
import imgReward from '../../assets/images/reward.png'

export default function useSectionInfo () {
  const dataCatchment: Content = {
    title: 'Consigue captar<br><span class="text-secondary">más clientes</span>',
    paragraph: 'Diseñamos estrategias y te ayudamos a implantar acciones promocionales ajustadas a tus objetivos de negocio.<br><br>Acciones <b>Customer Centric</b>, encaminadas a atraer a un mayor número de consumidores.',
    image: imgCatchment,
    video: [
      'https://vimeo.com/791421205',
      'https://vimeo.com/791473285'
    ],
    config: {
      orientation: 'right',
      color: '#00f2a6',
      mobile: true,
      collection: true
    }
  }

  const dataCompetence: Content = {
    title: 'Diferénciate<br><span class="text-secondary">de la competencia</span>',
    paragraph: 'Innovamos continuamente para que las acciones realizadas logren un alto impacto y aporten un valor añadido a tu target que ningún competidor pueda igualar.',
    image: imgCompetence,
    video: [],
    config: {
      color: '#D9D9D9',
      outsiteImage: true
    }
  }

  const dataHow: Content = {
    title: '<b style="color: #3C3C3B">¿Cómo</b><br><span class="text-secondary-white">lo hacemos?</span>',
    paragraph: 'Las mejores campañas promocionales a través de WhatsApp. Novedad <b>CRM WSP</b>.<br/><br/>El 91% de los españoles usan WhatsApp como canal conversacional.',
    image: { src: '' },
    video: [
      'https://vimeo.com/791489930'
    ],
    config: {
      color: '#ff5159',
      orientation: 'right',
      text: '#ffffff'
    }
  }

  const dataReward: Content = {
    title: 'Recompensa<br><span class="text-secondary">a tus clientes</span>',
    paragraph: 'Nuestro <b>catálogo de regalos</b> con más de 6 categorías harán despegar tus ventas.<br/><br/>Los regalos aspiracionales son un gran incentivo para tus clientes.',
    image: imgReward,
    video: [],
    config: {
      color: '#fff80d',
      outsiteImage: true
    }
  }

  return {
    dataCatchment,
    dataCompetence,
    dataHow,
    dataReward
  }
}
