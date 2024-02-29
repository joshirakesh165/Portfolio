import React, { useState } from 'react'

const ThemeSwicth = () => {
    const [mode, setMode] = useState(localStorage.getItem('theme') || 'light')
  const changeTheme = (mode) => {
    document.querySelector("body").setAttribute("data-theme", mode);
  }

  const toggleMode = () => {
    if (mode == 'light') {
      localStorage.setItem('theme', 'dark');
      changeTheme('dark');
      setMode('dark')
    } else {
      localStorage.setItem('theme', 'light');
      changeTheme('light');
      setMode('light')
    }
  }
    
    return (
        <div className='switch-container'>
            <input type="checkbox" onChange={() => toggleMode()} className="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="checkbox-label">
                <span className="ball"></span>
            </label>
        </div>
    )
}

export default ThemeSwicth
