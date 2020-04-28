import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Logo3 from "../images/partners/Comfortclick-logoSm.png"

import Pdf from "../pdf/comfortclick/Comfortclick.pdf"


import sal from 'sal.js'


const Comfortclick = () => {
    sal()
    return (
        <Layout>
            <SEO title="Comfortclick" />
            <section className="page-section partner">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <div className="text-center text-md-left">
                                <h2 className="text-white text-light font-weight-bold contact__heading" data-sal="slide-up"
                                    data-sal-delay="200"
                                    data-sal-duration="500"
                                    data-sal-easing="ease-out-bounce"><span className="text-black font-weight-light">Neologic</span> partner</h2>
                                <i className="fas fa-4x fa-handshake"></i>
                            </div>
                            <div className="p-4 mt-5 partner__text_holder">
                                <p className="text-left font-weight-light"
                                    data-sal="slide-left"
                                    data-sal-delay="200"
                                    data-sal-duration="500"
                                    data-sal-easing="ease-out-bounce">Neologic je zvanični partner kompanije Comfortclick sa kojom smo saradnju započeli 2019. godine.

                                    Comfortclick je slovenačka kompanija osnovana 2008. godine sa idejom kreiranja jedinstvenog operativnog sistema za upravljanje zgradama - bOS. bOS omogućava integraciju različitih protokola i sistema kao što su KNX, Z-Wave, Modbus, BACnet, Google Assistant, Amazon Alexa, Sonos, Samsung Smart TV, LG Smart TV, Philips Hue, IP kamere, DSC, Paradox, Satel, Kodi, Global Caché, IRTrans, TCP/IP uređaji, Fronius i foobot u jedinstvenu softversku platformu.
                                    
                                    Kroz širok spektar servera ili mogućnost instalacije bOS softvera na vašoj hardverskoj platformi Comfortclick nudi rešenje za sve tipove projekata, od apartmana do hotela i poslovnih kompleksa.</p></div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="partner__text_holder-right font-weight-light">
                            <div className="custom-card m-3 text-center">
                                <a href="https://www.comfortclick.com/">
                                    <img className="img-fluid" src={Logo3} alt="partnersLogo" />
                                </a>
                            </div>
                            <i className="fas fa-2x fa-download p-2"></i>
                            <a className="pdf-tag custom-card  p-2" href={Pdf} target="_blank" rel="noopener noreferrer">Comfortclick.pdf</a>
                        </div>
                    </div>
                    </div>
                </div>

            </section>

        </Layout >

    )
}
export default Comfortclick
