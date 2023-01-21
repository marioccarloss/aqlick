import image from '../../assets/images/fideliza.jpg'
import { Content } from '../types/Content'

export default function useClientSection () {
  const data: Content = {
    title: 'Atrae, aumenta y fideliza a tus clientes a través de los canales conversacionales.',
    paragraph: 'Soluciones fáciles para llegar a tus clientes y aumentar tus ventas.',
    image,
    video: []
  }

  return { data }
}
