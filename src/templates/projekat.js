import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import PortfolioModal from "../components/portfolio/modal"
import ProjectCarousel from "../components/portfolio/ProjectCarousel"

export const query = graphql`
  query($slug: String!) {
    wpProject(slug: { eq: $slug }) {
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
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        image1 {
          altText
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        image2 {
          altText
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        image3 {
          altText
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        image4 {
          altText
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        image5 {
          altText
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        image6 {
          altText
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        image7 {
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
      categories {
        nodes {
          name
        }
      }
      title
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
    }
  }
`
class Projekat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalShow: false,
      modalCurrent: 0,
    }

    this.handlePortfolioClick = this.handlePortfolioClick.bind(this)
    this.setModal = this.setModal.bind(this)
    this.src = this.props.data.wpProject.featuredImage
      ? this.props.data.wpProject.featuredImage.node.localFile.childImageSharp
          .fluid
      : null
    this.alt = this.props.data.wpProject.featuredImage
      ? this.props.data.wpProject.featuredImage.node.altText
      : null
    const projectDetails = this.props.data.wpProject.ProjectDetails

    this.src1 = projectDetails.image
      ? projectDetails.image.localFile.childImageSharp.fluid
      : null
    this.alt1 = projectDetails.image ? projectDetails.image.altText : null
    this.src2 = projectDetails.image1
      ? projectDetails.image1.localFile.childImageSharp.fluid
      : null
    this.alt2 = projectDetails.image1 ? projectDetails.image1.altText : null
    this.src3 = projectDetails.image2
      ? projectDetails.image2.localFile.childImageSharp.fluid
      : null
    this.alt3 = projectDetails.image2 ? projectDetails.image2.altText : null
    this.src4 = projectDetails.image3
      ? projectDetails.image3.localFile.childImageSharp.fluid
      : null
    this.alt4 = projectDetails.image3 ? projectDetails.image3.altText : null
    this.src5 = projectDetails.image4
      ? projectDetails.image4.localFile.childImageSharp.fluid
      : null
    this.alt5 = projectDetails.image4 ? projectDetails.image4.altText : null
    this.src6 = projectDetails.image5
      ? projectDetails.image5.localFile.childImageSharp.fluid
      : null
    this.alt6 = projectDetails.image5 ? projectDetails.image5.altText : null
    this.src7 = projectDetails.image6
      ? projectDetails.image6.localFile.childImageSharp.fluid
      : null
    this.alt7 = projectDetails.image6 ? projectDetails.image6.altText : null
    this.src8 = projectDetails.image7
      ? projectDetails.image7.localFile.childImageSharp.fluid
      : null
    this.alt8 = projectDetails.image7 ? projectDetails.image7.altText : null

    let projectImagesArr = [
      { src: this.src1, alt: this.alt1 },
      { src: this.src2, alt: this.alt2 },
      { src: this.src3, alt: this.alt3 },
      { src: this.src4, alt: this.alt4 },
      { src: this.src5, alt: this.alt5 },
      { src: this.src6, alt: this.alt6 },
      { src: this.src7, alt: this.alt7 },
      { src: this.src8, alt: this.alt8 },
    ]

    this.projectImages = projectImagesArr.filter(img => img.src != null)
  }

  handlePortfolioClick(index, e) {
    e.preventDefault()
    this.setModal(true, index)
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current,
    })
  }

  render() {
    const project = this.props.data.wpProject
    const {
      previousProject,
      nextProject,
      previousProjectTitle,
      nextProjectTitle,
    } = this.props.pageContext

    return (
      <Layout>
        <SEO title={project.title} />
        <header className="project__bcg">
          {this.src && this.alt != null && (
            <Img
              className="img-fluid header__bcg"
              fluid={this.src}
              alt={this.alt}
            />
          )}

          <div className="container h-100 project-container">
            <div className="row h-100 align-items-center align-items-md-right justify-content-center justify-content-md-right text-center text-md-right ">
              <div className="col-lg-12 align-self-end">
                <h2 className="fade-in text-white font-weight-bold mb-5 mb-md-1">
                  {project.title}
                </h2>
              </div>
            </div>
          </div>
        </header>
        <section className="project page-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <ul className="d-flex flex-column project__list">
                  <li
                    className="project__list-item"
                    key={this.props.data.wpProject.key}
                  >
                    <p>Lokacija: {project.ProjectDetails.lokacija}</p>
                  </li>
                  <li
                    className="project__list-item"
                    key={this.props.data.wpProject.key}
                  >
                    <p>Godina: {project.ProjectDetails.godina}</p>
                  </li>
                  <li
                    className="project__list-item"
                    key={this.props.data.wpProject.key}
                  >
                    <p>Enterijer: {project.ProjectDetails.enterijer}</p>
                  </li>
                  <li
                    className="project__list-item"
                    key={this.props.data.wpProject.key}
                  >
                    <p>Foto: {project.ProjectDetails.foto}</p>
                  </li>
                  <li
                    className="project__list-item"
                    key={this.props.data.wpProject.key}
                  >
                    <p>Brendovi: {project.ProjectDetails.brendovi}</p>
                  </li>
                </ul>
              </div>
              <div className="col-12 mb-5">
                <p className="project__list-item p-2">
                  {project.ProjectDetails.projectDescription}
                </p>
              </div>
            </div>
            <div className="grid">
              {this.src1 && this.alt1 !== null && (
                <div
                  className="mb-2 project__gallery-item"
                  role="presentation"
                  onClick={this.handlePortfolioClick.bind(this, 0)}
                  onKeyDown={this.handlePortfolioClick.bind(this, 0)}
                >
                  <Img
                    className="img-fluid"
                    fluid={this.src1}
                    alt={this.alt1}
                  />
                </div>
              )}
              {this.src3 && this.alt3 !== null && (
                <div
                  className="mb-2 project__gallery-item"
                  role="presentation"
                  onClick={this.handlePortfolioClick.bind(this, 1)}
                  onKeyDown={this.handlePortfolioClick.bind(this, 1)}
                >
                  <Img
                    className="img-fluid"
                    fluid={this.src2}
                    alt={this.alt2}
                  />
                </div>
              )}
              {this.src3 && this.alt3 !== null && (
                <div
                  className="mb-2 project__gallery-item"
                  role="presentation"
                  onClick={this.handlePortfolioClick.bind(this, 2)}
                  onKeyDown={this.handlePortfolioClick.bind(this, 2)}
                >
                  <Img
                    className="img-fluid"
                    fluid={this.src3}
                    alt={this.alt3}
                  />
                </div>
              )}
              {this.src4 && this.alt4 !== null && (
                <div
                  className="mb-2 project__gallery-item"
                  role="presentation"
                  onClick={this.handlePortfolioClick.bind(this, 3)}
                  onKeyDown={this.handlePortfolioClick.bind(this, 3)}
                >
                  <Img
                    className="img-fluid"
                    fluid={this.src4}
                    alt={this.alt4}
                  />
                </div>
              )}
              {this.src5 && this.alt5 !== null && (
                <div
                  className="mb-2 project__gallery-item"
                  role="presentation"
                  onClick={this.handlePortfolioClick.bind(this, 4)}
                  onKeyDown={this.handlePortfolioClick.bind(this, 4)}
                >
                  <Img
                    className="img-fluid"
                    fluid={this.src5}
                    alt={this.alt5}
                  />
                </div>
              )}
              {this.src6 && this.alt6 !== null && (
                <div
                  className="mb-2 project__gallery-item"
                  role="presentation"
                  onClick={this.handlePortfolioClick.bind(this, 5)}
                  onKeyDown={this.handlePortfolioClick.bind(this, 5)}
                >
                  <Img
                    className="img-fluid"
                    fluid={this.src6}
                    alt={this.alt6}
                  />
                </div>
              )}

              {this.src7 && this.alt7 !== null && (
                <div
                  className="mb-2 project__gallery-item"
                  role="presentation"
                  onClick={this.handlePortfolioClick.bind(this, 6)}
                  onKeyDown={this.handlePortfolioClick.bind(this, 6)}
                >
                  <Img
                    className="img-fluid"
                    fluid={this.src7}
                    alt={this.alt7}
                  />
                </div>
              )}
              {this.src8 && this.alt8 !== null && (
                <div
                  className="mb-2 project__gallery-item"
                  role="presentation"
                  onClick={this.handlePortfolioClick.bind(this, 7)}
                  onKeyDown={this.handlePortfolioClick.bind(this, 7)}
                >
                  <Img
                    className="img-fluid"
                    fluid={this.src8}
                    alt={this.alt8}
                  />
                </div>
              )}
            </div>
            <div className="project-navigation-links-wrapper">
              {previousProject ? (
                <Link
                  to={`/projekat/${previousProject}`}
                  className="project-navigation-link previous-link"
                >
                  <span className="arrow">←</span>
                  Previous: {previousProjectTitle}
                </Link>
              ) : (
                <div className="empty-link" /> // Placeholder div for spacing
              )}
              {nextProject && (
                <Link
                  to={`/projekat/${nextProject}`}
                  className="project-navigation-link next-link"
                >
                  Next: {nextProjectTitle} <span className="arrow">→</span>
                </Link>
              )}
            </div>
          </div>
        </section>

        <PortfolioModal
          show={this.state.modalShow}
          onHide={() => this.setModal(false, 0)}
        >
          <ProjectCarousel
            images={this.projectImages}
            current={this.state.modalCurrent}
          />
        </PortfolioModal>
      </Layout>
    )
  }
}

export default Projekat
