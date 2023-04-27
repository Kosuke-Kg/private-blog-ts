import Link from 'next/link'
import React from 'react'
import styles from './Footer.module.css'
import { BLOG_TITLE, PATHS } from '@/common/settings'

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <Link className={styles.logo} href={PATHS.root}>
        {BLOG_TITLE}
      </Link>
      <p className={styles.copyright}>©2023 {BLOG_TITLE}</p>
    </footer>
  )
}

export default Footer
