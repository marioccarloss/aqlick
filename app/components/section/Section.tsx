'use client'

import DOMPurify from 'dompurify'
import Image from 'next/image'
import { Contents } from '../../types/Content'
import Phone from '../icons/phone'
import styles from './Section.module.css'

export default function Section (props: Contents) {
  const { data } = props

  return (
    <section
      className={styles.sectionWrapper}
      style={{ background: data.config?.color }}
    >
      <div className={`${styles.sectionContent} container`}>
        <article
          style={{ order: data.config?.orientation === 'right' ? '-1' : '1' }}
        >
          <h2
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.title) }}
          />
          <p
            className={styles.paragraph}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.paragraph) }}
          />
        </article>
        {(data.config?.mobile === true && data.config?.collection === true) && (
          <div className={styles.collectionImage}>
            <div className={styles.wrapImage}>
              <div className={styles.maskImage}>
                <Image
                  src={data.image.src}
                  className={styles.image} alt={data.image.src}
                  width={272}
                  height={550}
                />
              </div>
              <Phone />
            </div>
            <div className={styles.wrapImage}>
              <div className={styles.maskImage}>
                <Image
                  src={data.image.src}
                  className={styles.image} alt={data.image.src}
                  width={272}
                  height={550}
                />
              </div>
              <Phone />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
