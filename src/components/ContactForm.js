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
  const [submittedName, setSubmittedName] = useState("");
  const [emailError, setEmailError] = useState("");

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

  // Debounced email validation
  useEffect(() => {
    if (!formData.email) {
      setEmailError("");
      return;
    }

    const timer = setTimeout(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailRegex.test(formData.email) ? "" : "Enter a valid email");
    }, 500);

    return () => clearTimeout(timer);
  }, [formData.email]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate fields
  const validate = () => {
    let errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.message.trim()) errs.message = "Message is required";
    if (emailError) errs.email = emailError;
    return errs;
  };

  // Handle submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedName(formData.name);
      setShowModal(true);
      localStorage.removeItem("contactForm"); // clear saved data
      setFormData({ name: "", email: "", message: "" });
      setSavedData(false);
    }
  };

  return (
    <div className="contact-form p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

      {savedData && <p className="hint mb-2">💾 You have unsent message data saved!</p>}

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </label>

        <label className="flex flex-col">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          {(errors.email || emailError) && <span className="text-red-500 text-sm">{errors.email || emailError}</span>}
        </label>

        <label className="flex flex-col">
          Message:
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </label>

        <button type="submit" className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>

      {/* Live Preview */}
      <div className="live-preview mt-6 p-4 border rounded bg-gray-50">
        <h3 className="font-semibold mb-2">Live Preview</h3>
        <p><strong>Name:</strong> {formData.name || "Your name here"}</p>
        <p><strong>Email:</strong> {formData.email || "Your email here"}</p>
        <p><strong>Message:</strong> {formData.message || "Your message here"}</p>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="modal-content bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">🎉 Thank you, {submittedName}!</h3>
            <p>Your message was sent successfully.</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
