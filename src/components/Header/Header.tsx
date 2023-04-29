import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'
import { BLOG_TITLE, PATHS } from '@/common/settings'

const Header = (): JSX.Element => {
  return (
    <header>
      <div className={styles.header}>
        <Link className={styles.logo} href={PATHS.root}>
          {BLOG_TITLE}
        </Link>
      </div>
    </header>
  )
}

export default Header
