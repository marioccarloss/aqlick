import Image from 'next/image'
import styles from './Hero.module.css'
import Link from 'next/link'
import hero from '../../../assets/images/hero.png'
import useHero from '../../hooks/useHero'

export function Hero () {
  const { data } = useHero()

  return (
    <main className={styles.hero}>
      <article className={styles.heroContent}>
        <div>
          <h1 className={styles.title}>
            {data.hero.title}
          </h1>
          <Image
            src={hero}
            className={styles.image} alt={data.hero.tagline}
            width={826}
            height={825}
          />
          <span className={styles.title}>
            {data.hero.title}
          </span>
        </div>
        <Link
          href={data.cta.link}
          target='_blank'
          className={`btn ${styles.btnHero}`}
          rel='noreferrer'
        >
          <span>{data.cta.button}</span>
        </Link>
      </article>
    </main>
  )
}
