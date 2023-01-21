export type Content = {
  title: string,
  paragraph: string,
  image: {
    src: string
  },
  video: string
  config?: {
    align?: string,
    color?: string,
    orientation?: string,
    mobile?: boolean,
    collection?: boolean,
  }
}

export type Contents = {
  data: Content,
}
