import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState } from 'react';
import { Linkedin, Code2, Palette, Smartphone, Layers, Zap, MousePointer2 } from 'lucide-react';
import profileImage from '../assets/profile.png';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();
    const [isFlipped, setIsFlipped] = useState(false);

    // 3D Tilt Effect Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]); // Look up/down
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]); // Look left/right

    const handleGlobalMouseMove = (e: React.MouseEvent) => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeaveSection = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: '2rem'
        }} onMouseMove={handleGlobalMouseMove} onMouseLeave={handleMouseLeaveSection}>
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(64,64,64,0.3) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(40px)',
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(80,80,90,0.2) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(50px)',
                zIndex: -1,
                opacity: 'var(--bg-opacity, 1)'
            }} />

            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                gap: '4rem',
                alignItems: 'center',
                width: '100%'
            }}>

                {/* Left Column: Design Stats */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-end', textAlign: 'right' }}
                >
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-color)', marginBottom: '1rem' }}>{t.hero.designerTitle}</h2>
                    <StatItem icon={<Palette size={24} />} title={t.hero.stats.design} subtitle={t.hero.stats.designSub} />
                    <StatItem icon={<Layers size={24} />} title={t.hero.stats.vision} subtitle={t.hero.stats.visionSub} />
                    <StatItem icon={<MousePointer2 size={24} />} title={t.hero.stats.strategy} subtitle={t.hero.stats.strategySub} />
                </motion.div>

                {/* Center Column: Profile Card */}
                {/* Center Column: Profile Card */}
                {/* Center Column: Profile Card */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem', perspective: 1000 }}>
                    <motion.div
                        onMouseEnter={() => setIsFlipped(true)}
                        onMouseLeave={() => setIsFlipped(false)}
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                            width: '450px',
                            height: '650px',
                            position: 'relative',
                            cursor: 'pointer'
                        }}
                    >
                        <motion.div
                            initial={false}
                            animate={{ rotateY: isFlipped ? 180 : 0 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'relative',
                                transformStyle: "preserve-3d",
                            }}
                        >
                            {/* FRONT FACE */}
                            <div style={{
                                backfaceVisibility: 'hidden',
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                borderRadius: '32px',
                                overflow: 'hidden',
                                boxShadow: 'var(--glass-shadow)',
                                border: '1px solid var(--glass-border)',
                                background: 'transparent'
                            }}>
                                <img
                                    src={profileImage}
                                    alt={t.hero.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transform: 'scale(1.3)'
                                    }}
                                />

                                {/* Overlay Gradient */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '50%',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)',
                                    zIndex: 1
                                }} />

                                {/* Text Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    padding: '2.5rem',
                                    zIndex: 2,
                                    textAlign: 'center'
                                }}>
                                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.8rem', letterSpacing: '-1px', lineHeight: 1.1, color: '#ffffff' }}>
                                        Francisco <br /> Colmenarez
                                    </h1>
                                    <p style={{ color: '#e0e0e0', fontSize: '1.1rem', lineHeight: '1.5', fontWeight: 500 }}>
                                        {t.hero.role}
                                    </p>
                                </div>
                            </div>

                            {/* BACK FACE */}
                            <div style={{
                                backfaceVisibility: 'hidden',
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                transform: 'rotateY(180deg)',
                                borderRadius: '32px',
                                overflow: 'hidden',
                                background: 'var(--dock-bg)', // Glassmorph effect
                                backdropFilter: 'blur(20px)',
                                border: '1px solid var(--glass-border)',
                                boxShadow: 'var(--glass-shadow)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '3rem',
                                textAlign: 'center',
                                color: 'var(--text-color)'
                            }}>
                                <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-color)' }}>{t.hero.about.title}</h2>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--secondary-text)', marginBottom: '1rem' }}>
                                    {t.hero.about.p1}
                                </p>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--secondary-text)', marginBottom: '1rem' }}>
                                    {t.hero.about.p2}
                                </p>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', fontWeight: 600, color: 'var(--text-color)' }}>
                                    {t.hero.about.p3}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        href="https://www.linkedin.com/in/francisco-stoff/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            padding: '1.2rem 2.5rem',
                            background: 'var(--button-glass-bg)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--glass-border)',
                            color: 'var(--button-text)',
                            borderRadius: '50px',
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                            cursor: 'pointer',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--button-glass-hover)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--button-glass-bg)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                        }}
                    >
                        <Linkedin size={22} />
                        {t.hero.connect}
                    </motion.a>
                </div>

                {/* Right Column: Dev Stats */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', textAlign: 'left' }}
                >
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-color)', marginBottom: '1rem' }}>{t.hero.developerTitle}</h2>
                    <StatItem icon={<Smartphone size={24} />} title={t.hero.stats.mobile} subtitle={t.hero.stats.mobileSub} align="left" />
                    <StatItem icon={<Code2 size={24} />} title={t.hero.stats.web} subtitle={t.hero.stats.webSub} align="left" />
                    <StatItem icon={<Zap size={24} />} title={t.hero.stats.ai} subtitle={t.hero.stats.aiSub} align="left" />
                </motion.div>

            </div>
        </section>
    );
}

function StatItem({ icon, title, subtitle, align = 'right' }: { icon: any, title: string, subtitle: string, align?: 'left' | 'right' }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexDirection: align === 'left' ? 'row' : 'row-reverse' }}>
            <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'var(--icon-box-bg)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-color)',
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
            }}>
                {icon}
            </div>
            <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--secondary-text)' }}>{subtitle}</p>
            </div>
        </div>
    )
}
