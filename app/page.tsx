import { Hero } from './components/hero/Hero'
import Marquee from './components/marquee/Marquee'
import useMarquee from './hooks/useMarque'
import Client from './components/client/Client'
import useSectionInfo from './hooks/useSectionInfo'
import Section from './components/section/Section'
import Service from './components/service/Service'
import useFunded from './hooks/useFunded'
import Funded from './components/funded/Funded'
import VideoFull from './components/video/VideoFull'

export default function Page () {
  const { dataHero, dataFooter } = useMarquee()
  const {
    dataCatchment,
    dataCompetence,
    dataHow,
    dataReward
  } = useSectionInfo()
  const { data: dataFunded } = useFunded()

  return (
    <>
      <Hero />
      <Marquee data={dataHero} />
      <Client />
      <Section data={dataCatchment} />
      <Section data={dataCompetence} />
      <Section data={dataHow} />
      <Section data={dataReward} />
      <Service />
      <Marquee data={dataFooter} />
      <Funded data={dataFunded} />
      <VideoFull />
      <Marquee data={dataFooter} />
    </>
  )
}
