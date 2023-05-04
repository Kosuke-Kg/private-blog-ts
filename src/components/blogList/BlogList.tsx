import React from 'react'
import BlogCard from '../blogCard/BlogCard'
import styles from './BlogList.module.css'
import { type Blog } from '@/types/blog'

interface Props {
  blog: Blog[]
}
const BlogList = ({ blog }: Props): JSX.Element => {
  return (
    <ul className={styles.blogList}>
      {blog?.map((b: Blog) => (
        <BlogCard key={b.id} blog={b} />
      ))}
    </ul>
  )
}

export default BlogList
