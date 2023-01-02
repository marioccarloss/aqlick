'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '../Logo'
import styles from './Navigation.module.css'

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'Nosotros',
  route: '/nosotros'
}, {
  label: 'Servicios',
  route: '/servicios'
}, {
  label: 'Contacto',
  route: '/contacto'
}]

export function Navigation () {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href='/' className={styles.logo}>
          <Logo />
        </Link>
        <ul className={styles.menu}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link
                href={route}
                className={pathname === route ? styles.active : styles.nonActive}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
