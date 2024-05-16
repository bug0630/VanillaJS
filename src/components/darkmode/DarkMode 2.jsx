import React, { useState } from 'react';
import '../../styles/reset.css';
import { MdModeNight } from 'react-icons/md';
import { FaSun } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div onClick={toggleDarkMode}>
        {darkMode ? <FaSun size={30} /> : <MdModeNight size={30} />}
      </div>
    </div>
  );
}

export default App;
