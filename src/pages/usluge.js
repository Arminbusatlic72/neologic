import React from 'react'
import SEO from '../components/seo'
import Layout from "../components/layout"
import sal from 'sal.js'



const Services = () => {

    sal()
    return (

        <Layout>
            <SEO title="Usluge" />
            <header className="services__bcg">
                <div className="container h-100">
                    <div className="row h-100 align-items-center align-items-md-right justify-content-center justify-content-md-right text-center text-md-right ">
                        <div className="col-lg-12 align-self-end">
                            <h2 className="fade-in text-white font-weight-bold mb-5 mb-md-1">Usluge</h2>
        
                        </div>

                    </div>
                </div>
            </header>

            <section className="page-section services_main">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-4 col-md-6 text-center mt-5 fade-in">

                            <div className="p-2">
                                <i className="fas fa-4x fa-laptop text-primary mb-4"></i>

                                <h3 className="h4 mb-4 text-uppercase">Konsalting</h3>
                                <p className="text-muted text-justify">Konsultantske usluge u svim fazama projekta. U skladu sa vašim individualnim željama tražimo najefikasnija rešenja za vaš sistem, nezavisna od proizvođača.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center mt-5 fade-in">
                            <div className="p-2">
                                <i className="fas fa-4x fa-project-diagram text-primary mb-4"></i>

                                <h3 className="h4 mb-4 text-uppercase">Planiranje  i projektovanje</h3>
                                <p className="text-muted text-justify">U bliskom kontaktu sa investitorima, arhitektama, projektantima i električarima planiramo i projektujemo sistem. Pravilna koordinacija između svih uključenih strana u ovoj fazi posla neophodna je

kako bi se uspešno odgovorilo na sve zahteve klijenta.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center mt-5 fade-in">
                            <div className="p-2">
                                <i className="fas fa-4x fa-code text-primary mb-4"></i>

                                <h3 className="h4 mb-4 text-uppercase">Programiranje</h3>
                                <p className="text-muted text-justify">Prilikom programiranja posebno je važno obezbediti da sistem budem jednostavan za upotrebu i održavanje. Fleksibilnost sistema omogućava neograničeno reprogramiranje sistema u skladu sa novim potrebama klijenta.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-2 text-center mt-5 fade-in">
                            <div className="p-2">
                                <i className="fas fa-4x fa-door-open text-primary mb-4"></i>
                                <h3 className="h4 mb-4 text-uppercase">Puštanje u rad</h3>
                                <p className="text-muted text-justify">Nakon programiranja vrši se puštanje sistema u rad i provera rada sistema. Klijent se upoznaje sa sistemom i organizuje se obuka za korišćenje sistema. Ukoliko je potrebno izrađuje se i tehnička dokumentacija za korišćenje sistema.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center mt-5 fade-in">
                            <div className="p-2">
                                <i className="fas fa-4x fa-tools text-primary mb-4"></i>

                                <h3 className="h4 mb-4 text-uppercase">Održavanje</h3>
                                <p className="text-muted text-justify">Po završenom poslu pratimo rad celokupnog sistema i pružamo tehničku podršku klijentima. Pojedine delove sistema moguće je daljinski održavati. U tom slučaju izmene i nadogradnju sistema moguće je izvršiti na brži i jednostavniji način.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <section className="page-section services_main">



                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-6 order-1 d-flex justify-content-center align-items-center text-white public__background_img">
                            <h2 className="font-weight-bold" data-sal="slide-up"
                                data-sal-delay="100"
                                data-sal-duration="500"
                                data-sal-easing="ease-out-bounce">Javni objekti</h2>


                        </div>
                        <div className="col-md-6 order-2 d-flex background_text">
                            <p className="m-auto text-left font-weight-light" data-sal="slide-down"
                                data-sal-delay="100"
                                data-sal-duration="500"
                                data-sal-easing="ease-out-bounce">Današnji zahtevi po pitanju zaštite životne sredine imaju veliki uticaj na javne zgrade. U javnim zgradama radno vreme je znatno duže, zdravstveni i bezbednosni propisi su znatno strožiji, a potrošnja energije je veoma značajna kako sa aspekta zaštite životne sredine, tako i sa finansijskog aspekta.

                                Kako bi se smanjila potrošnja energije, kao i operativni troškovi javnih zgrada potrebno je integrisati različite sisteme kao što su sigurnosni sistemi, sistemi upravljanja rasvetom, sistemi grejanja, hlađenja i ventilacije u jedinstven centralni sistem upravljanja. Centrali sistemi upravljanja čine zgradu „inteligentnom“, odnosno omogućavaju da svi sitemi unutar jedne zgrade funkcionišu na zajedničkoj platformi.
                                
                                 Zahvaljujući otvorenim sistemima kao što su BACnet, Modbus, KNX i EnOcean svi elementi sistema komuniciraju na zajedničkom jeziku čime je u mnogome smanjeno kabliranje i povećana funkcionalnost svih sistema.
                                
                                </p>

                        </div>
                        <div className="col-md-6 d-flex order-4 order-md-3 background_text">
                            <p className=" text-left m-auto font-weight-light" data-sal="slide-up"
                                data-sal-delay="100"
                                data-sal-duration="500"
                                data-sal-easing="ease-out-bounce">Bilo da su u pitanju muzeji, biblioteke, aerodromi, šoping molovi ili drugi javni objekti centralni sistem omogućava idealnu temperaturu u svakoj pojedinačnoj prostoriji prema nameni. Rasveta i žaluzine takođe rade zajedno – roletne se u odnosu na spoljašnje parametre spuštaju kako bi zaštitile prostoriju od pregrevanja ili se podižu kako bi omogućile ulazak sunčevih zraka i smanjile potrebu za grejanjem. Rasveta se dimuje u zavisnosti od osvetljaja i položaja žaluzina, a prisustvo ljudi se detektuje kako bi se prilagodio osvetljaj i klima u prostoriji.
                                
                                Zajednička kontrola svih sistema u velikoj meri utiče na smanjenje troškova održavanja zgrade, pri tom doprinoseći povećanom komforu zaposlenih kao i posetilaca. </p>

                        </div>
                        <div className="col-md-6 order-3 order-md-4 public__background_img">

                        </div>




                        <div className="col-md-6 order-5 d-flex justify-content-center align-items-center text-white commercial__background_img">
                            <h2 className="font-weight-bold" data-sal="slide-down"
                                data-sal-delay="100"
                                data-sal-duration="500"
                                data-sal-easing="ease-out-bounce">Komercijalni Objekti</h2>

                        </div>
                        <div className="col-md-6 order-6 d-flex background_text">
                            <p className="m-auto text-left font-weight-light" data-sal="slide-up"
                                data-sal-delay="100"
                                data-sal-duration="500"
                                data-sal-easing="ease-out-bounce">Iako savremeni dizajn modernih komercijalnih zgrada znatno povećava njihovu energetsku efikasnost, postoje limiti koji se mogu postići koristeći isključivo tehnike dizajna i savremene materijale. Takođe, fragmentisan pristup sistemima u zgradi gde se svaki sistem posmatra kao zasebna celina predstavlja još jednu prepreku u dostizanju maksimalne energetske efikasnosti objekta.

                                Kako bi se postigla maksimalna efikasnost, smanjili operativni troškovi i kreirao optimalan radni ambijent potreban je centralni sistem upravljanja koji vrši koordinisano upravljanje različitim tehničkim sistemima jednog objekta.
                                
                                U komercijalnim zgradama sa kancelarijskim prostorom često dolazi do prenamene ili promene u konfiguraciji pojedinih prostorija. Moderni bus sistemi zahvaljujući svojoj fleksibilnosti omogućavaju promene sistema jednostavnim reprogramiranjem čime se znatno smanjuje potreba za ponovnim kabliranjem i gubici usled nemogućnosti korišćenja prostorija u dužem periodu.
                                </p>

                        </div>
                        <div className="col-md-6 order-8 order-md-7 d-flex background_text">
                            <p className="m-auto text-left font-weight-light" data-sal="slide-down"
                                data-sal-delay="100"
                                data-sal-duration="500"
                                data-sal-easing="ease-out-bounce">Sistem upravljanja omogućava optimalan nivo radnog svetla pritom maksimalno koristeći dnevno svetlo, pozicioniranje žaluzina u odnosu na položaj sunca kako bi se sprečio odsjaj i iskoristila/blokirala sunčeva svetlost u slučaju potrebe za grejanjem/hlađenjem objekta. Detektori prisustva i vremenski programi obezbeđuju da se prostorije greju, hlade i ventiliraju na maksimalan nivo samo kada ima osoba u prostoriji. Kada je otvoren prozor, grejanje ili hlađenje se automatski gasi kako bi se sprečili nepotrebni gubici energije.

                                Pored uštede energije i racionalizacije operativnih troškova sistemi upravljanja omogućavaju i povećan komfor svojim korisnicima. Tako na primer u sali za prezentacije jednim pritiskom tastera svetla se dimuju, žaluzine i platno za projekcije se spuštaju, projektor se uključuje, a klimatizacija se podešava na željeni nivo kako bi se obezbedili idealni uslovi za prezentaciju.
                                
                                </p>

                        </div>
                        <div className="col-md-6  order-7 order-md-8 commercial__background_img">

                        </div>




                        <div className="col-md-6  order-9 d-flex justify-content-center align-items-center text-white residential__background_img">
                            <h2 className="font-weight-bold text-white" data-sal="slide-up"
                                data-sal-delay="100"
                                data-sal-duration="500"
                                data-sal-easing="ease-out-bounce">Rezidencialni objekti</h2>

                        </div>
                        <div className="col-md-6 order-10 d-flex background_text">
                            <p className="m-auto text-left font-weight-light" data-sal="slide-down"
                                data-sal-delay="100"
                                data-sal-duration="500"
                                data-sal-easing="ease-out-bounce">Inteligentni bus sistemi se više ne vezuju samo za luksuzno stanovanje. Zahvaljujući mogućnostima koje pružaju kao što su ušteda energije, povećanje sigurnosti i unapređenje životnog prostora bus sistemi postaju jedinstveni deo modernog stanovanja.

                                Kako bi se ostvario puni potencijal sistem mora biti zasnovan na otvorenoj platformi, koja omogućava integraciju proizvoda različitih proizvođača. KNX bus sistem je veoma robustan i fleksibilan sistem koji omogućava upravljanje velikim brojem aplikacija, kao i proširenje sistema u kasnijim fazama. Povezivanje aplikacija kao što su rasveta, žaluzine, grejanje, hlađenje i ventilacija kao i audio/video i sigurnosni sistemi u jedinstven sistem upravljanja pruža veliki komfor korisnicima.
                                </p>

                        </div>
                        <div className="col-md-6  order-12 order-md-11 background_text">
                            <p className="my-5 text-left font-weight-light" data-sal="slide-up"
                                data-sal-delay="100"
                                data-sal-duration="500"
                                data-sal-easing="ease-out-bounce">Zahvaljujući velikom broju proizvođača i kvalifikovanih sistem integratora širom sveta KNX standard je potpuno nezavistan od pojedinačnih proizvođača, čime predstavlja sigurnu investiciju u budućnost. Širok spektar proizvoda koji su u potpunosti kompatibilni među sobom pruža integratorima veliku fleksibilnost u kreiranju idealnog sistema upravljanja.

                                Multifunkcionalnost zidnih kontrolnih panela omogućava da se svi sistemi unutar prostorije kontrolišu sa jednog uređaja čime se znatno smanjuje broj uređaja za upravljanje u prostoriji. Veliki spektar dizajnerskih rešenja upravljačkih elemenata dodatno olakšava arhitektama i dizajnerima uklapanje u bilo koji enterijer. 
                                </p>

                        </div>
                        <div className="col-md-6  order-11 order-md-12 residential__background_img">

                        </div>
































                    </div>

                </div>
            </section>

        </Layout>
    )
}
export default Services
