import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
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
            altText
            sourceUrl
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
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h2 className="fade-in text-uppercase text-white font-weight-bold">Reference</h2>
              <hr className="divider my-4" />
            </div>

          </div>
        </div>
      </header>
      <section className="page-section">
        <div className="container">
          <ul className="d-flex flex-row mb-3">

            <li className="p-3">Svi Projekti</li>
            <li className="p-3">Rezidencijalni Objekti</li>
            <li className="p-3">Komercijalni Objekti</li>
            <li className="p-3">Javni Objekti</li>



          </ul>
          <ul className="row">

            {data.wpgraphql.projects.edges.map((edge) => {
              let edges = edge.node.categories.edges;

              let categoryName = edges.map(edge => {
                return edge.node.name;

              });

              let src = edge.node.featuredImage.sourceUrl
              let alt = edge.node.featuredImage.altText


              return (
                <Link className="portfolio-box" to={edge.node.slug}>
                  <li className="col-12 col-md-5 text-center" key={edge.node.id}>
                    <img className="img-fluid" src={src} alt={alt} />
                    <div className="portfolio-box-caption">


                      <div className="project-category text-white-50">
                        <p>{categoryName}</p>
                      </div>
                      <div className="project-name">
                        <h2>{edge.node.title}</h2>
                        <p>{edge.node.date}</p>
                      </div>
                    </div>
                  </li>
                </Link>
              )
            })}

          </ul>
        </div>
      </section>
    </Layout>

  )
}
export default Projects