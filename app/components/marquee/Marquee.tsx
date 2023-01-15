import { Marquee as Marque, Marquees } from '../../types/Marquee.d'

// import MarqueeReact from 'react-fast-marquee'

export default function Marquee (props: Marquees) {
  const { data } = props
  const filtered = data.map((marquee: Marque) => marquee.content)
  const filteredWithDots = filtered.join(' . ')

  return (
    <div>
      {filteredWithDots}
    </div>
  )
}
