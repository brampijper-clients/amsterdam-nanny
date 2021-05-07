// syntax for importing a module in node
const path = require('path')

// create pages dynamically and returns a function with a named template
exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const result = await graphql(`
    query GetProducts {
        products: allContentfulService {
          nodes {
            slug
          }
        }
      }
    `)
    result.data.products.nodes.forEach((product) => {
        createPage({
            path: `/products/${product.slug}`,
            component:path.resolve(`src/templates/product-template.js`),
            context: {
                slug:product.slug
            }
        })
    })
}