import SmoothScroll from './components/SmoothScroll';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import FloatingNav from './components/FloatingNav';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SmoothScroll>
          <main>
            <Hero />
            <Showcase />
          </main>
          <FloatingNav />
        </SmoothScroll>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
