import React, { useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  // State for form fields
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  // State for showing success alert
  const [showAlert, setShowAlert] = useState(false);

  // References for input fields
  const emailRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || phone === "" || name === "" || msg === "") {
      return;
    } else {
      setShowAlert(true);

      // Clear the alert message after 2 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);

      // Clear form fields
      setName("");
      setEmail("");
      setPhone("");
      setMsg("");
    }
  }

  const handlePhoneLogic = (phone)=>{
    const value = phone.replace(/[^0-9]/g, ''); 
    setPhone(value);
  }

  return (
    <div className='contact' data-aos="fade-down"
         data-aos-easing="linear"
         data-aos-duration="1500">

      {/* Success alert */}
      {showAlert && <div className='alert alert-success' role='alert' style={{fontWeight: "bolder", borderRadius: "10px"}}>
        Thanks for messaging us! We will contact you at your email.
      </div>}

      <h1 className='contact-title'>Contact <span style={{ color: "#c770f0" }}>Us</span></h1>

      {/* Contact form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter your name' id='name' value={name} required ref={nameRef}/>
        </div>
        <div>
          <label htmlFor='phoneNumber'>PhoneNumber</label>
          <input type='text'  placeholder='Enter your phone' id='phoneNumber' value={phone} name='phoneNumber' required ref={phoneRef} onChange={(e) => {handlePhoneLogic(e.target.value)}} />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' placeholder='Enter your email' id='email' value={email} required ref={emailRef}  onChange={(e) => setEmail(e.target.value)}/>
          {emailRef?.current?.value !== "" && (
          <p className='user-email' style={{color: "#ffffff", textAlign: "center", marginTop: "10px", fontWeight: "bold"}}>
            Your Email : {email}
          </p>
)}

        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea placeholder='Enter your message..!' onChange={(e) => setMsg(e.target.value)} id='message' ref={messageRef} value={msg}></textarea>
          <button className='send-btn'> Send message </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
