// src/components/ContactForm.js
import React, { useState, useEffect } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [savedData, setSavedData] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Load saved form data
  useEffect(() => {
    const saved = localStorage.getItem("contactForm");
    if (saved) {
      setFormData(JSON.parse(saved));
      setSavedData(true);
    }
  }, []);

  // Auto-save form data
  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(formData));
  }, [formData]);

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate fields
  const validate = () => {
    let errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.message.trim()) errs.message = "Message is required";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Enter a valid email";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setShowModal(true);
      localStorage.removeItem("contactForm"); // clear after submit
      setFormData({ name: "", email: "", message: "" });
      setSavedData(false);
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>

      {savedData && <p className="hint">💾 You have unsent message data saved!</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Message:
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>

        <button type="submit" className="btn">Send Message</button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>🎉 Thank you, {formData.name || "Friend"}!</h3>
            <p>Your message was sent successfully.</p>
            <button className="btn" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;