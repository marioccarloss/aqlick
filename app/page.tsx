import { Hero } from './components/hero/Hero'
import Marquee from './components/marquee/Marquee'
import useMarquee from './hooks/useMarque'
import Client from './components/client/Client'
import useSectionInfo from './hooks/useSectionInfo'
import Section from './components/section/Section'

export default function Page () {
  const { dataHero } = useMarquee()
  const {
    dataCatchment,
    dataCompetence,
    dataHow,
    dataReward
  } = useSectionInfo()

  return (
    <>
      <Hero />
      <Marquee data={dataHero} />
      <Client />
      <Section data={dataCatchment} />
      <Section data={dataCompetence} />
      <Section data={dataHow} />
      <Section data={dataReward} />
    </>
  )
}
