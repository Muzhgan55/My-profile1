import React, { useState } from 'react';

const FeedbackWall = () => {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, name: 'Frozan', stars: 5, comment: 'Amazing work!' },
    { id: 2, name: 'Muzhgan', stars: 4, comment: 'Really helpful.' },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    stars: 5,
    comment: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;

    const newFeedback = {
      id: Date.now(),
      name: formData.name,
      stars: parseInt(formData.stars),
      comment: formData.comment,
    };

    setFeedbacks([newFeedback, ...feedbacks]);
    setFormData({ name: '', stars: 5, comment: '' });
  };

  const removeFeedback = (id) => {
    setFeedbacks(feedbacks.filter((fb) => fb.id !== id));
  };

  return (
    <div className="feedback-wall">
      <h2>Feedback Wall</h2>

      {/* Feedback Submission Form */}
      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Clickable Star Rating */}
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              style={{
                cursor: 'pointer',
                color: num <= formData.stars ? 'gold' : 'gray',
                fontSize: '1.5rem',
              }}
              onClick={() => setFormData({ ...formData, stars: num })}
            >
              ⭐
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
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {/* Feedback Cards */}
      <div className="feedback-list">
        {feedbacks.map((fb) => (
          <div key={fb.id} className="feedback-card">
            <h3>{fb.name}</h3>
            <p>{'⭐'.repeat(fb.stars)}</p>
            <p>{fb.comment}</p>
            <button className="remove-btn" onClick={() => removeFeedback(fb.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackWall;