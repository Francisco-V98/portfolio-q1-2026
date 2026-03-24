import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BusbanzProject from './pages/BusbanzProject';
import AsesoriaProject from './pages/AsesoriaProject';
import FloatingNav from './components/FloatingNav';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/busbanz" element={<BusbanzProject />} />
            <Route path="/project/asesoria" element={<AsesoriaProject />} />
          </Routes>
          <FloatingNav />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
