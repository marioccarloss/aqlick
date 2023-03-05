import imgFunded from '../../assets/images/funded.png'
import { Funded } from '../types/Funded.d'

export default function useFunded () {
  const data: Funded = {
    title: 'Proyecto <span class="text-secondary">financiado</span> por',
    paragraph: 'Nuevos proyectos territoriales para el reequilibrio y la equidad, emprendimiento y empresas a través de Labora. Servicio Valenciano de Empleo y Formación financiados, íntegramente por la Union Europea Next Generation EU.',
    image: imgFunded
  }

  return { data }
}
