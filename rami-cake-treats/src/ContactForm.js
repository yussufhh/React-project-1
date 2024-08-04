import React, { useRef } from "react";
import Swal from 'sweetalert2';
import './Contact.css';
import './Login.css';

const ContactForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("http://localhost:3000/deleveryRequest", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: json
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            // If the response is ok, no need to handle data here
            await res.json();

            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });

            // Clear input fields
            nameRef.current.value = '';
            emailRef.current.value = '';
            messageRef.current.value = '';

        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                title: "Error!",
                text: "Something went wrong: Message failed to send",
                icon: "error"
            });
        }
    };

    return (
        <div>
        <section className="contact">
            <form className="form1" onSubmit={onSubmit}>
                <h2 style={{color:'#fff'}}>Get in Touch</h2>
                <div className="input-box">
                    <label style={{color:'#fff'}}>Full Name</label>
                    <input
                    style={{color:'#fff'}}
                        type="text"
                        className="field"
                        name="name"
                        placeholder="Enter your name"
                        required
                        ref={nameRef}
                    />
                </div>
                <div className="input-box">
                    <label style={{color:'#fff'}}>Email Address</label>
                    <input style={{color:'#fff'}}
                        type="email"
                        className="field"
                        name="email"
                        placeholder="Enter your email"
                        required
                        ref={emailRef}
                    />
                </div>
                <div className="input-box">
                    <label style={{color:'#fff'}}>Your Message</label>
                    <textarea  style={{color:'#fff'}}
                        className="field mess"
                        name="message"
                        placeholder="Enter your message"
                        required
                        ref={messageRef}
                    />
                </div>
                <button type="submit" className=" btn btn-primary"  style={{color:'#fff'}}>Send Message</button>
            </form>
            
        </section>
        
        </div>
    );
    
};

export default ContactForm;
