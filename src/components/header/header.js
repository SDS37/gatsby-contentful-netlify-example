import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

// styles
import headerStyles from './header.module.scss';

const Header = () => {

  // fetching siteMetadata data from gatsby-config.js file
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <header className={ headerStyles.header }>
      <div>
        <h1><Link to="/" className={ headerStyles.title }>{data.site.siteMetadata.title}</Link></h1>
        <p> - {data.site.siteMetadata.author}</p>
      </div>
      <nav>
        <ul className={ headerStyles.navList }>
          <li><Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/">Home</Link></li>
          <li><Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/about">About</Link></li>
          <li><Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/blog">blog</Link></li>
          <li><Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/contact">contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header