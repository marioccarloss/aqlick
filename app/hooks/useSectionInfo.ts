import { Content } from '../types/Content'
import imgCatchment from '../../assets/images/catchment.jpg'

export default function useSectionInfo () {
  const dataCatchment: Content = {
    title: 'Consigue captar<br><span class="text-secondary">más clientes</span>',
    paragraph: 'Diseñamos estrategias y te ayudamos a implantar acciones promocionales ajustadas a tus objetivos de negocio.<br><br>Acciones <b>Customer Centric</b>, encaminadas a atraer a un mayor número de consumidores.',
    image: imgCatchment,
    video: '',
    config: {
      color: '#5BEEAC',
      mobile: true,
      collection: true
    }
  }

  return {
    dataCatchment
  }
}
