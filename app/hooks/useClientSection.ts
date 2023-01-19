import image from '../../assets/images/fideliza.jpg'

type Client = {
  title: string,
  paragraph: string,
  image: {
    src: string
  }
}

export default function useClientSection () {
  const data: Client = {
    title: 'Atrae, aumenta y fideliza a tus clientes a través de los canales conversacionales.',
    paragraph: 'Soluciones fáciles para llegar a tus clientes y aumentar tus ventas.',
    image
  }

  return { data }
}
