import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({title}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`} htmlAttributes={{ lang : 'en' }}>
      <meta name="Description" content="Gatsby framework fetching data from siteMetadata, .md files, and CMS"></meta>
    </Helmet>
  )
}

export default Head