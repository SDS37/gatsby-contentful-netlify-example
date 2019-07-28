const path = require('path')

// to use with .md files
// https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
module.exports.onCreateNode = ({node, actions}) => {
  const { createNodeField} = actions
  if (node.internal.type === 'MarkdownRemark') {
    // https://nodejs.org/dist/latest-v10.x/docs/api/path.html#path_path_basename_path_ext
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

// https://www.gatsbyjs.org/docs/node-apis/#createPages
module.exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')

  // to use with .md files
  // const response = await graphql(`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // to use with Contentful
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulBlogPost.edges.forEach( (edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  });

}