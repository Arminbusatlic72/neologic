import React from 'React'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import ContactForm from '../components/contactForm/ContactForm';




const mapStyles = {
    map: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
};

class Kontakt extends React.Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {
            name: 'Partizanski put 1',
            lat: 44.843712,
            lng: 20.483959
        }          //Shows the infoWindow to the selected place upon a marker
    };
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {

        return (
            <Layout>
                <SEO title="Kontakt" />

                <section className="page-section contact contact__bcg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="fade-in text-left contact__heading-holder" >
                                    <h2 className="text-primary pb-4 font-weight-bold contact__heading"><span className="contact__text-black font-weight-light">Kontaktirajte</span> Nas</h2>
                                </div>
                            </div>


                            <div className="col-12 col-md-6">
                                <div className="fade-in py-4 text-left contact__heading-holder-right" >
                                    <p className="font-weight-light">Da li ste spremni da započnemo Vaš sledeći projekat zajedno?
                                 Pozovite nas ili pošaljite email, odgovorićemo Vam u najkraćem mogučem periodu!</p>

                                </div>

                            </div>


                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mt-5 contact__map-wrapp">


                                    <Map
                                        google={window.google}
                                        zoom={16}
                                        style={mapStyles}
                                        initialCenter={{
                                            lat: 44.843712,
                                            lng: 20.483959
                                        }}
                                    >
                                        <Marker onClick={this.onMarkerClick}
                                            name={'Partizanski blok 1 br. 7/10'} />

                                        <InfoWindow onClose={this.onInfoWindowClose}>
                                            <div>
                                                <h1>{this.state.selectedPlace.name}</h1>
                                            </div>
                                        </InfoWindow>
                                    </Map>

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
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyAk3SOK5gCRxO2HSHXnknmsNbthhmN-yQU"), version: 3.31
})(Kontakt)