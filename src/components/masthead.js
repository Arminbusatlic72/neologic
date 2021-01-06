import React from 'react';
import Img from 'gatsby-image';
import {useStaticQuery, graphql} from 'gatsby'

export const Masthead = (props) => {
    const data = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "slider-bg.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1980, quality: 100){
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }`)
    return (
        <div>
            <Img className="masthead-header__bcg" fluid={data.placeholderImage.childImageSharp.fluid} />
            <header className="masthead">
          
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="fade-in text-uppercase text-white font-weight-bold">Kompanija NEOLOGIC</h1>
                
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="fade-in text-white-75 font-weight-light mb-5">Planiranje, projektovanje i programiranje kućne automatike i BMS sistema</p>
                {props.children}
              </div>
            </div>
          </div>
        </header>
        </div>
    )
}
export default Masthead
