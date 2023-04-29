import Link from 'next/link'
import React from 'react'
import styles from './Pagination.module.css'
import { PATHS, PER_PAGE } from '@/common/settings'

interface Props {
  totalCount: number
  nowPage?: number
}

const Pagination = ({ totalCount, nowPage = 1 }: Props): JSX.Element => {
  const range = (start: number, end: number): number[] =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul className={styles.pagination}>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => {
        const pageStyle = `${styles.page} ${nowPage - 1 === index ? styles.active : ''}`
        return (
          <li className={pageStyle} key={index}>
            <Link href={`${PATHS.page}/${number}`}>{number}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Pagination
