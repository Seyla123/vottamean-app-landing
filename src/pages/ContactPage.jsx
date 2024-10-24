import React, { useState } from 'react';
import { useSendEmailMutation } from '@/services/emailSupportApi';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sendEmail, { isLoading, isSuccess, isError, error }] =
    useSendEmailMutation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Log the data before sending
    console.log('Sending email with data:', { name, email, message });

    try {
      await sendEmail({ name, email, message }).unwrap();
      alert('Email sent successfully!');
      // Reset form if needed
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      alert('Failed to send email. Please try again.');
      console.error('Error sending email:', err);
    }
  };

  return (
    <div>
      <h2>Contact Support</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Email'}
        </button>
        {isSuccess && <p>Message sent successfully!</p>}
        {isError && <p>Failed to send the message: {error.message}</p>}
      </form>
    </div>
  );
}

export default ContactPage;
