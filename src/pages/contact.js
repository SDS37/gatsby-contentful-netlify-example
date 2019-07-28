import React from 'react'

// components
import Layout from '../components/layout/layout'
import Head from '../components/head/head'

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="contact"/>
        <h1>contact page</h1>
        <p>twitter <a href="https://twitter.com" target="_blank">twitter</a></p>
      </Layout>
    </div>
  )
}

export default ContactPage