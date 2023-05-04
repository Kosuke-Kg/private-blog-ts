import { type GetStaticProps, type GetStaticPaths, type NextPage } from 'next'
import React from 'react'
import { ENDPOINTS, PER_PAGE } from '@/common/settings'
import Layouts from '@/components/Layouts/Layouts'
import Pagination from '@/components/Pagination/Pagination'
import BlogList from '@/components/blogList/BlogList'
import SmallTitle from '@/components/title/SmallTitle'
import { client } from '@/libs/client'
import styles from '@/styles/page.module.css'
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
    <Layouts>
      <>
        <section className={styles.listSec}>
          <SmallTitle heads='h2' title='New' />
          <div>{totalCount > 0 ? <BlogList blog={blog} /> : <h3>記事がありません</h3>}</div>
          <div className={styles.pagination}>
            <Pagination totalCount={totalCount} nowPage={nowPage} />
          </div>
        </section>
      </>
    </Layouts>
  )
}

export default BlogPageId
