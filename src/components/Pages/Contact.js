import React from "react"

function Contact() {
     
    return (
        <main class="row">
            <div class="container col-12 m-0 ml-4 mt-4">
                <div class="row">
                    <div class="col-1"></div>
                    <div class="row col-10">
                        <h1>Contact Me</h1>
                        <form class="mt-4 pt-4" >
                            <div class="form-group">
                                <label for="name">Full Name</label>
                                <input
                                type="email"
                                class="form-control"
                                id="name"
                                />
                            </div>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input
                                type="email"
                                class="form-control"
                                id="email"
                                placeholder="name@example.com"
                                />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                ></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                        <br /><br />
                        <p>
                        <i class="fas fa-phone"></i> +1 (516) 713 4111
                        </p>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <p>
                        <i class="fas fa-envelope-square"></i> vcsahar@gmail.com
                        </p>
                    </div>
                    <div class="col-1"></div>
                </div>
            </div>
        </main>
    )
}

export default Contact