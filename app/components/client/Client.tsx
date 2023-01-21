import Image from 'next/image'
import styles from './Client.module.css'
import Suscribe from '../suscribe/Suscribe'
import useClientSection from '../../hooks/useClientSection'

export default function Client () {
  const { data } = useClientSection()

  return (
    <section className='container'>
      <article className={styles.clientSection}>
        <div className={styles.clientContent}>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.paragraph}>{data.paragraph}</p>
          <Suscribe />
        </div>
        <Image
          src={data.image.src}
          className={styles.image} alt={data.title}
          width={340}
          height={509}
        />
      </article>
    </section>
  )
}
