import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Videos from './components/Videos.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Sidebar />
    <Videos />
  </React.StrictMode>,
)
