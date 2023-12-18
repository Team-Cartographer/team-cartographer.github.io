import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); //FIXME: add email sending capabilities
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Your Name" 
            />
            <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Your Email" 
            />
            <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Your Message" 
            />
            <button type="submit">Send</button>
        </form>
    );
}

export default ContactForm;
