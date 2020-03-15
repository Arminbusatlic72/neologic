import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import gif from '../images/wrapper-img.gif'



export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
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
        <SEO title="Home" />
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="fade-in text-uppercase text-white font-weight-bold">Kompanija NEOLOGIC</h1>
                <hr className="divider my-4" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="fade-in text-white-75 font-weight-light mb-5">Bavi se inteligentnim upravljanjem procesima, prije svega u domenu automatizacije zgrada. Rešenja zasnovana na otvorenim bus sistemima.</p>
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about" onClick={Scroller.handleAnchorScroll}>Saznajte više</a>
              </div>
            </div>
          </div>
        </header>

        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 about">
                <h2 className="text-white mt-0">O Nama</h2>

                <hr className="light my-4 divider about" />
                <p className="text-white mb-4">Kompanija Neologic d.o.o. bavi se inteligentnim upravljanjem procesima, pre svega u domenu automatizacije zgrada. Rešenja, zasnovana na otvorenim bus sistemima kao što su KNX, BACnet, Modbus, M-Bus, DALI i dr. obezbeđuju sigurnu investiciju u budućnost.

Zahvaljujući iskustvu, stečenom kroz veliki broj projekata i partnerstvu sa vodećim kompanijama nudimo vrhunske proizvode i servise za sve sisteme, bilo da je u pitanju automatizacija rezidencijalnog objekta ili kompleksan sistem centralnog nadzora i upravljanja.</p>
                <a className="btn btn-light btn-xl mb-5 js-scroll-trigger" href="#services"
                  onClick={Scroller.handleAnchorScroll}>Saznajte više!</a>
              </div>
              <div className="col-lg-6 text-left">

                <img className="img-fluid" src={gif} />


              </div>
            </div>
          </div>
        </section>

        <section className="page-section services__front_bcg" id="services">

          <div className="container-fluid text-center">
            <h2 className="text-center mt-0">Usluge</h2>
            <hr className="divider my-4" />
            <div className="row services__icons-wrapp">
              <div className="col-lg-2 col-md-6 offset-lg-1 text-center">
                <Link className="services_link" to="/usluge/">
                  <div className="mt-5">
                    <i className="fas fa-4x fa-laptop text-primary mb-4"></i>
                    <h3 className="h4 mb-2">Konsalting</h3>
                    <p className="text-muted mb-0">Konsultantske usluge u svim fazama projekta.</p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-2 col-md-6 text-center">
                <Link className="services_link" to="/usluge/">
                  <div className="mt-5">
                    <i class="fas fa-4x fa-project-diagram text-primary mb-4"></i>

                    <h3 className="h4 mb-2">Planiranje  i projektovanje
                    </h3>
                    <p className="text-muted mb-0">U bliskom kontaktu sa investitorima, arhitektama, projektantima i električarima planiramo i projektujemo sistem.</p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-2 col-md-6 text-center">
                <Link className="services_link" to="/usluge/">
                  <div className="mt-5">
                    <i className="fas fa-4x fa-code text-primary mb-4"></i>
                    <h3 className="h4 mb-2">Programiranje</h3>
                    <p className="text-muted mb-0">Prilikom programiranja posebno je važno obezbediti da sistem budem jednostavan za upotrebu i održavanje.</p>
                  </div>
                </Link>
              </div>

              <div className="col-lg-2 col-md-6  text-center">
                <Link className="services_link" to="/usluge/">
                  <div className="mt-5">
                    <i class="fas fa-4x fa-door-open text-primary mb-4"></i>

                    <h3 className="h4 mb-2">Puštanje u rad</h3>
                    <p className="text-muted mb-0">Nakon programiranja vrši se puštanje sistema u rad i provera rada sistema.</p>
                  </div>
                </Link>

              </div>
              <div className="col-lg-2 col-md-6 offset-md-3 offset-lg-0 text-center">
                <Link className="services_link" to="/usluge/">

                  <div className="mt-5">
                    <i class="fas fa-4x fa-tools text-primary mb-4"></i>

                    <h3 className="h4 mb-2">Održavanje</h3>
                    <p className="text-muted mb-0">Po završenom poslu pratimo rad celokupnog sistema i pružamo tehničku podršku klijentima. </p>
                  </div>
                </Link>

              </div>


            </div>

            <h2 className="mb-4">Pogledajte sve naše usluge</h2>
            <Link className="btn btn-primary btn-xl my-5" to="/usluge/">Saznajte Više</Link>

          </div>

        </section>

        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid} />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                  <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid} />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                  <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid} />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="images/portfolio/fullsize/4.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                  <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid} />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                  <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid} />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                  <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid} />
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">Pogledajte sve naše projekte</h2>
            <Link className="btn btn-light btn-xl" to="/projekti">Saznaj više</Link>
          </div>
        </section>

        <section className="page-section" id="contact">

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Kontaktirajte nas!</h2>
                <hr className="divider my-4" />
                <p className="text-muted mb-5">Da li ste spremni da započnemo Vaš sledeći projekat zajedno? Pozovite nas ili pošaljite email, odgovorićemo Vam u najkraćem mogučem periodu!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                <div>+ 381 64 258 92 15</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="mailto:info@neologic.rs">info@neologic.rs</a>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent} />
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
