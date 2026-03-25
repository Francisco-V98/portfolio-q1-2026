import Hero from '../components/Hero';
import About from '../components/About';
import Showcase from '../components/Showcase';
import Skills from '../components/Skills';
import WorkProcess from '../components/WorkProcess';
import SmoothScroll from '../components/SmoothScroll';

export default function Home() {
    return (
        <SmoothScroll>
            <main>
                <Hero />
                <About />
                <Showcase />
                <Skills />
                <WorkProcess />
            </main>
        </SmoothScroll>
    );
}
