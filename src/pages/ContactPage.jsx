import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function SupportForm() {
  // Form State
  const [formData, setFormData] = useState({
    userEmail: '',
    subject: '',
    message: '',
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Templates
    const templateParams = {
      email_id: formData.userEmail,
      subject: formData.subject,
      message: formData.message,
    };

    // EMailJS Service
    const serviceId = 'service_i4m68u9';
    const templateId = 'template_d5vnhdd';
    const publicKey = 'p1g7MtP8G_sWbuhZV';

    // Request Endpoint
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        alert('Email sent successfully!');
      },
      (error) => {
        alert('Failed to send email. Please try again.');
      }
    );
  };

  return (
    <div>
      <h1>Contact Support</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Email:</label>
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default SupportForm;
