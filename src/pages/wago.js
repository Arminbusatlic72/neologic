import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Logo2 from "../images/partners/wago1.png"
import Pdf from "../pdf/wago/WAGO Building Automation.pdf"
import Pdf1 from "../pdf/wago/WAGO Lighting Control.pdf"
import Pdf2 from "../pdf/wago/WAGO Energy Management.pdf"
import Pdf3 from "../pdf/wago/WAGO Measurement.pdf"
import Pdf4 from "../pdf/wago/WAGO HVAC.pdf"
import Pdf5 from "../pdf/wago/WAGO Connectors.pdf"





import sal from 'sal.js'


const Wago = () => {
    sal()
    return (
        <Layout>
            <SEO title="Wago" />
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
                                    data-sal-easing="ease-out-bounce">Neologic je zvanični sistem integrator kompanije WAGO. Saradnju sa kompanijom WAGO započeli smo 2015. godine, a od 2016. godine smo zaduženi i za zvanične treninge za PLC programiranje kompanije WAGO.

                                    WAGO je nemačka kompanija osnovana 1951. godine. Od samog osnivanja WAGO je svoje proizvode zasnovao na bešrafnom kontaktu odnosno kontaktu putem žičane opruge po kojima je i danas prepoznatljiv u svetu, pre svega zahvaljujući svojim instalacionim konektorima i klemama.
                                    
                                    1995. godine WAGO je promovisao modularni I/O sistem i time zakoračio u svet automatizacije. Danas je WAGO I/O sistem jedan od najfleksibilnijih sistema za upravljanje procesima bilo da je u pitanju automatizacija na polju industrije, železnice, energetike, brodogradnje ili zgradarstva.
                                    
                                    Akcenat naše kompanije je na koriščenju WAGO proizvoda u domenu automatizacije zgrada, bilo da je u pitanju kompleksan BMS sistem, upravljanje rasvetom ili energetski menadžment.</p></div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="partner__text_holder-right font-weight-light">
                            <div className="custom-card text-center">
                                <a href="https://www.wago.com">
                                    <img className="img-fluid" src={Logo2} alt="partnersLogo" />
                                </a>
                            </div>
                            <i className="fas fa-2x fa-download p-2"></i>
                            <a className="pdf-tag custom-card  p-2" href = {Pdf} target = "_blank" rel="noopener noreferrer">WAGO Building Automation.pdf</a>
                            <a className="pdf-tag custom-card  p-2" href = {Pdf1} target = "_blank" rel="noopener noreferrer">WAGO Lighting Control.pdf</a>
                            <a className="pdf-tag custom-card  p-2" href = {Pdf2} target = "_blank" rel="noopener noreferrer">WAGO Energy Management.pdf</a>
                            <a className="pdf-tag custom-card  p-2" href = {Pdf3} target = "_blank" rel="noopener noreferrer">WAGO Measurement.pdf</a>
                            <a className="pdf-tag custom-card p-2" href = {Pdf4} target = "_blank" rel="noopener noreferrer">WAGO HVAC.pdf</a>
                            <a className="pdf-tag custom-card p-2" href = {Pdf5} target = "_blank" rel="noopener noreferrer">WAGO Connectors.pdf</a>


                           
                            


                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </Layout >

    )
}
export default Wago