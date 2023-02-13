export type Home = {
  title: string,
  tagline: string,
  description: string,
  image: {
    src: string
  },
  bg: {
    src: string
  },
  ctas: {
    name: string,
    url: string,
    btn_outlined?: boolean
  }
}
