import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState } from 'react';
import { Linkedin, Code2, Palette, Smartphone, Layers, Zap, MousePointer2, ChevronDown } from 'lucide-react';
import profileImage from '../assets/profile.png';
import { useLanguage } from '../context/LanguageContext';
import BackgroundEffect from './BackgroundEffect';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Hero() {
    const { t } = useLanguage();
    const isMobile = useIsMobile();
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
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: '2rem',
            gap: '4rem'
        }} onMouseMove={handleGlobalMouseMove} onMouseLeave={handleMouseLeaveSection}>

            <BackgroundEffect />

            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr auto 1fr',
                gap: isMobile ? '2rem' : '4rem',
                alignItems: 'center',
                width: '100%',
                justifyItems: isMobile ? 'center' : undefined,
            }}>

                {/* Left Column: Design Stats — hidden on mobile */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ display: isMobile ? 'none' : 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-end', textAlign: 'right' }}
                >
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-color)', marginBottom: '1rem' }}>{t.hero.designerTitle}</h2>
                    <StatItem icon={<Palette size={24} />} title={t.hero.stats.design} subtitle={t.hero.stats.designSub} />
                    <StatItem icon={<Layers size={24} />} title={t.hero.stats.vision} subtitle={t.hero.stats.visionSub} />
                    <StatItem icon={<MousePointer2 size={24} />} title={t.hero.stats.strategy} subtitle={t.hero.stats.strategySub} />
                </motion.div>

                {/* Center Column: Profile Card */}
                {/* Center Column: Profile Card */}
                {/* Center Column: Profile Card */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem', perspective: 1000, width: isMobile ? '100%' : undefined }}>
                    <motion.div
                        onMouseEnter={() => !isMobile && setIsFlipped(true)}
                        onMouseLeave={() => !isMobile && setIsFlipped(false)}
                        style={{
                            rotateX: isMobile ? 0 : rotateX,
                            rotateY: isMobile ? 0 : rotateY,
                            transformStyle: "preserve-3d",
                            WebkitTransformStyle: "preserve-3d",
                            width: isMobile ? 'min(85vw, 320px)' : '450px',
                            height: isMobile ? '440px' : '650px',
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
                                WebkitTransformStyle: "preserve-3d",
                            }}
                        >
                            {/* FRONT FACE */}
                            <div style={{
                                backfaceVisibility: 'hidden',
                                WebkitBackfaceVisibility: 'hidden',
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                borderRadius: '32px',
                                overflow: 'hidden',
                                boxShadow: 'var(--glass-shadow)',
                                border: '1px solid var(--glass-border)',
                                background: 'transparent',
                                transform: 'translateZ(1px)',
                                WebkitMaskImage: '-webkit-radial-gradient(white, black)'
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
                                WebkitBackfaceVisibility: 'hidden',
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                transform: 'rotateY(180deg) translateZ(1px)',
                                borderRadius: '32px',
                                overflow: 'hidden',
                                WebkitMaskImage: '-webkit-radial-gradient(white, black)',
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

                    {/* Button row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{
                            display: 'flex', gap: '0.8rem', alignItems: 'center',
                            width: isMobile ? '100%' : undefined,
                        }}
                    >
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/francisco-stoff/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                                padding: isMobile ? '0.9rem 1rem' : '1.2rem 2.5rem',
                                background: 'var(--button-glass-bg)', backdropFilter: 'blur(10px)',
                                border: '1px solid var(--glass-border)', color: 'var(--button-text)',
                                borderRadius: '50px', fontWeight: 600,
                                fontSize: isMobile ? '0.9rem' : '1.1rem',
                                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                textDecoration: 'none',
                                flex: isMobile ? 1 : undefined,
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
                            <Linkedin size={isMobile ? 18 : 22} />
                            {t.hero.connect}
                        </a>

                        {/* Scroll to Projects */}
                        <button
                            onClick={() => {
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                                padding: isMobile ? '0.9rem 1rem' : '1.2rem 2rem',
                                background: 'transparent', backdropFilter: 'blur(10px)',
                                border: '1px solid var(--glass-border)', color: 'var(--secondary-text)',
                                borderRadius: '50px', fontWeight: 600,
                                fontSize: isMobile ? '0.9rem' : '1.1rem',
                                transition: 'all 0.3s ease', cursor: 'pointer',
                                flex: isMobile ? 1 : undefined,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'var(--button-glass-bg)';
                                e.currentTarget.style.color = 'var(--button-text)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = 'var(--secondary-text)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            {t.hero.viewProjects ?? 'Ver Proyectos'}
                            <ChevronDown size={isMobile ? 16 : 20} />
                        </button>
                    </motion.div>
                </div>

                {/* Right Column: Dev Stats — hidden on mobile */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ display: isMobile ? 'none' : 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', textAlign: 'left' }}
                >
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-color)', marginBottom: '1rem' }}>{t.hero.developerTitle}</h2>
                    <StatItem icon={<Smartphone size={24} />} title={t.hero.stats.mobile} subtitle={t.hero.stats.mobileSub} align="left" />
                    <StatItem icon={<Code2 size={24} />} title={t.hero.stats.web} subtitle={t.hero.stats.webSub} align="left" />
                    <StatItem icon={<Zap size={24} />} title={t.hero.stats.ai} subtitle={t.hero.stats.aiSub} align="left" />
                </motion.div>

            </div>

            {/* Bottom Stats Section - Unified Skills */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="container"
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: isMobile ? '0 1rem' : undefined,
                }}
            >
                <div style={{
                    width: '100%',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '24px',
                    padding: isMobile ? '1.5rem 1.2rem' : '3rem',
                    boxShadow: 'var(--glass-shadow)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem'
                }}>
                    {/* Hard Skills Section */}
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-color)', borderLeft: '3px solid var(--button-glass-hover)', paddingLeft: '0.8rem' }}>
                            {t.hero.bottomStats.hardTitle}
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {t.hero.bottomStats.hardSkills.map((skill: string, idx: number) => (
                                <motion.span
                                    key={`hard-${idx}`}
                                    whileHover={{ 
                                        scale: 1.05, 
                                        y: -2,
                                        background: 'var(--button-glass-hover)'
                                    }}
                                    style={{
                                        background: 'var(--icon-box-bg)',
                                        border: '1px solid var(--glass-border)',
                                        padding: '0.6rem 1.2rem',
                                        borderRadius: '50px',
                                        color: 'var(--text-color)',
                                        fontWeight: 500,
                                        fontSize: '0.95rem',
                                        cursor: 'default',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                                        transition: 'background 0.3s ease'
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    <hr style={{ width: '100%', border: 'none', borderTop: '1px solid var(--glass-border)', margin: '0.5rem 0' }} />

                    {/* Soft Skills Section */}
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-color)', borderLeft: '3px solid var(--button-glass-hover)', paddingLeft: '0.8rem' }}>
                            {t.hero.bottomStats.softTitle}
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {t.hero.bottomStats.softSkills.map((skill: string, idx: number) => (
                                <motion.span
                                    key={`soft-${idx}`}
                                    whileHover={{ 
                                        scale: 1.05, 
                                        y: -2,
                                        background: 'var(--button-glass-hover)'
                                    }}
                                    style={{
                                        background: 'var(--icon-box-bg)',
                                        border: '1px solid var(--glass-border)',
                                        padding: '0.6rem 1.2rem',
                                        borderRadius: '50px',
                                        color: 'var(--text-color)',
                                        fontWeight: 500,
                                        fontSize: '0.95rem',
                                        cursor: 'default',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                                        transition: 'background 0.3s ease'
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

        </section>
    );
}

function StatItem({ icon, title, subtitle, align = 'right' }: { icon: any, title: string, subtitle: string, align?: 'left' | 'right' }) {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                x: align === 'left' ? 5 : -5
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexDirection: align === 'left' ? 'row' : 'row-reverse',
                cursor: 'pointer'
            }}
        >
            <motion.div
                whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    backgroundColor: 'var(--button-glass-hover)'
                }}
                transition={{ duration: 0.5 }}
                style={{
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
                }}
            >
                {icon}
            </motion.div>
            <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--secondary-text)' }}>{subtitle}</p>
            </div>
        </motion.div>
    )
}
