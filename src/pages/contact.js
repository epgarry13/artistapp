import React, { useState, useEffect } from 'react';
import "../styles/contact.scss";
import * as emailjs from 'emailjs-com';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [comments, setComments] = useState("");

    const [nameAtt, setNameAtt] = useState("good");
    const [emailAtt, setEmailAtt] = useState("good");
    const [commentsAtt, setCommentsAtt] = useState("good");

    useEffect(() => {
        props.setHighlight(2);
      }, [props]);

    function checkFields(){
        if (name === ""){
            setNameAtt("bad")
        } else {
            setNameAtt("")
        }
        if (email === ""){
            setEmailAtt("bad")
        } else {
            setEmailAtt("")
        }
        if (comments === ""){
            setCommentsAtt("bad")
        } else {
            setCommentsAtt("")
        }
        if ((comments === "") || (email === "") || (name === "")){
            return false            
        } else {
            return true
        }
    }

    function sendEmail(e) {
        e.preventDefault();

        if (checkFields()){
            emailjs.sendForm('service_q8qhhch', 'template_dt8qzor', e.target, 'user_60vpEeiX5kQ3umJUga8Yw')
            .then((result) => {              
                console.log(result.text);
            }, (error) => {

                console.log(error.text);
            });
            notify();
            clearFields();
        } else {
            notifyError()
        }
    }

    function clearFields(){
        setName("");
        setEmail("");
        setPhone("");
        setComments("");
    }
    const notify = () => {
        toast.dismiss()
        toast.success('Thank You!', {             
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: false,
            progress: undefined,
        })};

    const notifyError = () => {
        toast.dismiss()
        toast.error('Please Check Missing Fields', { 
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: false,
            progress: undefined,
        })};

    return (

        <>
            <ToastContainer limit={1}></ToastContainer>
            <div className="page_container">
            <div className="header">
                <h1>contact the artist</h1>
            </div>
            <form                
                onSubmit={sendEmail}
                autoComplete="off"
            >
                <div className="form_container">
                    <div className="form_inputs">
                        <input
                            className={nameAtt}
                            name="name"
                            type="text"
                            placeholder="name (required)"                            
                            value={name}
                            onChange={(n) => {
                                setName(n.target.value);
                            }}
                        />
                        <input
                            className={emailAtt}
                            name="email"
                            type="text"
                            placeholder="email (required)"
                            value={email}
                            onChange={(n) => {
                                setEmail(n.target.value);
                            }}
                        />
                        <input
                            name="phone"
                            type="text"
                            placeholder="phone"
                            value={phone}
                            onChange={(n) => {
                                setPhone(n.target.value);
                            }}
                        />
                    </div>

                    <div className="form_comments"
                    >

                        <textarea    
                            className={commentsAtt}     
                            name="comments"
                            placeholder="comments (required)"
                            value={comments}
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