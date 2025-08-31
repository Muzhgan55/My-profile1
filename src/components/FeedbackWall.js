import { useState, useEffect } from "react";

const FeedbackWall = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    stars: 5,
    comment: "",
  });

  const [rating, setRating] = useState(5);
  const [emailError, setEmailError] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRating = (star) => {
    setRating(star);
    setFormData({ ...formData, stars: star });
  };

  useEffect(() => {
    if (!formData.email) {
      setEmailError("");
      return;
    }
    const timer = setTimeout(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailRegex.test(formData.email) ? "" : "Invalid email address");
    }, 500);

    return () => clearTimeout(timer);
  }, [formData.email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment || emailError) return;

    const newFeedback = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      stars: parseInt(formData.stars),
      comment: formData.comment,
    };

    setFeedbacks([newFeedback, ...feedbacks]);
    setSubmittedName(formData.name);
    setShowModal(true);

    setFormData({ name: "", email: "", stars: 5, comment: "" });
    setRating(5);
  };

  const removeFeedback = (id) => {
    setFeedbacks(feedbacks.filter((fb) => fb.id !== id));
  };

  return (
    <div className="feedback-wall">
      <h2>Feedback Wall</h2>

      {/* Feedback Form */}
      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

        {/* Star Rating */}
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleRating(star)}
              className={`star ${star <= rating ? "filled" : ""}`}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          name="comment"
          placeholder="Your Feedback"
          value={formData.comment}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {/* Live Preview */}
      <div className="feedback-item">
        <p><strong>Name:</strong> {formData.name || "Your name here"}</p>
        <p><strong>Email:</strong> {formData.email || "Your email here"}</p>
        <p>
          <strong>Rating:</strong>{" "}
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className={`star ${star <= rating ? "filled" : ""}`}>
              ★
            </span>
          ))}
        </p>
        <p><strong>Comment:</strong> {formData.comment || "Your feedback here"}</p>
      </div>

      {/* Feedback List */}
      <div className="feedback-list">
        {feedbacks.map((fb) => (
          <div key={fb.id} className="review">
            <h3>{fb.name}</h3>
            <p>{fb.email}</p>
            <div className="stars">{"★".repeat(fb.stars)}</div>
            <p>{fb.comment}</p>
            <button className="delete-btn" onClick={() => removeFeedback(fb.id)}>
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Thank you, {submittedName}!</h2>
            <p>Your feedback has been submitted successfully.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackWall;
