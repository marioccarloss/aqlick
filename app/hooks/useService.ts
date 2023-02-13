import { Services } from '../types/Service.d'

export default function useService () {
  const data: Services = {
    title: 'Nuestros <span class="text-secondary">servicios</span>',
    info: [
      {
        id: 1,
        title: 'Promociones y regalos',
        description: '¡Comprometidos en aumentar las ventas de tu negocio! Conseguimos que tus clientes sean fans de tu producto.'
      },
      {
        id: 2,
        title: 'Global contact center',
        description: 'Garantizamos los mejores estándares de calidad dando soporte, captación, fidelización y retención de clientes a través de todos los canales de comunicación.'
      },
      {
        id: 3,
        title: 'Almacenaje y Logística',
        description: 'Garantizamos los mejores estándares de calidad dando soporte, captación, fidelización y retención de clientes a través de todos los canales de comunicación.'
      }
    ]
  }
  return { data }
}
