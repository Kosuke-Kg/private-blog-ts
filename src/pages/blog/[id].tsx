import { type GetStaticPaths, type GetStaticProps, type NextPage } from 'next'
import { type Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'
import { client } from '@/libs/client'
import { type Blog } from '@/types/blog'

interface Props {
  blog: Blog
}

// 静的生成のためのパスを生成
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await client.get({
    endpoint: 'blogs',
    queries: {
      limit: 1000,
    },
  })
  const paths = data.contents.map((c: Blog) => `/blog/${c.id}`)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const id = context.params?.id
  const data = await client.get({
    endpoint: 'blogs',
    contentId: id,
  })

  return {
    props: {
      blog: data,
    },
  }
}

const BlogId: NextPage<Props> = ({ blog }: Props) => {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <p>{blog?.category != null && blog.category.name}</p>
      {blog?.content != null && (
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
        />
      )}
    </main>
  )
}

export default BlogId
