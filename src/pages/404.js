import React from 'react'
import { Link } from 'gatsby'

// components
import Layout from '../components/layout/layout'
import Head from '../components/head/head'

const notFound = () => {
  return (
    <Layout>
      <Head title="404"/>
      <h1>Page not found</h1>
      <p><Link to="/">Home</Link></p>
    </Layout>
  )
}

export default notFound