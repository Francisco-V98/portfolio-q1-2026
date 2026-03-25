import { type ReactNode, useEffect } from 'react';
import Lenis from 'lenis';

interface SmoothScrollProps {
    children: ReactNode;
    scrollToTop?: boolean;
}

export default function SmoothScroll({ children, scrollToTop = false }: SmoothScrollProps) {
    useEffect(() => {
        if (scrollToTop) {
            // Project pages: take full control, disable browser restoration, force top
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
            }
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        } else {
            // Home: let the browser remember scroll position naturally
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'auto';
            }
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 2,
        });

        if (scrollToTop) {
            lenis.scrollTo(0, { immediate: true });
        }

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, [scrollToTop]);

    return <div className="smooth-wrapper">{children}</div>;
}
