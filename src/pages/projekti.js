import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import CategoriesList from '../components/categoriesList'
import { Link, graphql, useStaticQuery } from 'gatsby'



const Projects = () => {

  const data = useStaticQuery(graphql`
    query {
        wpgraphql {
    projects {
      edges {
        node {
          title(format: RENDERED)
          slug
          ProjectDetails {
            godina
            lokacija
          }
          
          categories {
            edges {
              node {
                name
                slug
              }
            }
          }
          id
          date
          featuredImage {
            node {
              altText
              sourceUrl
            }
            
          }
        }
      }
    }
  }
    }
        `)



  return (
    <Layout>
      <SEO title="/Projekti" />
      <header className="projects__bcg">
        <div className="container h-100">
          <div className="row h-100 align-items-center align-items-md-right justify-content-center justify-content-md-right text-center text-md-right">
            <div className="col-lg-12 align-self-end">
              <h2 className="fade-in text-white font-weight-bold mb-5 mb-md-1">Reference</h2>

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

            {data.wpgraphql.projects.edges.map((edge) => {


              const src = (edge.node.featuredImage) ? edge.node.featuredImage.node.sourceUrl : null
              const alt = (edge.node.featuredImage) ? edge.node.featuredImage.node.altText : null


              return (
                <div className="col-xs-12 col-md-6 mb-5" key={edge.node.id}>
                  <Link to={edge.node.slug} >

                    <div className="projects__container" >
                      {src && alt != null &&
                        <img className="img-fluid" src={src} alt={alt} />
                      }
                      <div className="projects__overlay text-black">
                        <div className="project__heading-wrapp text-left">

                          <h2>{edge.node.title}</h2>
                          <p>{edge.node.ProjectDetails.lokacija}</p>

                          <p>{edge.node.ProjectDetails.godina}</p>

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
    </Layout>

  )
}


export default Projects