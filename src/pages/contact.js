import React, { useState } from 'react';
import "../styles/contact.scss";
import * as emailjs from 'emailjs-com';


function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [comments, setComments] = useState("");

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_q8qhhch', 'template_dt8qzor', e.target, 'user_60vpEeiX5kQ3umJUga8Yw')
          .then((result) => {              
              console.log(result.text);
          }, (error) => {

              console.log(error.text);
          });

    }


    return (

        <>
            <div className="page_container">
            <div className="header">
                <h1>contact the artist</h1>
            </div>
            <form

                noValidate
                onSubmit={sendEmail}
                autoComplete="off"
            >
                <div className="form_container">
                    <div className="form_inputs">
                        <input
                            name="name"
                            type="text"
                            placeholder="name (required)"
                            required
                            onChange={(n) => {
                                setName(n.target.value);
                            }}
                        />
                        <input
                            name="email"
                            type="text"
                            placeholder="email (required)"
                            required
                            onChange={(n) => {
                                setEmail(n.target.value);
                            }}
                        />
                        <input
                            name="phone"
                            type="text"
                            placeholder="phone"
                            onChange={(n) => {
                                setPhone(n.target.value);
                            }}
                        />
                    </div>

                    <div className="form_comments"
                    >

                        <textarea         
                            name="comments"
                            placeholder="comments (required)"
                            onChange={(n) => {
                                setComments(n.target.value);
                            }}>

                        </textarea>
                    </div>

                </div>
                <div className="submit_button">
                    <input type="submit" value="Send" />
                </div>
         

            </form>
            </div>
        </>


    );
}

export default Contact;