import React from "react"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const Partneri = ({ data }) => {
  const partners = data.allWpPartner.edges
  return (
    <Layout>
      <SEO title="Partneri" />

      <section className="page-section partners">
        <div className="container-fluid">
          <div className="row min-vh-100">
            <div className="col-12 col-md-5 d-flex partners__bcg_white">
              <div className="fade-in p-4 m-auto text-center text-md-left">
                <h2 className="text-primary font-weight-bold contact__heading">
                  <span className="text-black">Neologic</span> partneri
                </h2>
                <i className="fas fa-4x fa-handshake"></i>
              </div>
            </div>
            <div className="col-12 col-md-7 d-flex partners__background_blue">
              <div className="row m-auto">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="partners__custom-card col-lg-4 col-md-6 text-center"
                  >
                    <Link to={partner.node.slug}>
                      <div className="img-wrapper-fluid p-2">
                        {partner.node.PartnerDetails.partnerLogo && (
                          <Img
                            fluid={
                              partner.node.PartnerDetails.partnerLogo.localFile
                                .childImageSharp.fluid
                            }
                            alt={
                              partner.node.PartnerDetails.partnerLogo.altText ||
                              `${partner.node.title} Logo`
                            }
                          />
                        )}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Partneri

export const query = graphql`
  {
    allWpPartner {
      edges {
        node {
          slug
          title
          PartnerDetails {
            partnerLogo {
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
    }
  }
`
