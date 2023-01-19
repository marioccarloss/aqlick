import { Hero } from './components/hero/Hero'
import Marquee from './components/marquee/Marquee'
import useMarquee from './hooks/useMarque'
import Client from './components/client/Client'

export default function Page () {
  const { dataHero } = useMarquee()

  return (
    <>
      <Hero />
      <Marquee data={dataHero} />
      <Client />
    </>
  )
}
