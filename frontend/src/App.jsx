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
  //  Your UI here
   
  )
}

export default App
