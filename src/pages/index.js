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
        <p>contact: <Link to="./contact">contact</Link></p>
      </Layout>
    </div>
  )
}

export default IndexPage