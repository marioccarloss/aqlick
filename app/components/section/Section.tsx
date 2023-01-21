import Image from 'next/image'
import { Contents } from '../../types/Content'
import Phone from '../icons/phone'
import Video from '../video/Video'
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
          style={{
            order: data.config?.orientation === 'right' ? '1' : '-1',
            color: data.config?.text ? data.config?.text : '#3C3C3B'
          }}
        >
          <h2
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          <p
            className={styles.paragraph}
            dangerouslySetInnerHTML={{ __html: data.paragraph }}
          />
        </article>
        {(data.config?.collection === true)
          ? (data.config?.mobile === true && (
            <div className={styles.collectionImage}>
              {data.video.map((v, i:number) => (
                <div key={data.video[i]} className={styles.wrapImage}>
                  <div className={styles.maskImage}>
                    <Video video={data.video[i]} />
                  </div>
                  <Phone />
                </div>
              ))}
            </div>
            ))
          : (
            <div className={styles.imageWrapper}>
              <Image
                src={data.image.src}
                className={`${styles.image} ${data.config?.outsiteImage === true && 'outsite'}`}
                alt={data.image.src}
                width={272}
                height={550}
              />
            </div>
            )}
      </div>
    </section>
  )
}
