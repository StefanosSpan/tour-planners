import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = ({ onClose, defaultSubject }) => {
  const [phone, setPhone] = useState('');
  const [state, handleSubmit] = useForm("mnqyeedp");

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (state.succeeded) {
    return (
      <div className="contact-form-overlay">
        <div className="contact-form" style={{ maxWidth: '900px', height: '700px', alignItems: 'center', margin: '0 auto' , color: 'white' }}>
          <p>Rental Inquire Sent Succesfully</p>
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }

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
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{ color: 'white' }}>
              Email
            </label>
            <input type="email" id="email" name="email" required style={{ fontSize: '14px', padding: '5px' }} />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
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
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />
          </div>
          <div className="form-group">
            <label htmlFor="checkIn" style={{ color: 'white' }}>
              Check-in
            </label>
            <input type="date" id="checkIn" name="checkIn" style={{ backgroundColor: 'white', fontSize: '14px', padding: '5px' }} required />
            <ValidationError prefix="Check-in" field="checkIn" errors={state.errors} />
          </div>
          <div className="form-group">
            <label htmlFor="checkOut" style={{ color: 'white' }}>
              Check-out
            </label>
            <input type="date" id="checkOut" name="checkOut" style={{ backgroundColor: 'white', fontSize: '14px', padding: '5px' }} required />
            <ValidationError prefix="Check-out" field="checkOut" errors={state.errors} />
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
            <ValidationError prefix="Subject" field="subject" errors={state.errors} />
          </div>
          <div className="form-group">
            <label htmlFor="message" style={{ color: 'white' }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              style={{ fontSize: '14px', padding: '5px', height: '70px', resize: 'vertical' }}
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <div className="form-actions">
            <button type="submit" disabled={state.submitting} className="btn btn-primary">
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
