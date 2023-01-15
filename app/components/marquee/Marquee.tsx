'use client'

import { Marquee as Marque, Marquees } from '../../types/Marquee.d'
import MarqueeReact from 'react-fast-marquee'
import styles from './Marquee.module.css'

export default function Marquee (props: Marquees) {
  const { data } = props
  const filtered = data.map((marquee: Marque) => marquee.content)
  const filteredWithDots = filtered.join(' . ')

  return (
    <MarqueeReact className={styles.marquee} gradient={false} speed={50}>
      {filteredWithDots}
    </MarqueeReact>
  )
}
