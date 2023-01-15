import Image from 'next/image'
import styles from './Hero.module.css'
import Link from 'next/link'
import hero from '../../../assets/images/hero.png'

export function Hero () {
  return (
    <main className={styles.hero}>
      <article className={styles.heroContent}>
        <div>
          <h1 className={styles.title}>
            ¿Quieres que tus ventas crezcan?
          </h1>
          <Image src={hero} className={styles.image} alt='Soluciones en marketing digital' />
          <span className={styles.title}>
            ¿Quieres que tus ventas crezcan?
          </span>
        </div>
        <Link
          href='https://calendly.com/d/g47-6rr-nz7/promociones-y-servicios?month=2023-01'
          target='_blank'
          className={`btn ${styles.btnHero}`} rel='noreferrer'
        >
          <span>
            Cuéntanoslo
          </span>
        </Link>
      </article>
    </main>
  )
}
