import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
// import Img from 'gatsby-image'
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export const query = graphql`
query($slug: String!) {

    wpgraphql {
  projectBy(slug: $slug) {
    id
    ProjectDetails {
        brendovi
        enterijer
        foto
        godina
        lokacija
        projectDescription
        image {
          altText
          sourceUrl
        }
        image1 {
          altText
          sourceUrl
        }
        image2 {
          altText
          sourceUrl
        }
      }
    categories {
      edges {
        node {
          name
        }
      }
    }
    title
    featuredImage {
      sizes(size: POST_THUMBNAIL)
      altText
      sourceUrl
    }
    
  }
    }

}

`

const Project = (props) => {




  let src = props.data.wpgraphql.projectBy.featuredImage.sourceUrl;
  let alt = props.data.wpgraphql.projectBy.featuredImage.altText;
  let src1 = props.data.wpgraphql.projectBy.ProjectDetails.image.sourceUrl;
  let alt1 = props.data.wpgraphql.projectBy.ProjectDetails.image.altText;
  let src2 = props.data.wpgraphql.projectBy.ProjectDetails.image1.sourceUrl;
  let alt2 = props.data.wpgraphql.projectBy.ProjectDetails.image1.altText;
  let src3 = props.data.wpgraphql.projectBy.ProjectDetails.image2.sourceUrl;
  let alt3 = props.data.wpgraphql.projectBy.ProjectDetails.image2.altText;

  return (

    <Layout>
      < SEO title="/project" />
      <header className="project__bcg">
        <img className="header__bcg" src={src} alt={alt} />


        <div className="container h-100">

          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h2 className="fade-in text-uppercase text-white font-weight-bold">{props.data.wpgraphql.projectBy.title}</h2>
              <hr className="divider my-4" />
            </div>

          </div>
        </div>
      </header>
      <section className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <ul className="d-flex flex-column">
                <li><p>Lokacija: {props.data.wpgraphql.projectBy.ProjectDetails.lokacija}</p></li>
                <li><p>Godina: {props.data.wpgraphql.projectBy.ProjectDetails.godina}</p></li>
                <li><p>Enterijer: {props.data.wpgraphql.projectBy.ProjectDetails.enterijer}</p></li>
                <li><p>Foto: {props.data.wpgraphql.projectBy.ProjectDetails.foto}</p></li>
                <li><p>Brendovi: {props.data.wpgraphql.projectBy.ProjectDetails.brendovi}</p></li>
                <li><p>{props.data.wpgraphql.projectBy.ProjectDetails.projectDescription}</p></li>
              </ul>
            </div>
            <div className="col-12 col-md-6 mb-5">
              <img className="img-fluid" src={src1} alt={alt1} />
            </div>
            <div className="col-12 col-md-6 mb-5">
              <img className="img-fluid" src={src2} alt={alt2} />
            </div>
            <div className="col-12 col-md-6 mb-5">
              <img className="img-fluid" src={src3} alt={alt3} />
            </div>

          </div>


        </div>
      </section>
    </Layout>
  )
}

export default Project