import React from "react"
import Navbar from "@/components/navbar"
export default function Contact (){
    return (
        <div>
            <section className="contact-form">
                <h2 className="fade-in">Contact US</h2>
                <form>
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email Adress" required />
                    <input type="text" placeholder="Phone Number"/>
                    <textarea placeholder="Your Message" rows={5} required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>
        </div>
    )
}