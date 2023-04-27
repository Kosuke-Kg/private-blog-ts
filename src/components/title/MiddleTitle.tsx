import React from 'react'
import styles from './MiddleTitle.module.css'

interface Props {
  title: string
  heads: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  clamp: boolean
}
const MiddleTitle = ({ title, heads, clamp = true }: Props): JSX.Element => {
  const className = `${styles.blogTitle} ${clamp ? styles.clamp : ''}`

  switch (heads) {
    case 'h1':
      return <h1 className={className}>{title}</h1>
    case 'h2':
      return <h2 className={className}>{title}</h2>
    case 'h3':
      return <h3 className={className}>{title}</h3>
    case 'h4':
      return <h4 className={className}>{title}</h4>
    case 'h5':
      return <h5 className={className}>{title}</h5>
    case 'h6':
      return <h6 className={className}>{title}</h6>
    default:
      return <div className={className}>{title}</div>
  }
}

export default MiddleTitle
