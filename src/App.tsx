import SmoothScroll from './components/SmoothScroll';
import Hero from './components/Hero';
import Showcase from './components/Showcase';

function App() {
  return (
    <SmoothScroll>
      <main>
        <Hero />
        <Showcase />
      </main>
    </SmoothScroll>
  )
}

export default App
