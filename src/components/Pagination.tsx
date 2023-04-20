import Link from 'next/link'
import React from 'react'
import { PER_PAGE } from '@/common/settings'

interface Props {
  totalCount: number
}

const Pagination = ({ totalCount }: Props): JSX.Element => {
  const range = (start: number, end: number): number[] =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/blog/page/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Pagination
