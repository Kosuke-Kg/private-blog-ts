import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

interface Props {
  children: JSX.Element
}

const Layouts = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layouts
