import React from 'react'

// components
import Footer from '../footer/footer'
import Header from '../header/header'

// styles
import '../../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = ( props ) => {
  return (
    <div className={ layoutStyles.container }>
      <div className={ layoutStyles.content }>
        <Header></Header>
        { props.children }
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Layout