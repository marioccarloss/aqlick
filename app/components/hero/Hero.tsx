import Image from 'next/image'
import banner from '../../../assets/images/hero.svg'
import styles from './Hero.module.css'
import Link from 'next/link'
import { IconArrow } from '../icons/arrow'

export function Hero () {
  return (
    <main className={styles.hero}>
      <div className={styles.container}>
        <article className={styles.heroContent}>
          <h1>Expertos en marketing digital.</h1>
          <p>Fidelizamos a tus clientes y aumentamos tus ventas.</p>
          <Link href='/contacto' className='btn'>
            <span>
              Contáctanos
              <IconArrow />
            </span>
          </Link>
        </article>
        <figure className={styles.imageWrapper}>
          <Image src={banner} className={styles.image} alt='Soluciones en marketing digital' />
        </figure>
      </div>
    </main>
  )
}
