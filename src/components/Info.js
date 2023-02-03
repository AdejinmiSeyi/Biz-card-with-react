import React from "react";
import ProfilePhoto from "../images/seyi.jpg"
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Info() {
    return (
        <main className="main">
            <img 
                src={ProfilePhoto} 
                alt=""
            />
            <h3>Seyi Feyisara</h3>
            <p>Full Stack Developer</p>
            <small>seyifeyisara.com</small>
            <div className="contact-button">
                <button className="button1"> <FaEnvelope /> &nbsp; Email</button>
                <button className="button2"> <FaLinkedin /> &nbsp; LinkedIn</button>
            </div>
        </main>

    )
}