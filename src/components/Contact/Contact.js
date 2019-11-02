import React, { Component } from 'react';
import './Contact.css';
import EmailForm from '../Email/Email.js';


class Contact extends Component {
    render() {

        return (
            <>
                <div className="contact-page">
                    <EmailForm/>
                </div>
            </>
        )
    }
}

export default Contact;