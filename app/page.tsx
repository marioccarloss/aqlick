import { Hero } from './components/hero/Hero'
import Marquee from './components/marquee/Marquee'
import useMarquee from './hooks/useMarque'

export default function Page () {
  const { dataHero } = useMarquee()

  return (
    <>
      <Hero />
      <Marquee data={dataHero} />
    </>
  )
}
