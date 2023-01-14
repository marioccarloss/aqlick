// import Image from 'next/image'
// import banner from '../../../assets/images/hero.svg'
import styles from './Hero.module.css'
import Link from 'next/link'
import { IconArrow } from '../icons/arrow'

export function Hero () {
  return (
    <main className={styles.hero}>
      <div className={styles.container}>
        <article className={styles.heroContent}>
          <h1>¿Quieres que tus ventas crezcan?</h1>
          <p>
            Atrae, aumenta y fideliza a tus clientes a través de los canales conversacionales.
            <br /><br />
            Soluciones fáciles para llegar a tus clientes y aumentar tus ventas.
          </p>
          <Link href='/contacto' className='btn'>
            <span>
              Cuéntanoslo
              <IconArrow />
            </span>
          </Link>
        </article>
        {/* <figure className={styles.imageWrapper}>
          <Image src={banner} className={styles.image} alt='Soluciones en marketing digital' />
        </figure> */}
      </div>
    </main>
  )
}
