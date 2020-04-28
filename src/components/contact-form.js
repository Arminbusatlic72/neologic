import React from 'react'




const ContactForm = () => {



    return (
        <>

            <form className="text-center text-md-left contact-form__holder"
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field">



                <div className="form-group my-3">

                    <label>Ime
                    <input className="form-control" type="text" name="user_name" placeholder="Vaše ime" required />
                    </label>
                </div>
                <div className="form-group my-3">

                    <label>Email
                    <input className="form-control" type="email" name="user_email" placeholder="Vaše email" required />
                    </label>
                </div>
                <div className="form-group my-3">

                    <label>Vaša poruka
                    <textarea className="form-control" rows="7" cols="40" name="message" />
                    </label>
                </div>
                <button className="custom-button__black my-5" type="submit" value="Send">Pošaljite nam poruku</button>
            </form>
        </>
    );
}
export default ContactForm