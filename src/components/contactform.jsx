import React, { useState , useEffect } from 'react';

const ContactForm = ({ onClose, defaultSubject }) => {
  const [phone, setPhone] = useState('');

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
      phone, // Include the phone field in the payload
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
  }

  useEffect(() => {
    // Add scroll lock when the component mounts
    document.body.style.overflow = 'hidden';

    // Cleanup the scroll lock when the component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="contact-form-overlay">
      <div className="contact-form" style={{ maxWidth: '900px', height: '700px', alignItems: 'center', margin: '0 auto' }}>
        <h2 style={{ color: 'white' }}>Booking Request</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" style={{ color: 'white' }}>
              Name
            </label>
            <input type="text" id="name" name="name" required style={{ fontSize: '14px', padding: '5px' }} />
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{ color: 'white' }}>
              Email
            </label>
            <input type="email" id="email" name="email" required style={{ fontSize: '14px', padding: '5px' }} />
          </div>
          <div className="form-group">
            <label htmlFor="phone" style={{ color: 'white' }}>
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={{ backgroundColor: 'white', fontSize: '14px', padding: '5px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="checkIn" style={{ color: 'white' }}>
              Check-in
            </label>
            <input type="date" id="checkIn" name="checkIn" style={{ backgroundColor: 'white', fontSize: '14px', padding: '5px' }} required />
          </div>
          <div className="form-group">
            <label htmlFor="checkOut" style={{ color: 'white' }}>
              Check-out
            </label>
            <input type="date" id="checkOut" name="checkOut" style={{ backgroundColor: 'white', fontSize: '14px', padding: '5px' }} required />
          </div>
          <div className="form-group">
            <label htmlFor="subject" style={{ color: 'white' }}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              defaultValue={`${defaultSubject} - Rental Inquiry`}
              style={{ backgroundColor: 'white', fontSize: '14px', padding: '5px' }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" style={{ color: 'white' }}>
              Message
            </label>
            <textarea id="message" name="message" required style={{ fontSize: '14px', padding: '5px', height: '70px', resize: 'vertical' }}></textarea>
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
