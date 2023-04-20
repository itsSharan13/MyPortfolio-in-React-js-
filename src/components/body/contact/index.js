import React from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
function Contact() {
  return (
    <div className="contact">
    <Separator />
    <label className="section-title">Contact</label>
    <div className="contact-container">
      <div className="contact-left">
        <p>For any querries or suggestions , feel free to contact me.</p>
        <p>Contact Number : 1032547698</p>        
        <p>Email id       : sharanarun003@gmail.com</p>
        <SocialContact />
        </div>
      </div>
    </div>
  );
}

export default Contact;