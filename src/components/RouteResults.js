import React from 'react';
import './RouteResults.css';

function RouteResults({ routes }) {
  return (
    <div className="results">
      <h2>Available Routes</h2>
      <div className="routes-container">
        {routes.map(route => (
          <div key={route.id} className="route-card">
            <h3>{route.name}</h3>
            <div className="route-info">
              <div className="info-item">
                <span className="label">Distance:</span>
                <span className="value">{route.distance} km</span>
              </div>
              <div className="info-item">
                <span className="label">Duration:</span>
                <span className="value">{route.duration} hours</span>
              </div>
            </div>

            <div className="alerts-section">
              <h4>⚠️ Weather Alerts</h4>
              {route.alerts && route.alerts.length > 0 ? (
                <ul className="alerts-list">
                  {route.alerts.map((alert, idx) => (
                    <li key={idx} className={`alert alert-${alert.type}`}>
                      <span className="alert-icon">
                        {alert.type === 'precipitation' ? '🌧️' : '💨'}
                      </span>
                      <span className="alert-text">
                        {alert.type === 'precipitation' ? 'Precipitation' : 'High Wind'}: {alert.value}
                        <br/>
                        <small>Severity: {alert.severity}</small>
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-alerts">✓ No weather alerts on this route</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RouteResults;
