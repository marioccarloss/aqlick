import useService from '../../hooks/useService'
import { Service as Type } from '../../types/Service.d'
import styles from './Service.module.css'

export default function Service () {
  const { data } = useService()

  return (
    <>
      <h2 className={styles.titlePrincipal} dangerouslySetInnerHTML={{ __html: data.title }} />
      <div className={styles.services}>
        {data.info.map((item: Type) => (
          <div key={item.id} className={styles.service}>
            <div>
              <h3 className={styles.subtitle}>{item.title}</h3>
              <p
                className={styles.paragraph}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
