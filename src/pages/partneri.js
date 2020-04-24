import React from 'react'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Logo1 from "../images/partners/jung.png"
import Logo4 from "../images/partners/Thinknx.png"
import Logo3 from "../images/partners/ComfortClick-Logo_sm.png"
import Logo2 from "../images/partners/wago1.png"



const Partneri = () => {

    return (
        <Layout>
            <SEO title="Partneri" />
            <header className="partners__bcg">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h2 className="fade-in text-white font-weight-bold mb-5">Partneri</h2>

                        </div>
                    </div>
                </div>
            </header>
            <section className="page-section partners">
                <div className="container-fluid">
                    <div className="row min-vh-100">
                        <div className="col-12 col-md-5 d-flex partners__bcg_white">
                            <div className="fade-in p-4 m-auto text-center text-md-left" >
                                <h2 className="text-primary font-weight-bold contact__heading"><span className="text-black">Neologic</span> partneri</h2>


                                <i className="fas fa-4x fa-handshake"></i>
                            </div>


                        </div>
                        <div className="col-12 col-md-7 d-flex partners__background_blue">
                            <div className="row m-auto">

                                <div className="partners__custom-card col-lg-4 col-md-6 text-center">
                                    <Link to="/jung">
                                        <div className="p-3">
                                            <img className="img-fluid" src={Logo1} alt="JungLogo" />


                                        </div>
                                    </Link>
                                </div>
                                <div className="partners__custom-card col-lg-4 col-md-6 text-center">
                                    <Link to="/wago">
                                        <div className="p-3">
                                            <img className="img-fluid" src={Logo2} alt="WagoLogo" />


                                        </div>
                                    </Link>
                                </div>
                                <div className="partners__custom-card col-lg-4 col-md-6 text-center">
                                    <Link to="/comfortclick">
                                        <div className="p-3">
                                            <img className="img-fluid" src={Logo3} alt="partnersLogo" />


                                        </div>
                                    </Link>
                                </div>
                                <div className="partners__custom-card col-lg-4 col-md-6 text-center">
                                    <Link to="/thinknx">
                                        <div className="p-3">
                                            <img className="img-fluid" src={Logo4} alt="partnersLogo" />


                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="partners__bcg">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="col-lg-10 align-self-end">

                            </div>
                        </div>
                    </div>
                </div>

            </section >
        </Layout >

    )
}
export default Partneri