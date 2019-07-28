import React from 'react'

// components
import Layout from '../components/layout/layout'
import Head from '../components/head/head'

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="about"/>
        <h1>About page</h1>
        <span>description</span>
      </Layout>
    </div>
  )
}

export default AboutPage