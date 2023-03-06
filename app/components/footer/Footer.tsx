import { Logo } from '../Logo'
import Suscribe from '../suscribe/Suscribe'
import styles from './Footer.module.css'

export default function Footer () {
  return (
    <footer className={styles.footer}>

      <div className={`${styles.containerFooter} ${styles.footerTop}`}>
        <div>
          <Logo />
          <Suscribe />
        </div>
        <div>
          <span>
            Avda. de la Estación 72, Algorfa. Alicante
          </span>
          <a href='tel:+34 681 92 51 04'>(+34) 681 92 51 04</a>
          <a href='mailto:info@aqlick.es'>info@aqlick.es</a>
        </div>
      </div>

      <div className={`${styles.containerFooter} ${styles.footerBottom}`}>
        <span>
          {`© AQlick Digital Marketing Solutions ${new Date().getFullYear()}`}
        </span>
        <div>
          <a href='https://www.instagram.com/aqlick_dms/' target='_blank' rel='noreferrer'>Instagram</a>
          <a href='https://www.facebook.com/AqlickDigitalMarketing/' target='_blank' rel='noreferrer'>Facebook</a>
          <a href='https://www.linkedin.com/company/aqlick-digital-marketing-solutions/' target='_blank' rel='noreferrer'>Linkedin</a>
        </div>
      </div>
    </footer>
  )
}
