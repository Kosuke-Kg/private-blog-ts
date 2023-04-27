import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import styles from './Layouts.module.css'

interface Props {
  children: JSX.Element
}

const Layouts = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <main className={styles.wrapperMain}>
        <article className={styles.leftArticle}></article>
        <article className={styles.mainArticle}>{children}</article>
        <article className={styles.rightArticle}></article>
      </main>
      <Footer />
    </>
  )
}

export default Layouts
