import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Modo Claro ☀️' : 'Modo Oscuro 🌙'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar