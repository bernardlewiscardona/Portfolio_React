import React from 'react'

export default function Form() {
    return (
        <section className="p-5" id="contact">
            <div className="container">
                <h1 className="text-center fw-bolder">Contact Me</h1>
                <form className="mt-5 col-7 text-start mx-auto" action="https://formspree.io/f/xzbwrkbj"
                method="POST">

                    <div className="form-outline mb-4">
                        <input type="text" id="form4Example1" name="name" className="form-control" placeholder="Enter your Full Name" />
                        <label className="form-label ">Name</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="email" id="form4Example2"  name="email"  className="form-control" placeholder="Enter your Email" />
                        <label className="form-label">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                        <textarea className="form-control" id="form4Example3" name="message" placeholder="Enter your Message"  rows="4"></textarea>
                        <label className="form-label">Message</label>
                    </div>

                    <button type="submit" className="btn btn-danger rounded-pill btn-block mb-4 col-2">Send</button>
                </form>
            </div>
            <div className=" d-flex justify-content-center align-content-center gap-3">
                <a href="https://github.com/bernardlewiscardona"><img id="contactlogo" src="https://img.icons8.com/ios-filled/100/000000/github.png"/></a> 
                <a href="https://www.linkedin.com/in/bernard-lewis-cardona/"><img id="contactlogo"  src="https://img.icons8.com/ios-filled/100/000000/linkedin-circled--v1.png"/></a> 
                <a href="mailto:cardonabernardlewis@gmail.com"><img id="contactlogo"  src="https://img.icons8.com/ios-filled/100/000000/circled-envelope.png"/></a> 
            </div>
        </section>
    )
}
