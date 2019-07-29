import React from "react"
import { Link } from 'gatsby'

// components
import Layout from '../components/layout/layout'
import Head from '../components/head/head'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="home"/>
        <h1>HOME</h1>
        <h2>This web app shows how to use the Gatsby framework to fetch data from siteMetadata, .md files, and a CMS (Contentful).</h2>
        <p>Link to contact page: <Link to="/contact">contact</Link></p>
      </Layout>
    </div>
  )
}

export default IndexPage