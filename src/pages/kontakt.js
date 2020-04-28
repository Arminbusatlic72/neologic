import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo';
import ContactForm from '../components/contact-form';
import Map from "../components/map"







const Kontakt = () => {




    return (
        <Layout>
            <SEO title="Kontakt" />

            <section className="page-section contact contact__bcg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="fade-in text-left contact__heading-holder" >
                                <h2 className="text-primary pb-4 font-weight-bold contact__heading"><span className="contact__text-black font-weight-light">Kontaktirajte</span> nas</h2>
                            </div>
                        </div>


                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="mt-5 contact__map-wrapp">

                                {typeof window !== 'undefined' &&
                                    <Map
                                        position={[44.843712, 20.483959]}
                                        zoom={10}
                                        markerText={"Partizanski Blok 1 Br. 7/10, Beograd, Srbija"}
                                    />
                                }


                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 contact__holder">
                            <p className="mt-5">Pošaljite nam email putem kontakt forme ili nas kontaktirajte direktno.</p>


                            <h3 className="py-5 text-black">Kontakti:</h3>
                            <ul className="text-black py-3">
                                <li>
                                    <i className="fas fa-map-marker fa-2x mr-5 mb-3"></i>
                                    <address className="d-inline-block">Partizanski blok 1 br. 7/10, Beograd, Srbija</address>

                                </li>
                                <li>
                                    <i className="fas fa-phone fa-2x mr-5 mb-3"></i>
                                        + 381 64 258 92 15

                                    </li>
                                <li>
                                    <i className="fas fa-envelope fa-2x mr-5 mb-3"></i>
                                    <a className="d-inline-block" href="mailto:info@neologic.rs">info@neologic.rs</a>


                                </li>
                            </ul>

                        </div>
                        <div className="col-lg-6">
                            <ContactForm />
                        </div>

                    </div>
                </div>
            </section>
        </Layout >
    )
}

export default Kontakt
