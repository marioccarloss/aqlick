'use client'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import styles from './Video.module.css'

export default function VideoFull () {
  const [hasWindow, setHasWindow] = useState<boolean>(false)
  const videoFull = 'https://vimeo.com/804868974'

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])

  return (
    <div className={styles.ContainerVideo}>
      {(hasWindow && videoFull) && (
        <ReactPlayer
          key={videoFull}
          url={videoFull}
          className={`${styles.videoFull} video`}
          playing
          controls={false}
          loop
          muted
          height={450}
          width={675}
        />
      )}
    </div>
  )
}
