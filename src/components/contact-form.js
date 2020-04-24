import React from 'react'
import emailjs from 'emailjs-com';




export default function ContactForm() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("default_service", "template_DIBUHr5F", e.target, "user_2Q25PbAs82IPYcHfMOCyK")
            .then((result) => {
                alert("Poruka je uspješno poslata")

            }, (error) => {
                alert(error.text);
            });
    }

    return (
        <>

            <form className="text-center text-md-left contact-form__holder" onSubmit={sendEmail}>
                <div className="form-group my-3">

                    <label>Ime
                    <input className="form-control" type="text" name="user_name" required />
                    </label>
                </div>
                <div className="form-group my-3">

                    <label>Email
                    <input className="form-control" type="email" name="user_email" required />
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