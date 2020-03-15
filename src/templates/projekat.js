import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
// import Img from 'gatsby-image'

import PortfolioModal from "../components/portfolio/modal"
import ProjectCarousel from '../components/portfolio/ProjectCarousel'

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

class Project extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);

    this.src = this.props.data.wpgraphql.projectBy.featuredImage.sourceUrl;
    this.alt = this.props.data.wpgraphql.projectBy.featuredImage.altText;
    this.src1 = this.props.data.wpgraphql.projectBy.ProjectDetails.image.sourceUrl;
    this.alt1 = this.props.data.wpgraphql.projectBy.ProjectDetails.image.altText;
    this.src2 = this.props.data.wpgraphql.projectBy.ProjectDetails.image1.sourceUrl;
    this.alt2 = this.props.data.wpgraphql.projectBy.ProjectDetails.image1.altText;
    this.src3 = this.props.data.wpgraphql.projectBy.ProjectDetails.image2.sourceUrl;
    this.alt3 = this.props.data.wpgraphql.projectBy.ProjectDetails.image2.altText;

    this.projectImages = [
      { src: this.src, alt: this.alt },
      { src: this.src1, alt: this.alt1 },
      { src: this.src, alt: this.alt }
    ]
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {

    return (

      <Layout>
        < SEO title="/project" />
        <header className="project__bcg">
          <img className="header__bcg" src={this.src} alt={this.alt} />


          <div className="container h-100">

            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h2 className="fade-in text-uppercase text-white font-weight-bold">{this.props.data.wpgraphql.projectBy.title}</h2>
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
                  <li><p>Lokacija: {this.props.data.wpgraphql.projectBy.ProjectDetails.lokacija}</p></li>
                  <li><p>Godina: {this.props.data.wpgraphql.projectBy.ProjectDetails.godina}</p></li>
                  <li><p>Enterijer: {this.props.data.wpgraphql.projectBy.ProjectDetails.enterijer}</p></li>
                  <li><p>Foto: {this.props.data.wpgraphql.projectBy.ProjectDetails.foto}</p></li>
                  <li><p>Brendovi: {this.props.data.wpgraphql.projectBy.ProjectDetails.brendovi}</p></li>
                  <li><p>{this.props.data.wpgraphql.projectBy.ProjectDetails.projectDescription}</p></li>
                </ul>
              </div>
              <div className="col-12 col-md-6 mb-5" onClick={this.handlePortfolioClick.bind(this, 0)}>
                <img className="img-fluid" src={this.src1} alt={this.alt1} />
              </div>
              <div className="col-12 col-md-6 mb-5">
                <img className="img-fluid" src={this.src2} alt={this.alt2} />
              </div>
              <div className="col-12 col-md-6 mb-5">
                <img className="img-fluid" src={this.src3} alt={this.alt3} />
              </div>

            </div>


          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <ProjectCarousel images={this.projectImages} current={this.state.modalCurrent} />
        </PortfolioModal>
      </Layout>
    )
  }
}

export default Project;