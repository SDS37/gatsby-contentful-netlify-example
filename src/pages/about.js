import React from 'react'

// components
import Layout from '../components/layout/layout'
import Head from '../components/head/head'

// styles
import aboutStyles from './styles/about.module.scss'

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="about"/>
        <h1>About</h1>
        <ol className={aboutStyles.itemsList}>
          <li className={aboutStyles.item}><a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">https://www.gatsbyjs.org</a></li>
          <li className={aboutStyles.item}><a href="https://www.contentful.com/" target="_blank" rel="noopener noreferrer">https://www.contentful.com</a></li>
          <li className={aboutStyles.item}><a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">https://www.netlify.com</a></li>
        </ol>
      </Layout>
    </div>
  )
}

export default AboutPage