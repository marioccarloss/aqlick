import { Hero } from './components/hero/Hero'
import Marquee from './components/marquee/Marquee'
import useMarquee from './hooks/useMarque'

export default function Page () {
  const { dataFooter } = useMarquee()

  return (
    <>
      <Hero />
      <Marquee data={dataFooter} />
    </>
  )
}
