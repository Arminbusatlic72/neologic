import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Logo1 from "../images/partners/jung.png"
import Pdf from "../pdf/jung/JUNG Switches.pdf"
import Pdf1 from "../pdf/jung/JUNG Smart Home.pdf"
import Pdf2 from "../pdf/jung/JUNG Hospitality.pdf"
import Pdf3 from "../pdf/jung/JUNG Healthcare.pdf"
import Pdf4 from "../pdf/jung/JUNG Le Corbusier.pdf"
import Pdf5 from "../pdf/jung/JUNG LS1912.pdf"
import sal from 'sal.js'


const Jung = () => {
    sal()
    return (
        <Layout>
            <SEO title="Jung" />
            <section className="page-section partner">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <div className="text-center text-md-left">
                                <h2 className="text-white text-light font-weight-bold contact__heading" data-sal="slide-up"
                                    data-sal-delay="200"
                                    data-sal-duration="500"
                                    data-sal-easing="ease-out-bounce"><span className="text-black font-weight-lite">Neologic</span> partner</h2>
                                <i className="fas fa-4x fa-handshake"></i>
                            </div>
                            <div className="p-4 mt-5 partner__text_holder">
                                <p className="text-left font-weight-light"
                                    data-sal="slide-left"
                                    data-sal-delay="200"
                                    data-sal-duration="500"
                                    data-sal-easing="ease-out-bounce">Neologic je distributer i sistem integrator kompanije JUNG od 2015. godine. JUNG je porodična privatna nemačka kompanija osnovana 1912. godine u Šalksmuleu gde je i danas sedište. Od samog početka poslovanje kompanije JUNG zasnovano je na tri osnovne osobine - progresu, kvalitetu i dizajnu. Zahvaljujući ovim principima, kao i odanosti proizvodnji u Nemačkoj JUNG proizvodi se danas mogu naći u reprezentativnim objektima širom sveta, kao što su Rajhstag u Berlinu, Ermitaž muzej u Sankt Petersburgu ili hotel Shangri-La u Singapuru. Nemačka ambasada u Beogradu, fabrika Grundfos u Inđiji ili hotel Ramonda na Rtnju samo su neki od objekata u Srbiji u kojima smo ugradili i pustili u rad JUNG proizvode. Portfolio kompanije JUNG sastoji se od komponenti za klasične elektro instalacije, preko bolničkih i hotelskih sistema do inteligentnih sistema za upravljanje zgradama zasnovanim na KNX standardu.
                                    </p></div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="partner__text_holder-right font-weight-light">
                                <div className="custom-card text-center">
                                    <a href="https://www.jung.de/en/">
                                        <img className="img-fluid" src={Logo1} alt="partnersLogo" />
                                    </a>
                                </div>
                                <i className="fas fa-2x fa-download p-2"></i>
                                <a className="pdf-tag custom-card  p-2" href={Pdf} target="_blank" rel="noopener noreferrer">JUNG Switches.pdf</a>
                                <a className="pdf-tag custom-card  p-2" href={Pdf1} target="_blank" rel="noopener noreferrer">JUNG Smart Home.pdf</a>
                                <a className="pdf-tag custom-card  p-2" href={Pdf2} target="_blank" rel="noopener noreferrer">JUNG Hospitality.pdf</a>
                                <a className="pdf-tag custom-card  p-2" href={Pdf3} target="_blank" rel="noopener noreferrer">JUNG Healthcare.pdf</a>
                                <a className="pdf-tag custom-card p-2" href={Pdf4} target="_blank" rel="noopener noreferrer">JUNG Le Corbusier.pdf</a>
                                <a className="pdf-tag custom-card p-2" href={Pdf5} target="_blank" rel="noopener noreferrer">JUNG LS1912.pdf</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </Layout >

    )
}
export default Jung