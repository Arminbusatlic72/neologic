import React from 'React'
import Layout from '../components/layout'
import SEO from '../components/seo'
import googleMap from '../components/googleMap'
import GoogleMapReact from 'google-map-react'




const Kontakt = () => {

    return (
        <Layout>
            <SEO title="Kontakt" />
            <GoogleMapReact />
            <section className="page-section contact">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="fade-in p-4 text-left contact__heading_holder" >
                                <h2 className="text-primary pb-4 font-weight-bold contact__heading"><span className="text-black">Kontaktirajte</span> Nas</h2>
                                <p className="text-bold">Da li ste spremni da započnemo Vaš sledeći projekat zajedno?</p>
                                <p className="text-muted mb-5"> Pozovite nas ili pošaljite email, odgovorićemo Vam u najkraćem mogučem periodu!</p>

                            </div>

                            <div className="text-left p-3 mt-5 d-flex flex-column contact__holder">
                                <h3 className="py-3">Kontakti:</h3>
                                <ul>
                                    <li>
                                        <i className="fas fa-map-marker fa-2x mr-5 mb-3 taxt-black"></i>
                                        <adress>Partizanski blok 1 br. 7/10, Beograd, Srbija</adress>

                                    </li>
                                    <li>
                                        <i className="fas fa-phone fa-2x mr-5 mb-3 taxt-black"></i>
                                        + 381 64 258 92 15

                                    </li>
                                    <li>
                                        <i className="fas fa-envelope fa-2x mr-5 mb-3 text-black"></i>
                                        info@neologic.rs

                                    </li>
                                </ul>





                            </div>

                        </div>




                        <div className="col-12 col-md-6 partner">
                            <div className="fade-in p-4 text-left contact__heading_holder" >
                                <h2 className="text-white font-weight-bold contact__heading"><span className="text-black">Pošaljite Nam </span>Poruku</h2>

                            </div>
                            <form className="contact-form__holder">
                                <div className="form-group my-3">
                                    <label for="name">Ime</label>
                                    <input className="form-control"></input>

                                </div>
                                <div className="form-group my-3">
                                    <label for="name">Prezime</label>
                                    <input className="form-control"></input>

                                </div>
                                <div className="form-group my-3">
                                    <label for="name">email</label>
                                    <input className="form-control"></input>

                                </div>
                                <div className="form-group my-3">
                                    <label for="name">Vaša Poruka</label>
                                    <textarea className="form-control" id="" rows="4" cols="30"></textarea>

                                </div>
                                <a className="btn btn-light btn-xl my-5" href="/"
                                >Pošaljite Poruku</a>


                            </form>



                        </div>


                    </div>
                </div>
            </section>
        </Layout >
    )
}



export default Kontakt