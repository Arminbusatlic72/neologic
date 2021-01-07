import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import CategoriesList from '../components/categoriesList'
import SEO from '../components/seo'
import Img from 'gatsby-image'




function CategoryPage(props) {


  return (

    <Layout>
      <SEO title="Kategorije" />
      <header className="projects__bcg">
        <div className="container h-100">
          <div className="row h-100 align-items-center align-items-md-right justify-content-center justify-content-md-right text-center text-md-right">
            <div className="col-lg-12 align-self-end">
              <h2 className="fade-in text-white font-weight-bold mb-5 mb-md-1">{props.data.wpCategory.name}</h2>

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
            {props.data.wpCategory.projects.nodes.map((node) => {

              const src = node.featuredImage.node.localFile.childImageSharp.fluid
              const alt = node.featuredImage.node.altText

              return (
                <div className="col-xs-12 col-md-6 mb-3" key={node.id}>
                  <Link to={`/projekat/${node.slug}`}>
                    <div className="projects__container">
                      <Img className="img-fluid" fluid={src} alt={alt} />
                      <div className="projects__overlay text-black">
                        <div className="project__heading-wrapp text-left">

                          <h2 className="font-weight-bold">{node.title}</h2>
                          <p className="font-weight-light">{node.ProjectDetails.lokacija}</p>

                          <p className="font-weight-light">{node.ProjectDetails.godina}</p>

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
export default CategoryPage


export const categoryPageQuery = graphql`
query ($slug: String!) {
  wpCategory(slug: { eq: $slug }){
      id
      name
      slug
      projects {
        nodes {
          title
          slug
          id
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          ProjectDetails {
            godina
            lokacija
          }
        }
      }
    }
    }
  


  
    `

