
const path = require("path")


module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve("./src/templates/projekat.js")
  const categoryTemplate = path.resolve("./src/templates/category.js")

  const res = await graphql(`
    query {
        wpgraphql {
            projects {
                edges {
                    node {
                        slug
                    }
                }
            }
            categories {
              edges {
                node {
                  id
                  name
                  slug
                }
              }
            }
        }
    }
    `)

  res.data.wpgraphql.projects.edges.forEach((edge) => {
    createPage({
      component: projectTemplate,
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  res.data.wpgraphql.categories.edges.forEach((edge) => {
    createPage({
      component: categoryTemplate,
      path: `/kategorija/${edge.node.slug}`,
      context: {
        id: edge.node.id,
      },
    })
  })




}

