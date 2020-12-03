const path = require("path")


module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve("./src/templates/projekat.js")
  const categoryTemplate = path.resolve("./src/templates/category.js")

  const res = await graphql(`
    query {
        
      allWpProject {
                edges {
                    node {
                        slug
                       
                    }
                }
            }
            allWpCategory {
              edges {
                node {
                  slug
                }
              }
            }
        
    }
    `)

  res.data.allWpProject.edges.forEach((edge) => {
    createPage({
      component: projectTemplate,
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  res.data.allWpCategory.edges.forEach((edge) => {
    createPage({
      component: categoryTemplate,
      path: `/kategorija/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })




}

