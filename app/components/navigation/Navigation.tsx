'use client'

import Link from 'next/link'
import { Logo } from '../Logo'
import styles from './Navigation.module.css'

export function Navigation () {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href='/' className={styles.logo}>
          <Logo />
        </Link>
      </nav>
    </header>
  )
}
