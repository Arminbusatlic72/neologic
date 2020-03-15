
const path = require("path")


module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve("./src/templates/projekat.js")
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
}

