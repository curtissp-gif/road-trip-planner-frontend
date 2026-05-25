import React, { useState } from 'react';
import './TripForm.css';

function TripForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    start: '',
    end: '',
    departureTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.start && formData.end && formData.departureTime) {
      onSubmit(formData);
    }
  };

  return (
    <form className="trip-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="start">Starting Location</label>
        <input
          type="text"
          id="start"
          name="start"
          value={formData.start}
          onChange={handleChange}
          placeholder="e.g., New York, NY"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="end">Destination</label>
        <input
          type="text"
          id="end"
          name="end"
          value={formData.end}
          onChange={handleChange}
          placeholder="e.g., Boston, MA"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="departureTime">Departure Date & Time</label>
        <input
          type="datetime-local"
          id="departureTime"
          name="departureTime"
          value={formData.departureTime}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" disabled={loading} className="submit-btn">
        {loading ? 'Planning...' : 'Plan My Trip'}
      </button>
    </form>
  );
}

export default TripForm;
