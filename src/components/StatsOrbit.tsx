import { useRef, useEffect, useState } from 'react';

// Define the shape of a stat item
export interface StatItem {
    icon: React.ReactNode;
    label: string;
    id?: number | string;
    // Add internal coordinates for calculations
    x?: number;
    y?: number;
    z?: number;
}

interface StatsOrbitProps {
    stats: StatItem[];
    radius?: number;
    autoSpeed?: number;
    dragSensitivity?: number;
}

export default function StatsOrbit({
    stats,
    radius = 580,
    autoSpeed = 0.001,
    dragSensitivity = 0.005
}: StatsOrbitProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [elements, setElements] = useState<StatItem[]>([]);

    // Physics state
    const rotationRef = useRef({ x: 0, y: 0 }); // Current rotation angles
    const isDraggingRef = useRef(false);
    const lastMouseRef = useRef({ x: 0, y: 0 });
    const initialPositionsRef = useRef<StatItem[]>([]); // Store original sphere positions

    // Initialize random 3D positions (Fibonacci Sphere)
    useEffect(() => {
        initialPositionsRef.current = stats.map((stat, i) => {
            // Fibonacci Sphere distribution for even spread
            const phi = Math.acos(-1 + (2 * i) / stats.length);
            const theta = Math.sqrt(stats.length * Math.PI) * phi;

            return {
                ...stat,
                x: radius * Math.cos(theta) * Math.sin(phi),
                y: radius * Math.sin(theta) * Math.sin(phi) * 0.6, // Flatten Y slightly for cloud shape
                z: radius * Math.cos(phi),
                id: i
            };
        });
        // Initial render
        setElements(initialPositionsRef.current);
    }, [stats, radius]);

    // Drag Handlers
    const handlePointerDown = (e: React.PointerEvent) => {
        isDraggingRef.current = true;
        lastMouseRef.current = { x: e.clientX, y: e.clientY };
        (e.target as Element).setPointerCapture(e.pointerId);
        if (containerRef.current) containerRef.current.style.cursor = 'grabbing';
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDraggingRef.current) return;

        const deltaX = e.clientX - lastMouseRef.current.x;
        const deltaY = e.clientY - lastMouseRef.current.y;

        // Update rotation
        rotationRef.current.y += deltaX * dragSensitivity;
        rotationRef.current.x -= deltaY * dragSensitivity;

        lastMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        isDraggingRef.current = false;
        (e.target as Element).releasePointerCapture(e.pointerId);
        if (containerRef.current) containerRef.current.style.cursor = 'grab';
    };

    // Animation Loop
    useEffect(() => {
        let animationFrameId: number;

        const animate = () => {
            // Auto-rotate if not dragging
            if (!isDraggingRef.current) {
                rotationRef.current.y += autoSpeed;
            }

            const rotX = rotationRef.current.x;
            const rotY = rotationRef.current.y;

            // Precompute trig for performance
            const cosX = Math.cos(rotX);
            const sinX = Math.sin(rotX);
            const cosY = Math.cos(rotY);
            const sinY = Math.sin(rotY);

            const newElements = initialPositionsRef.current.map(el => {
                // Apply rotation matrix
                // 1. Rotate around Y axis
                let x = (el.x || 0) * cosY - (el.z || 0) * sinY;
                let z = (el.x || 0) * sinY + (el.z || 0) * cosY;
                let y = (el.y || 0);

                // 2. Rotate around X axis (on new coordinates)
                let yNew = y * cosX - z * sinX;
                let zNew = y * sinX + z * cosX;

                return { ...el, x, y: yNew, z: zNew };
            });

            setElements(newElements);
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []); // Removed autoSpeed dependency to avoid recreating loop on prop change, simpler for now

    return (
        <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: 10,
                cursor: 'grab',
                touchAction: 'none'
            }}
        >
            {elements.map((el) => {
                // 3D Projection Calculation
                const perspective = 1000;
                const safeZ = el.z || 0;
                // Simple perspective scale approximation
                const scale = perspective / (perspective - safeZ);

                // Fade out back items for depth effect
                const opacity = Math.max(0.2, (scale - 0.5) * 1.5);

                // Z-Index sorting
                const zIndex = Math.floor(scale * 100);

                return (
                    <div
                        key={el.id}
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: `translate3d(${el.x}px, ${el.y}px, 0) scale(${scale})`,
                            opacity,
                            zIndex,
                            width: 'max-content',
                            willChange: 'transform'
                        }}
                    >
                        <StatPill icon={el.icon} label={el.label} />
                    </div>
                );
            })}
        </div>
    );
}

// Internal Sub component since it stays with StatsOrbit
function StatPill({ icon, label }: { icon: React.ReactNode, label: string }) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(8px)',
                padding: '0.6rem 1rem',
                borderRadius: '100px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                color: 'var(--text-color)',
                fontSize: '0.95rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'auto',
                cursor: 'pointer',
                transition: 'background 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--button-glass-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'}
        >
            <span style={{ opacity: 0.8 }}>{icon}</span>
            <span>{label}</span>
        </div>
    )
}
