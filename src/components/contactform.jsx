import React from 'react';

const ContactForm = ({ onClose, defaultSubject }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const checkIn = formData.get('checkIn');
    const checkOut = formData.get('checkOut');
    const message = formData.get('message');
    const subject = formData.get('subject');

    // Create the email payload
    const payload = {
      name,
      email,
      checkIn,
      checkOut,
      message,
      subject,
    };

    try {
      // Send the form data to the backend
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Email sent successfully
        console.log('Email sent!');
        // You can show a success message or perform any desired actions
      } else {
        // Email sending failed
        console.error('Failed to send email');
        // You can show an error message or perform any desired actions
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle the error gracefully
    }
  };

  return (
    <div className="contact-form-overlay">
      <div className="contact-form">
        <h2 style={{ color: 'white' }}>Contact us for Booking</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" style={{ color: 'white' }}>
              Name
            </label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{ color: 'white' }}>
              Email
            </label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="checkIn" style={{ color: 'white' }}>
              Check-in
            </label>
            <input type="date" id="checkIn" name="checkIn" style={{ backgroundColor: 'white' }} required />
          </div>
          <div className="form-group">
            <label htmlFor="checkOut" style={{ color: 'white' }}>
              Check-out
            </label>
            <input type="date" id="checkOut" name="checkOut" style={{ backgroundColor: 'white' }} required />
          </div>
          <div className="form-group">
            <label htmlFor="subject" style={{ color: 'white' }}>
              Subject
            </label>
            <input type="text" id="subject" name="subject" defaultValue={`${defaultSubject} - Rental Inquiry`} style={{ backgroundColor: 'white' }} required />
          </div>
          <div className="form-group">
            <label htmlFor="message" style={{ color: 'white' }}>
              Message
            </label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
