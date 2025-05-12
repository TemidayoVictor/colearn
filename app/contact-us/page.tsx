import React from "react";
import { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import HomeFaq from "../components/HomeFaq";

export const metadata: Metadata = {
    title: "Contact Us",
}

const ContactUs = () => {
    return (
        <div>
            <ContactForm />
            <HomeFaq />
        </div>
    )
}

export default ContactUs