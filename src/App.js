import React, { useState } from 'react';
import axios from 'axios';
import TripForm from './components/TripForm';
import RouteResults from './components/RouteResults';
import './App.css';

function App() {
  const [routes, setRoutes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  const handlePlanTrip = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${API_URL}/api/plan-trip`, formData);
      setRoutes(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to plan trip');
      console.error('Trip planning error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🛣️ Road Trip Weather Planner</h1>
        <p>Plan your route considering weather conditions</p>
      </header>

      <main className="container">
        <TripForm onSubmit={handlePlanTrip} loading={loading} />
        
        {error && <div className="error-message">{error}</div>}
        {loading && <div className="loading">Planning your trip...</div>}
        {routes && <RouteResults routes={routes} />}
      </main>
    </div>
  );
}

export default App;
