import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import Gif from '../images/wrapper-img.gif'



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
                {/* <hr className="divider my-4" /> */}
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="fade-in text-white-75 font-weight-light mb-5">Planiranje, projektovanje i programiranje kućne automatike i BMS sistema</p>
                <a className="custom-button js-scroll-trigger" href="#about" onClick={Scroller.handleAnchorScroll}>Saznajte više</a>
              </div>
            </div>
          </div>
        </header>

        <section className="page-section" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 about">
                <h2 className="mb-5 font-weight-bold">O nama</h2>

                {/* <hr className="light my-4 divider about" /> */}
                <p className="font-weight-light mb-4">Kompanija Neologic d.o.o. bavi se inteligentnim upravljanjem procesima, pre svega u domenu automatizacije zgrada. Rešenja, zasnovana na otvorenim bus sistemima kao što su KNX, BACnet, Modbus, M-Bus, DALI i dr. obezbeđuju sigurnu investiciju u budućnost.

Zahvaljujući iskustvu, stečenom kroz veliki broj projekata i partnerstvu sa vodećim kompanijama nudimo vrhunske proizvode i servise za sve sisteme, bilo da je u pitanju automatizacija rezidencijalnog objekta ili kompleksan sistem centralnog nadzora i upravljanja.</p>
                <a className="custom-button__black text-center text-md-left mb-5 js-scroll-trigger" href="#services"
                  onClick={Scroller.handleAnchorScroll}>Saznajte više</a>
              </div>
              <div className="col-lg-6 text-left">

                <img className="img-fluid" alt="neologic-rocket" src={Gif} />


              </div>
            </div>
          </div>
        </section>

        <section className="page-section services__front_bcg" id="services">

          <div className="container-fluid text-center">
            <h2 className="mb-5 font-weight-bold">Usluge</h2>
            {/* <hr className="divider my-4" /> */}
            <div className="row services__icons-wrapp">
              <div className="col-lg-2 col-md-6 offset-lg-1 text-center">
                <div className="custom-card">
                  <Link className="services_link" to="/usluge/">

                    <i className="fas fa-4x fa-laptop text-primary mb-4"></i>
                    <h3 className="h4 mb-2">Konsalting</h3>

                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 text-center">
                <div className="custom-card">

                  <Link className="services_link" to="/usluge/">

                    <i className="fas fa-4x fa-project-diagram text-primary mb-4"></i>

                    <h3 className="h4 mb-2">Planiranje  i projektovanje
                    </h3>


                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 text-center">
                <div className="custom-card">

                  <Link className="services_link" to="/usluge/">

                    <i className="fas fa-4x fa-code text-primary mb-4"></i>
                    <h3 className="h4 mb-2">Programiranje</h3>

                  </Link>
                </div>
              </div>

              <div className="col-lg-2 col-md-6  text-center">
                <div className="custom-card">

                  <Link className="services_link" to="/usluge/">

                    <i className="fas fa-4x fa-door-open text-primary mb-4"></i>

                    <h3 className="h4 mb-2">Puštanje u rad</h3>


                  </Link>
                </div>

              </div>
              <div className="col-lg-2 col-md-6 offset-md-3 offset-lg-0 text-center">
                <div className="custom-card">

                  <Link className="services_link" to="/usluge/">


                    <i className="fas fa-4x fa-tools text-primary mb-4"></i>

                    <h3 className="h4 mb-2">Održavanje</h3>


                  </Link>
                </div>

              </div>


            </div>

            {/* <h2 className="mb-5">Pogledajte sve naše usluge</h2> */}
            <Link className="custom-button__primary mb-4" to="/usluge/">Saznajte Više</Link>

          </div>

        </section>

        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="mb-3 mb-md-0 col-lg-4 col-sm-6">
                <a className="" href="img/portfolio/fullsize/1.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <div className="projects__container">
                    <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid} />
                    <div className="projects__overlay text-black">
                      <div className="project__heading-wrapp text-left">
                        <h3>Dedinje penthaus</h3>
                        <p>Beograd</p>
                        <p>2017</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="mb-3 mb-md-0 col-lg-4 col-sm-6">
                <a className="" href="img/portfolio/fullsize/2.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                  <div className="projects__container">

                    <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid} />
                    <div className="projects__overlay text-black">
                      <div className="project__heading-wrapp text-left">
                        <h3>GIR apartman</h3>
                        <p>Beograd</p>
                        <p>2018</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a href="img/portfolio/fullsize/3.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                  <div className="projects__container">
                    <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid} />
                    <div className="projects__overlay text-black">
                      <div className="project__heading-wrapp text-left">
                        <h3>BB stan</h3>
                        <p>Beograd</p>
                        <p>2018</p>

                      </div>
                    </div>
                  </div>
                </a>
              </div>



            </div>
          </div>
        </section>

        <section className="page-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-5 font-weight-bold">Pogledajte sve naše projekte</h2>
            <Link className="custom-button" to="/projekti">Saznajte više</Link>
          </div>
        </section>

        <section className="page-section" id="contact">

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mb-5 font-weight-bold">Kontaktirajte nas!</h2>

                {/* <p className="text-muted mb-5">Da li ste spremni da započnemo Vaš sledeći projekat zajedno? Pozovite nas ili pošaljite email, odgovorićemo Vam u najkraćem mogučem periodu!</p> */}
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
