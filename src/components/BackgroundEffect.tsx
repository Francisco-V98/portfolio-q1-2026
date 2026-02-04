import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
    id: number;
    angle: number; // Direction in radians
    distance: number; // How far it travels
    size: number;
    duration: number;
    delay: number;
}

export default function BackgroundEffect() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // Generate a fixed set of particles to reuse
        const count = 40; // reduced count for performance but enough for effect
        const newParticles: Particle[] = [];

        for (let i = 0; i < count; i++) {
            newParticles.push({
                id: i,
                angle: Math.random() * Math.PI * 2,
                distance: 800 + Math.random() * 500, // Travel past the screen edge roughly
                size: 2 + Math.random() * 4, // 2px to 6px
                duration: 5 + Math.random() * 10, // Slow, floating movement
                delay: Math.random() * 5
            });
        }
        setParticles(newParticles);
    }, []);

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: -1,
            pointerEvents: 'none'
        }}>
            {/* Central Glow pulsing */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, var(--glass-highlight) 0%, rgba(0,0,0,0) 70%)',
                    filter: 'blur(60px)',
                    opacity: 0.3,
                    zIndex: 0
                }}
            />

            {/* Emanating Particles */}
            {particles.map((p) => (
                <ParticleItem key={p.id} p={p} />
            ))}
        </div>
    );
}

function ParticleItem({ p }: { p: Particle }) {
    // Calculate end position based on angle and distance
    const endX = Math.cos(p.angle) * p.distance;
    const endY = Math.sin(p.angle) * p.distance;

    return (
        <motion.div
            initial={{
                x: 0,
                y: 0,
                opacity: 0,
                scale: 0
            }}
            animate={{
                x: endX,
                y: endY,
                opacity: [0, 0.8, 0], // Fade in then out
                scale: [0, 1.5, 0]
            }}
            transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "linear",
            }}
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: p.size,
                height: p.size,
                backgroundColor: 'var(--text-color)', // Adapts to theme
                borderRadius: '50%',
                boxShadow: '0 0 10px var(--glass-highlight)',
                filter: 'blur(1px)' // Soft look
            }}
        />
    );
}
