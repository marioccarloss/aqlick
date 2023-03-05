import Image from 'next/image'
import { Fundeds } from '../../types/Funded.d'
import styles from './Funded.module.css'

export default function Funded (props: Fundeds) {
  const { data } = props

  return (
    <section className={styles.fundedWrapper}>
      <article className={styles.fundedContent}>
        <h2
          className={styles.fundedTitle}
          dangerouslySetInnerHTML={{ __html: data.title }}
        />
        <p
          className={styles.fundedParagraph}
          dangerouslySetInnerHTML={{ __html: data.paragraph }}
        />
        <Image
          src={data.image.src}
          alt={data.title}
          width={1143}
          height={215}
          className={styles.fundedImage}
        />
      </article>
    </section>
  )
}
