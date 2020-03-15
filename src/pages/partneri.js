import React from 'react'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import logo1 from "../images/partners/jung.png"
import logo4 from "../images/partners/ABB_logo.gif"
import logo3 from "../images/partners/ComfortClick-Logo_sm.png"
import logo2 from "../images/partners/wago1.png"



const Partneri = () => {

    return (
        <Layout>
            <SEO title="Partneri" />
            <header className="partners__bcg">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h2 className="fade-in text-uppercase text-white font-weight-bold">Partneri</h2>
                            <hr className="divider my-4" />
                        </div>
                    </div>
                </div>
            </header>
            <section className="page-section partners">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-5 d-flex partners__bcg_white">
                            <div className="fade-in p-4 m-auto text-left" >
                                <h2 className="text-primary font-weight-bold contact__heading"><span className="text-black">Neologic</span> Partneri</h2>

                                <p>Saznajte više o našim partnerima klikom na link preuzmite PDF brošure.</p>
                                <i class="fas fa-4x fa-handshake"></i>
                            </div>


                        </div>
                        <div className="col-12 col-md-7 partners__background_blue">
                            <div className="row">

                                <div className="col-lg-4 col-md-6 text-center ">
                                    <Link to="/jung">
                                        <div className="mt-5">
                                            <img className="img-fluid" src={logo1} alt="partnersLogo" />

                                            <h3 className="h4 mb-2">Jung</h3>

                                        </div>
                                    </Link>
                                </div>


                                <div className="col-lg-4 col-md-6 text-center">
                                    <div className="mt-5">
                                        <img className="img-fluid" src={logo2} alt="partnersLogo" />

                                        <h3 className="h4 mb-2">Planiranje  i projektovanje
                    </h3>

                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 text-center">
                                    <div className="mt-5">

                                        <img className="img-fluid" src={logo3} alt="partnersLogo" />

                                        <h3 className="h4 mb-2">Planiranje  i projektovanje
                    </h3>

                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 text-center">
                                    <div className="mt-5" >
                                        <img className="img-fluid" src={logo3} alt="partnersLogo" />
                                        <h3 className="h4 mb-2">Planiranje  i projektovanje</h3>

                                    </div>
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