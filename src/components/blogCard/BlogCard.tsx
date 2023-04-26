import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BlogTitle from '../title/BlogTitle'
import styles from './BlogCard.module.css'
import { PATHS } from '@/common/settings'
import { type Blog } from '@/types/blog'

interface Props {
  blog: Blog
}

const BlogCard = ({ blog }: Props): JSX.Element => {
  return (
    <li className={styles.blogCard}>
      <Link href={`${PATHS.post}/${blog.id}`}>
        {blog.eyecatch !== undefined && (
          <div className={styles.imgBox}>
            <Image
              className={styles.img}
              src={blog.eyecatch.url}
              fill
              alt={`${blog.title}のアイキャッチ`}
            />
          </div>
        )}
        <div className={styles.dataWrapper}>
          <BlogTitle heads='h3' title={blog.title} />
          <span className={styles.date}>{format(new Date(blog.createdAt), 'yyyy年MM月dd日')}</span>
        </div>
      </Link>
    </li>
  )
}

export default BlogCard
