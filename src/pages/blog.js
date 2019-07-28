import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

// styles
import blogStyles from './blog.module.scss'

// components
import Layout from '../components/layout/layout'
import Head from '../components/head/head'

// const BlogPage = () => {

//   // fetching markdown (.md) data from posts folder
//   const data = useStaticQuery(graphql`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               title
//               date
//             }
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <div>
//       <Layout>
//         <h1>Blog</h1>
//         <ol className={blogStyles.posts}>
//           {data.allMarkdownRemark.edges.map( (edge) => {
//             return (
//               <li key={edge.node.fields.slug} className={blogStyles.post}>
//                 <Link to={`/blog/${edge.node.fields.slug}`}>
//                   <h2>{edge.node.frontmatter.title}</h2>
//                   <p>{edge.node.frontmatter.date}</p>
//                 </Link>
//               </li>
//             )
//           })}
//         </ol>
//       </Layout>
//     </div>
//   )
// }

const BlogPage = () => {

  // fetching data from Contentful
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (sort: { fields: publishedDate, order:DESC }){
        edges {
          node {
            title
            slug
            publishedDate (formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Head title="blog"/>
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map( (edge) => {
            return (
              <li key={edge.node.slug} className={blogStyles.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage