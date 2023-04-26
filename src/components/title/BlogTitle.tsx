import React from 'react'
import styles from './BlogTitle.module.css'

interface Props {
  title: string
  heads: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const BlogTitle = ({ title, heads }: Props): JSX.Element => {
  switch (heads) {
    case 'h1':
      return <h1 className={styles.blogTitle}>{title}</h1>
    case 'h2':
      return <h2 className={styles.blogTitle}>{title}</h2>
    case 'h3':
      return <h3 className={styles.blogTitle}>{title}</h3>
    case 'h4':
      return <h4 className={styles.blogTitle}>{title}</h4>
    case 'h5':
      return <h5 className={styles.blogTitle}>{title}</h5>
    case 'h6':
      return <h6 className={styles.blogTitle}>{title}</h6>
    default:
      return <div className={styles.blogTitle}>{title}</div>
  }
}

export default BlogTitle
