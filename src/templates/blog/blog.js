import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// components
import Layout from '../../components/layout/layout'
import Head from '../../components/head/head'

// to use with .md files
// export const query = graphql`
//   query ($slug: String!){
//     markdownRemark (fields: { slug: { eq: $slug } } ) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

// const Blog = (props) => {
//   return (
//     <Layout>
//       <h1>{props.data.markdownRemark.frontmatter.title}</h1>
//       <p>{props.data.markdownRemark.frontmatter.date}</p>
//       <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
//     </Layout>
//   )
// }

// to use with Contentful
export const query = graphql`
  query ($slug: String!){
    contentfulBlogPost (slug: { eq: $slug } ) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
      postImage {
        file {
          url
        }
        title
      }
    }
  }
`

const Blog = (props) => {

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }

  const postImage = props.data.contentfulBlogPost.postImage ?
    <img src={props.data.contentfulBlogPost.postImage.file.url} alt={props.data.contentfulBlogPost.postImage.title} /> : '';

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
      {postImage}
    </Layout>
  )
}

export default Blog

