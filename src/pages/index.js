import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h1>HOME</h1>
        <p>contact: <Link to="./contact">contact</Link></p>
      </Layout>
    </div>
  )
}

export default IndexPage