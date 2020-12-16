import React, { useRef } from "react"

function Contact() {

    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const sendMessage = () => {
        const newMessage = {
            to: "vcsahar@gmail.com",
            subject: "PORTFOLIO CONTACT from: " + nameRef.current.value,
            from: emailRef.current.value,
            text: messageRef.current.value,
            html: "<p>" + messageRef.current.value + "</p>"
        }
        console.log(newMessage)
        alert("Message Sent!")
    }
     
    return (
        <main className="contact-main row">
            <div className="container col-12">
               
                <h1>Contact Me</h1>
                <form className="contact-form mt-4 pt-4" >
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                        ref={nameRef}
                        type="email"
                        className="form-control"
                        id="name"
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
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea
                        ref={messageRef}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        ></textarea>
                    </div>
                    <center>
                    <button 
                    type="submit" 
                    onClick={(e) => {
                        e.preventDefault()
                        sendMessage()
                    }}>
                        Submit
                    </button>
                    </center>
                </form>
                <section id="personal-info">
                    <p>
                        <i className="fas fa-phone"></i> +1 (516) 713 4111
                    </p>
                    <p>
                        <i className="fas fa-envelope-square"></i> vcsahar@gmail.com
                    </p> 
                </section>
                    
                
                <div className="col-1"></div>
                
            </div>
        </main>
    )
}

export default Contact