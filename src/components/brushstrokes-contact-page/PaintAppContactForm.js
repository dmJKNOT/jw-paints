import {useEffect, useState} from "react";

export function PaintAppContactForm() {

    const initMessage = {
        name: "",
        emailAddress: "",
        phone: "",
        msg: "",
    }
    const [disableSubmit, setDisableSubmit] = useState(true);
    const [message, setMessage] = useState(initMessage);
    const [invalidEmail, setInvalidEmail] = useState(false);

    function submitMessage() {
        const valid = validEmail(message.emailAddress);
        setInvalidEmail(!valid);
        //if valid send to smtp server
    }

    function formValidation(messageToValidate) {
        return !(messageToValidate.emailAddress.trim().length > 0 || messageToValidate.msg.trim().length > 0);
    }

    function setEmail(s) {
        const tmp = {...message, emailAddress: s};
        setMessage(tmp);
        setDisableSubmit(formValidation(tmp));
    }

    function setName(s) {
        const tmp = {...message, name: s};
        setMessage(tmp);
        setDisableSubmit(formValidation(tmp));
    }

    function setMsg(s) {
        const tmp = {...message, msg: s};
        setMessage(tmp);
        setDisableSubmit(formValidation(tmp));
    }

    function setPhone(s) {
        const tmp = {...message, phone: s};
        setMessage(tmp);
        setDisableSubmit(formValidation(tmp));
    }

    function validEmail(email){
        const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        return regex.test(email);
    }

    return (
        <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5" id="message_us_form">
            <div className="text-center mb-5">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <span className="material-symbols-outlined">mail</span>
                </div>
                <h1 className="fw-bolder">Get in touch</h1>
                <p className="lead fw-normal text-muted mb-0">We'd love to hear from you</p>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-8 col-xl-6">
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="form-floating mb-3">
                            <input className="form-control" id="name" type="text" value={message.name}
                                   placeholder="Enter your name..." data-sb-validations="required"
                                   onChange={(e) => setName(e.target.value)}/>
                            <label htmlFor="name">Full name</label>
                            <div className="invalid-feedback" data-sb-feedback="name:required">A name is
                                required.
                            </div>
                        </div>
                        <div className="form-floating mb-3">
                            <input className={invalidEmail === true ? "form-control is-invalid" : "form-control"} id="email" type="email" value={message.emailAddress}
                                   placeholder="name@example.com" data-sb-validations="required,email"
                                   onChange={(e) => setEmail(e.target.value)}/>

                            <label htmlFor="email">Email address</label>
                            <div className="invalid-feedback" data-sb-feedback="email:email">Email is not
                                valid.
                            </div>
                        </div>
                        <div className="form-floating mb-3">
                            <input className="form-control" id="phone" type="tel" value={message.phone}
                                   placeholder="(123) 456-7890" data-sb-validations="required"
                                   onChange={(e) => setPhone(e.target.value)}/>

                            <label htmlFor="phone">Phone number</label>
                            <div className="invalid-feedback" data-sb-feedback="phone:required">A phone
                                number is required.
                            </div>
                        </div>
                        <div className="form-floating mb-3">
                                        <textarea className="form-control" id="message" type="text" value={message.msg}
                                                  placeholder="Enter your message here..." style={{"height": "10rem"}}
                                                  data-sb-validations="required"
                                                  onChange={(e) => setMsg(e.target.value)}
                            ></textarea>
                            <label htmlFor="message">Message</label>
                            <div className="invalid-feedback" data-sb-feedback="message:required">A message
                                is required.
                            </div>
                        </div>

                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center mb-3">
                                <div className="fw-bolder">Form submission successful!</div>
                                To activate this form, sign up at
                                <br/>
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                        </div>

                        <div className="d-none" id="submitErrorMessage">
                            <div className="text-center text-danger mb-3">Error sending message!</div>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary btn-lg" id="submitButton"
                                    disabled={disableSubmit}
                                    onClick={submitMessage}
                                    type="button">Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}