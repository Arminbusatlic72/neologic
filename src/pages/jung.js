import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import logo1 from "../images/partners/jung.png"

const Jung = () => {
    return (
        <Layout>
            <SEO title="Jung" />
            <section className="page-section partner">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <h2 className="text-white text-bold"><span className="text-black">Neologic</span> Partner</h2>
                            <i class="fas fa-4x fa-handshake"></i>
                            <div className="partner__text_holder">
                                <p className="m-5 pr-4 py-5">Neologic je distributer i sistem integrator kompanije JUNG od 2015. godine.

        JUNG je porodična privatna nemačka kompanija osnovana 1912. godine u Šalksmuleu gde je i danas sedište. Od samog početka poslovanje kompanije JUNG zasnovano je na tri osnovne osobine - progresu, kvalitetu i dizajnu. Zahvaljujući ovim principima, kao i odanosti proizvodnji u Nemačkoj JUNG proizvodi se danas mogu naći u reprezentativnim objektima širom sveta, kao što su Rajhstag u Berlinu, Ermitaž muzej u Sankt Petersburgu ili hotel Shnagri-La u Singapuru. Nemačka ambasada u Beogradu, fabrika Grundfos u Inđiji ili hotel Ramonda na Rtnju samo su neki od objekata u Srbiji u kojima smo ugradili i pustili u rad JUNG proizvode.

Portfolio kompanije JUNG sastoji se od komponenti za klasične elektro instalacije, preko bolničkih i hotelskih sistema do inteligentnih sistema za upravljanje zgradama zasnovanim na KNX standardu.</p></div>
                        </div>
                        <div className="col-12 col-md-3 partner__text_holder">
                            <a className="mt-5 partner__logo_holder" href="https://www.jung.de/en/">
                                <img className="img-fluid" src={logo1} alt="partnersLogo" />



                            </a>

                        </div>
                    </div>
                </div>

            </section>

        </Layout >

    )
}
export default Jung