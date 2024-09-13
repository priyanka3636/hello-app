import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* ... existing code ... */}
      
      <div className="fancy-card">
        <div className="card-header">
          <img src="https://via.placeholder.com/150" alt="User Avatar" className="user-avatar" />
          <div className="user-info">
            <h2>John Doe</h2>
            <p className="job-title">Senior Web Developer</p>
          </div>
        </div>
        <div className="card-body">
          <div className="stat">
            <span className="stat-value">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-value">50+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat">
            <span className="stat-value">10k+</span>
            <span className="stat-label">Lines of Code</span>
          </div>
        </div>
        <div className="card-footer">
          <a href="mailto:john.doe@example.com" className="contact-btn">Contact Me Ok</a>
        </div>
      </div>

      {/* ... existing code ... */}
    </>
  )
}

export default App