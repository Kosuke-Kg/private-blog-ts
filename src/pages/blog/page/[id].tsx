import { type GetStaticProps, type GetStaticPaths, type NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { ENDPOINTS, PER_PAGE } from '@/common/settings'
import Pagination from '@/components/Pagination/Pagination'
import { client } from '@/libs/client'
import { type Blog } from '@/types/blog'

interface Props {
  blog: Blog[]
  totalCount: number
  nowPage: number
}

export const getStaticPaths: GetStaticPaths = async () => {
  const repos = await client.get({ endpoint: ENDPOINTS.blogs })

  const range = (start: number, end: number): number[] =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/blog/page/${repo}`)

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = Number(context.params?.id) ?? 1

  const data = await client.get({
    endpoint: ENDPOINTS.blogs,
    queries: {
      offset: (id - 1) * PER_PAGE,
      limit: PER_PAGE,
    },
  })

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      nowPage: id,
    },
  }
}

const BlogPageId: NextPage<Props> = ({ blog, totalCount, nowPage }: Props) => {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={totalCount} nowPage={nowPage} />
    </div>
  )
}

export default BlogPageId
