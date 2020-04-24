
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

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
        image3 {
          altText
          sourceUrl
        }
        image4 {
          altText
          sourceUrl
        }
        image5 {
          altText
          sourceUrl
        }
        image6 {
          altText
          sourceUrl
        }
        image7 {
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
class Projekat extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      modalShow: false,
      modalCurrent: 0


    }

    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
    this.src = (this.props.data.wpgraphql.projectBy.featuredImage) ? this.props.data.wpgraphql.projectBy.featuredImage.sourceUrl : null
    this.alt = (this.props.data.wpgraphql.projectBy.featuredImage) ? this.props.data.wpgraphql.projectBy.featuredImage.altText : null
    const projectDetails = this.props.data.wpgraphql.projectBy.ProjectDetails;

    this.src1 = (projectDetails.image) ? projectDetails.image.sourceUrl : null
    this.alt1 = (projectDetails.image) ? projectDetails.image.altText : null
    this.src2 = (projectDetails.image1) ? projectDetails.image1.sourceUrl : null
    this.alt2 = (projectDetails.image1) ? projectDetails.image1.altText : null
    this.src3 = (projectDetails.image2) ? projectDetails.image2.sourceUrl : null
    this.alt3 = (projectDetails.image2) ? projectDetails.image2.altText : null
    this.src4 = (projectDetails.image3) ? projectDetails.image3.sourceUrl : null
    this.alt4 = (projectDetails.image3) ? projectDetails.image3.altText : null
    this.src5 = (projectDetails.image4) ? projectDetails.image4.sourceUrl : null
    this.alt5 = (projectDetails.image4) ? projectDetails.image4.altText : null
    this.src6 = (projectDetails.image5) ? projectDetails.image5.sourceUrl : null
    this.alt6 = (projectDetails.image5) ? projectDetails.image5.altText : null
    this.src7 = (projectDetails.image6) ? projectDetails.image6.sourceUrl : null
    this.alt7 = (projectDetails.image6) ? projectDetails.image6.altText : null
    this.src8 = (projectDetails.image7) ? projectDetails.image7.sourceUrl : null
    this.alt8 = (projectDetails.image7) ? projectDetails.image7.altText : null


    let projectImagesArr = [
      { src: this.src1, alt: this.alt1 },
      { src: this.src2, alt: this.alt2 },
      { src: this.src3, alt: this.alt3 },
      { src: this.src4, alt: this.alt4 },
      { src: this.src5, alt: this.alt5 },
      { src: this.src6, alt: this.alt6 },
      { src: this.src7, alt: this.alt7 },
      { src: this.src8, alt: this.alt8 }
    ]

    this.projectImages = projectImagesArr.filter((img) => img.src != null);



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
    const project = this.props.data.wpgraphql.projectBy


    return (

      <Layout>
        < SEO title="/project" />
        <header className="project__bcg">
          {this.src && this.alt != null &&
            <img className="header__bcg" src={this.src} alt={this.alt} />
          }


          <div className="container h-100">

            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h2 className="fade-in text-white font-weight-bold mb-5">{project.title}</h2>

              </div>

            </div>
          </div>
        </header>
        <section className="project page-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <ul className="d-flex flex-column project__list">
                  <li className="project__list-item" key={this.props.data.wpgraphql.projectBy.key}><p>Lokacija: {project.ProjectDetails.lokacija}</p></li>
                  <li className="project__list-item" key={this.props.data.wpgraphql.projectBy.key}><p>Godina: {project.ProjectDetails.godina}</p></li>
                  <li className="project__list-item" key={this.props.data.wpgraphql.projectBy.key}><p>Enterijer: {project.ProjectDetails.enterijer}</p></li>
                  <li className="project__list-item" key={this.props.data.wpgraphql.projectBy.key}><p>Foto: {project.ProjectDetails.foto}</p></li>
                  <li className="project__list-item" key={this.props.data.wpgraphql.projectBy.key}><p>Brendovi: {project.ProjectDetails.brendovi}</p></li>
                </ul>
              </div>
              <div className="col-12 mb-5">
                <p className="project__list-item p-2">{project.ProjectDetails.projectDescription}</p>

              </div>
            </div>
            <div className="grid">
              {this.src1 && this.alt1 !== null &&
                <div className="mb-2 project__gallery-item" role="presentation" onClick={this.handlePortfolioClick.bind(this, 0)} onKeyDown={this.handlePortfolioClick.bind(this, 0)}>
                  <img className="img-fluid" src={this.src1} alt={this.alt1} />
                </div>}
              {this.src3 && this.alt3 !== null &&
                <div className="mb-2 project__gallery-item" role="presentation" onClick={this.handlePortfolioClick.bind(this, 1)} onKeyDown={this.handlePortfolioClick.bind(this, 1)} >
                  <img className="img-fluid" src={this.src2} alt={this.alt2} />
                </div>}
              {this.src3 && this.alt3 !== null &&
                <div className="mb-2 project__gallery-item" role="presentation" onClick={this.handlePortfolioClick.bind(this, 2)} onKeyDown={this.handlePortfolioClick.bind(this, 2)} >
                  <img className="img-fluid" src={this.src3} alt={this.alt3} />
                </div>}
              {this.src4 && this.alt4 !== null &&
                <div className="mb-2 project__gallery-item" role="presentation" onClick={this.handlePortfolioClick.bind(this, 3)} onKeyDown={this.handlePortfolioClick.bind(this, 3)} >
                  <img className="img-fluid" src={this.src4} alt={this.alt4} />
                </div>}
              {this.src5 && this.alt5 !== null &&
                <div className="mb-2 project__gallery-item" role="presentation" onClick={this.handlePortfolioClick.bind(this, 4)} onKeyDown={this.handlePortfolioClick.bind(this, 4)} >
                  <img className="img-fluid" src={this.src5} alt={this.alt5} />
                </div>}
              {this.src6 && this.alt6 !== null &&
                <div className="mb-2 project__gallery-item" role="presentation" onClick={this.handlePortfolioClick.bind(this, 5)} onKeyDown={this.handlePortfolioClick.bind(this, 5)} >
                  <img className="img-fluid" src={this.src6} alt={this.alt6} />
                </div>}

              {this.src7 && this.alt7 !== null &&

                < div className="mb-2 project__gallery-item" role="presentation" onClick={this.handlePortfolioClick.bind(this, 6)} onKeyDown={this.handlePortfolioClick.bind(this, 6)} >
                  <img className="img-fluid" src={this.src7} alt={this.alt7} />
                </div>

              }
              {this.src8 && this.alt8 !== null &&

                <div className="mb-2 project__gallery-item" role="presentation" onClick={this.handlePortfolioClick.bind(this, 7)} onKeyDown={this.handlePortfolioClick.bind(this, 7)}  >
                  <img className="img-fluid" src={this.src8} alt={this.alt8} />
                </div>
              }



            </div>


          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <ProjectCarousel images={this.projectImages} current={this.state.modalCurrent} />
        </PortfolioModal>
      </Layout >
    )
  }
}

export default Projekat;