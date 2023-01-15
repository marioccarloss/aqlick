'use client'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import styles from './Video.module.css'

type VideoEmbed = {
  video: string
}

export default function Video (props: VideoEmbed) {
  const { video } = props
  const [hasWindow, setHasWindow] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])

  return (
    <>
      {(hasWindow && video) && (
        <ReactPlayer
          key={video}
          url={video}
          className={styles.videoHero}
          playing
          controls={false}
          loop
          muted
          height={450}
          width={675}
        />
      )}
    </>
  )
}
