import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {

  // template literal
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)

  return (
    <header className={ headerStyles.header }>
      <div>
        <h1><Link  className={ headerStyles.title } to="./">{data.site.siteMetadata.title}</Link></h1>
        <p> - {data.site.siteMetadata.subtitle}</p>
      </div>
      <nav>
        <ul className={ headerStyles.navList }>
          <li><Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/">Home</Link></li>
          <li><Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/about">About</Link></li>
          <li><Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/apply">apply</Link></li>
          <li><Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/calendar">Calendar</Link></li>
          <li><Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/contact">contact</Link></li>
          <li><Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/gdpr">GDPR</Link></li>
          <li><Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/news">news</Link></li>
          <li><Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/blog">blog</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header