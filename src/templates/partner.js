import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import sal from "sal.js"

const PartnerPage = ({ data, pageContext }) => {
  const { previousPartner, nextPartner } = pageContext

  const partner = data.wpPartner
  const {
    pdfFile1,
    pdfFile2,
    pdfFile3,
    pdfFile4,
    pdfFile5,
    pdfFile6,
  } = partner.PartnerDetails

  const createPdfLink = (pdfFile, fallbackSlug) => {
    if (pdfFile?.localFile?.publicURL) {
      const title = pdfFile.title || fallbackSlug
      return {
        url: pdfFile.localFile.publicURL,
        title: `${title}.pdf`,
      }
    }
    return null
  }

  sal()
  return (
    <Layout>
      <SEO title={partner.title} />
      <section className="page-section partner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-9">
              <div className="text-center text-md-left">
                <h2
                  className="text-white text-light font-weight-bold contact__heading"
                  data-sal="slide-up"
                  data-sal-delay="200"
                  data-sal-duration="500"
                  data-sal-easing="ease-out-bounce"
                >
                  <span className="text-black font-weight-lite">Neologic</span>
                  partner
                </h2>
                <i className="fas fa-4x fa-handshake"></i>
              </div>
              <div className="p-4 mt-5 partner__text_holder">
                <p
                  className="text-left font-weight-light"
                  data-sal="slide-left"
                  data-sal-delay="200"
                  data-sal-duration="500"
                  data-sal-easing="ease-out-bounce"
                >
                  {partner.PartnerDetails.partnerDescription}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="partner__text_holder-right font-weight-light">
                <div className="custom-card text-center">
                  <a href="https://www.jung.de/en/">
                    <div className="img-wrapper-fluid p-2">
                      <Img
                        fluid={
                          partner.PartnerDetails.partnerLogo.localFile
                            .childImageSharp.fluid
                        }
                        alt={
                          partner.PartnerDetails.partnerLogo.altText ||
                          `${partner.title} Logo`
                        }
                      />
                    </div>
                  </a>
                </div>
                <i className="fas fa-2x fa-download p-2"></i>

                {createPdfLink(pdfFile1, partner.slug) && (
                  <a
                    className="pdf-tag custom-card p-2"
                    href={createPdfLink(pdfFile1, partner.slug).url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {createPdfLink(pdfFile1, partner.slug).title}
                  </a>
                )}
                {createPdfLink(pdfFile2, partner.slug) && (
                  <a
                    className="pdf-tag custom-card p-2"
                    href={createPdfLink(pdfFile2, partner.slug).url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {createPdfLink(pdfFile2, partner.slug).title}
                  </a>
                )}
                {createPdfLink(pdfFile3, partner.slug) && (
                  <a
                    className="pdf-tag custom-card p-2"
                    href={createPdfLink(pdfFile1, partner.slug).url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {createPdfLink(pdfFile3, partner.slug).title}
                  </a>
                )}
                {createPdfLink(pdfFile4, partner.slug) && (
                  <a
                    className="pdf-tag custom-card p-2"
                    href={createPdfLink(pdfFile4, partner.slug).url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {createPdfLink(pdfFile4, partner.slug).title}
                  </a>
                )}

                {createPdfLink(pdfFile5, partner.slug) && (
                  <a
                    className="pdf-tag custom-card p-2"
                    href={createPdfLink(pdfFile5, partner.slug).url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {createPdfLink(pdfFile5, partner.slug).title}
                  </a>
                )}
                {createPdfLink(pdfFile6, partner.slug) && (
                  <a
                    className="pdf-tag custom-card p-2"
                    href={createPdfLink(pdfFile6, partner.slug).url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {createPdfLink(pdfFile6, partner.slug).title}
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="navigation-links-wrapper">
            {previousPartner ? (
              <Link
                to={`/partneri/${previousPartner}`}
                className="navigation-link previous-link"
              >
                <span className="arrow">←</span>
                Previous: {previousPartner}
              </Link>
            ) : (
              <div className="empty-link" /> // Placeholder div for spacing
            )}
            {nextPartner && (
              <Link
                to={`/partneri/${nextPartner}`}
                className="navigation-link next-link"
              >
                Next: {nextPartner} <span className="arrow">→</span>
              </Link>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    wpPartner(slug: { eq: $slug }) {
      id
      title
      PartnerDetails {
        partnerDescription
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
        pdfFile1 {
          title
          localFile {
            publicURL
          }
        }
        pdfFile2 {
          title

          localFile {
            publicURL
          }
        }
        pdfFile3 {
          title
          localFile {
            publicURL
          }
        }
        pdfFile4 {
          title
          localFile {
            publicURL
          }
        }
        pdfFile5 {
          title
          localFile {
            publicURL
          }
        }
        pdfFile6 {
          title
          localFile {
            publicURL
          }
        }
      }
    }
  }
`

export default PartnerPage
