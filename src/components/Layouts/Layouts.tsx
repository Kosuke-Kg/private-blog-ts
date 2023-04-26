import React from 'react'
import Header from '../Header/Header'

interface Props {
  children: JSX.Element
}

const Layouts = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default Layouts
