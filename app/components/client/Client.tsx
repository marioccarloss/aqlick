import Image from 'next/image'
import styles from './Client.module.css'

export default function Client () {
  return (
    <article>
      <div>
        <h2>Atrae, aumenta y fideliza a tus clientes a través de los canales conversacionales.</h2>
        <p>Soluciones fáciles para llegar a tus clientes y aumentar tus ventas.</p>
      </div>
      <Image
        src=''
        className={styles.image} alt=''
        width={826}
        height={825}
      />
    </article>
  )
}
