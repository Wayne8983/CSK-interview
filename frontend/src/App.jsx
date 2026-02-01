import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [announcements, setAnnouncements] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch('http://localhost:3000/announcements')
        if (!response.ok) throw new Error('Failed to fetch announcements')
        const data = await response.json()
        setAnnouncements(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchAnnouncements()
  }, [])

  const handleAction = (id) => {
    alert(`Action clicked for announcement: ${id}`)
  }

  return (
    <div className="container">
      <h1>Community Events</h1>
      
      {loading && <p className="loading">Loading events...</p>}
      {error && <p className="error">Error: {error}</p>}
      
      {!loading && announcements.length === 0 && (
        <p className="no-events">No events available</p>
      )}

      <div className="events-grid">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="event-card">
            <h3 className="event-title">{announcement.title}</h3>
            <p className="event-description">{announcement.message}</p>
            <p className="event-date">
              {new Date(announcement.createdAt).toLocaleDateString()}
            </p>
            <button 
              className="event-button"
              onClick={() => handleAction(announcement.id)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
