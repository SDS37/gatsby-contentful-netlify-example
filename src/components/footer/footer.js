import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

// styles
import footerStyles from './footer.module.scss';

const Footer = () => {

  // fetching siteMetadata data from gatsby-config.js file
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`)

  return (
    <footer className={footerStyles.footer}>
      <p>created by {data.site.siteMetadata.author} @2019</p>
    </footer>
  )
}

export default Footer