import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import logo4 from "../images/partners/Thinknx.png"
import Pdf from "../pdf/thinknx/thinknx.pdf"



import sal from 'sal.js'


const Thinks = () => {
    sal()
    return (
        <Layout>
            <SEO title="Jung" />
            <section className="page-section partner">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <div className="text-center text-md-left">
                                <h2 className="text-white text-light font-weight-bold" data-sal="slide-up"
                                    data-sal-delay="200"
                                    data-sal-duration="500"
                                    data-sal-easing="ease-out-bounce"><span className="text-black font-weight-light">Neologic</span> partner</h2>
                                <i class="fas fa-4x fa-handshake"></i>
                            </div>
                            <div className="p-4 mt-5 partner__text_holder">
                                <p className="text-left font-weight-light"
                                    data-sal="slide-left"
                                    data-sal-delay="200"
                                    data-sal-duration="500"
                                    data-sal-easing="ease-out-bounce">Neologic je zvanični partner kompanije Thinknx od 2015. godine.

                                    Italijanska kompanije Pulsar Engineering srl, kompanija sa više od 15 godina iskustva u domenu automatizacije zgrada, 2011. godine je pokrenula projekat Thinknx sa idejom da kreira sistem za vizualizaciju i upravljanje KNX sistemima.
                                    
                                    Danas Thinknx integriše i druge protokole za automatizaciju zgrada kao što su Modbus, Lutron i drugi, kao i različite sisteme kao što su KGH, audio/video itd. u jedinstven sistem upravljanja.
                                    
                                    Thinknx portfolio obuhvata različite servere za vizualizaciju, kontrolne touch panele, kao i gejtveje za različite sisteme.
                                    
                                    Thinknx je zvanični član KNX asocijacije i Z-Wave alijanse.</p></div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="partner__text_holder-right font-weight-light">
                            
                            <div className="custom-card m-3 text-center">
                                <a href="https://www.thinknx.com">

                                    <img className="img-fluid" src={logo4} alt="partnersLogo" />



                                </a>
                            </div>
                            <i className="fas fa-2x fa-download p-2"></i>
                            <a className="pdf-tag custom-card  p-2" href={Pdf} target="_blank">Thinknx.pdf</a>
                            
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </Layout >

    )
}
export default Thinks