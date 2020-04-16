

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import CategoriesList from '../components/categoriesList'
import SEO from '../components/seo'




const CategoryPage = (props) => {




  return (
    <Layout>
      <SEO title="/Category" />
      <header className="projects__bcg">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h2 className="fade-in text-white font-weight-bold mb-5">{props.data.wpgraphql.category.name}</h2>

            </div>

          </div>
        </div>
      </header>
      <section className="page-section">
        <div className="container">
          <div className="d-flex flex-row-reverse mb-4">

            <CategoriesList />
          </div>
          <div className="row flex-row">
            {props.data.wpgraphql.category.projects.edges.map((edge) => {

              const src = edge.node.featuredImage.sourceUrl
              const alt = edge.node.featuredImage.altText



              return (
                < div className="col-xs-12 col-md-6 mb-3" key={edge.node.projectId} >
                  <Link to={edge.node.slug}>
                    <div className="projects__container" >
                      <img className="img-fluid" src={src} alt={alt} />
                      <div className="projects__overlay text-black">
                        <div className="project__heading-wrapp text-left">

                          <h2 className="font-weight-bold">{edge.node.title}</h2>
                          <p className="font-weight-light">{edge.node.ProjectDetails.lokacija}</p>

                          <p className="font-weight-light">{edge.node.ProjectDetails.godina}</p>

                        </div>

                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}



          </div>
        </div>
      </section>
    </Layout >
  )

}
export default CategoryPage


export const categoryPageQuery = graphql`
query GET_CATEGORY($id: ID!) {
  wpgraphql {
    category(id: $id) {
      id
      name
      slug
      projects {
        edges {
          node {
            title
            slug
            projectId
            featuredImage {
              altText
              sourceUrl
            }
            ProjectDetails {
              godina
              lokacija
            }
          }
        }
      }
    }
  }

  }
    `

