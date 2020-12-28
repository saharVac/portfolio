import React, { useRef } from "react"
import emailjs from "emailjs-com"

function Contact() {

    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_b67au6x', 'template_dgv034v', e.target, 'user_x9V1K4YqNlEX0TZAPB5BN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
            .catch(err => console.log)


        e.target.reset()
    }
     
    return (
        <main className="contact-main row">
            <div className="contact-container">
               
                <h1>Contact Me</h1>

                <form onSubmit={sendMail} className="contact-form mt-4 pt-4" >
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                        ref={nameRef}
                        className="form-control"
                        id="name"
                        name="name-from"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                        ref={emailRef}
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        name="email-from"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea
                        ref={messageRef}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="message"
                        ></textarea>
                    </div>
                    <center>
                    <button type="submit" >Submit</button>
                    </center>

                    <section id="personal-info">
                    <p>
                        <i className="fas fa-envelope-square"></i> vcsahar@gmail.com
                    </p> 
                </section>
                </form>
                                
            </div>
        </main>
    )
}

export default Contact