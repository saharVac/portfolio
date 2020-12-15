import React from "react"

function Contact() {
     
    return (
        <main className="contact-main row">
            <div className="container col-12">
               
                        <h1>Contact Me</h1>
                        <form className="mt-4 pt-4" >
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                type="email"
                                className="form-control"
                                id="name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="name@example.com"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Message</label>
                                <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                ></textarea>
                            </div>
                            <button type="submit">Submit</button>
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