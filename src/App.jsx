import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './HomePage'
import Navbar from './navbar'
import SplitText from './animatedtext'
import LeaguesSection from './leaguesection'

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<HomePage />} />
        {/* Ruta para la sección de ligas */}
        <Route path="/leagues" element={<LeaguesSection />} />
      </Routes>
    </Router>
  );
}

export default App;
