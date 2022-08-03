import React from 'react'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='layout--container'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout