import Hero from '../components/Hero';
import About from '../components/About';
import Showcase from '../components/Showcase';
import SmoothScroll from '../components/SmoothScroll';

export default function Home() {
    return (
        <SmoothScroll>
            <main>
                <Hero />
                <About />
                <Showcase />
            </main>
        </SmoothScroll>
    );
}
