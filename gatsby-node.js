const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve("./src/templates/projekat.js")
  const categoryTemplate = path.resolve("./src/templates/category.js")
  const partnerTemplate = path.resolve("./src/templates/partner.js")

  const res = await graphql(`
    query {
      allWpProject(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            slug
          }
          previous {
            id
            slug
            title
          }
          next {
            id
            slug
            title
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
      allWpPartner(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            slug
            title
          }
          previous {
            id
            slug
            title
          }
          next {
            id
            slug
            title
          }
        }
      }
    }
  `)

  // Create pages for Projects
  res.data.allWpProject.edges.forEach(({ node: project, previous, next }) => {
    createPage({
      component: projectTemplate,
      path: `/projekat/${project.slug}`,
      context: {
        slug: project.slug,
        id: project.id,
        previousProjectTitle: previous ? previous.title : null,
        nextProjectTitle: next ? next.title : null,
        previousProject: previous ? previous.slug : null,
        nextProject: next ? next.slug : null,
      },
    })
  })

  // Create pages for Partners
  res.data.allWpPartner.edges.forEach(({ node: partner, previous, next }) => {
    createPage({
      component: partnerTemplate,
      path: `/partneri/${partner.slug}`,
      context: {
        slug: partner.slug,
        id: partner.id,
        previousPartner: previous ? previous.slug : null,
        nextPartner: next ? next.slug : null,
      },
    })
  })

  // Create pages for Categories
  res.data.allWpCategory.edges.forEach(edge => {
    createPage({
      component: categoryTemplate,
      path: `/kategorija/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
