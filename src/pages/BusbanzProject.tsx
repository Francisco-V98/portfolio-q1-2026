import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Target, Search, Component, LayoutTemplate, Layers, Smartphone, Route, Settings2, ShieldCheck, ArrowRight, Gamepad2, User, Focus, Repeat, Sparkles, Zap, UserCheck, Timer, Clapperboard, SunMoon, EyeOff, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import SmoothScroll from '../components/SmoothScroll';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import BackgroundEffect from '../components/BackgroundEffect';
import orgPaginasImg from '../assets/projects/busbanz/organizacion-paginas.png';
import orgPantallasImg from '../assets/projects/busbanz/organizacion-pantallas.png';
import orgDemosImg from '../assets/projects/busbanz/organizacion-demos.png';
import demoVideo from '../assets/projects/busbanz/flujo-demo.mov';
import visualDesignImg from '../assets/projects/busbanz/busbanz-login-dark-light.png';
import repExperienceImg from '../assets/projects/busbanz/route-holder-screens.png';
import driverExperienceImg from '../assets/projects/busbanz/driver-screens.png';

export default function BusbanzProject() {
    const { t } = useLanguage();
    const bp = t.busbanzProject;

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
    };

    return (
        <SmoothScroll>
            {/* Top Navigation */}
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: '2rem',
                zIndex: 100,
                display: 'flex',
                justifyContent: 'space-between',
                pointerEvents: 'none'
            }}>
                <Link to="/" style={{ pointerEvents: 'auto', textDecoration: 'none' }}>
                    <motion.div
                        whileHover={{ scale: 1.05, x: -5 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'var(--glass-bg)',
                            backdropFilter: 'blur(20px)',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '50px',
                            border: '1px solid var(--glass-border)',
                            color: 'var(--text-color)',
                            fontWeight: 600,
                            boxShadow: 'var(--glass-shadow)',
                            cursor: 'pointer'
                        }}
                    >
                        <ArrowLeft size={20} />
                        {bp.back}
                    </motion.div>
                </Link>
            </nav>

            <main style={{ paddingBottom: '8rem', color: 'var(--text-color)' }}>
                {/* Hero Header */}
                <section style={{
                    minHeight: '80vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '8rem 2rem 4rem 2rem',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <BackgroundEffect />
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariants}
                        style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}
                    >
                        <div style={{
                            background: 'rgba(250, 204, 21, 0.15)', // Yellow tint
                            color: '#Facc15',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '50px',
                            fontWeight: 700,
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            fontSize: '0.9rem',
                            border: '1px solid rgba(250, 204, 21, 0.3)'
                        }}>
                            {bp.caseStudy}
                        </div>
                        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-2px' }}>
                            {bp.title}
                        </h1>
                        <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'var(--secondary-text)', fontWeight: 500, maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
                            {bp.subtitle}
                        </p>

                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.8rem',
                            justifyContent: 'center',
                            marginTop: '1.5rem'
                        }}>
                            {bp.tags.map((tag: string, index: number) => (
                                <motion.span
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    style={{
                                        background: 'var(--glass-bg)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid var(--glass-border)',
                                        padding: '0.6rem 1.2rem',
                                        borderRadius: '50px',
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                        color: 'var(--text-color)',
                                        boxShadow: 'var(--glass-shadow)'
                                    }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </section>

                <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

                    {/* Problem & Research Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', margin: '4rem 0 8rem 0' }}>
                        <InfoCard
                            icon={<Target size={28} color="#F87171" />}
                            title={bp.problemTitle}
                            text={bp.problemText}
                        />
                        <InfoCard
                            icon={<Search size={28} color="#60A5FA" />}
                            title={bp.researchTitle}
                            text={bp.researchText}
                        />
                    </div>

                    {/* Architecture Section */}
                    <SectionBlock title={bp.architectureTitle} subtitle={bp.architectureSubtitle}>
                        <div style={{
                            background: 'var(--glass-bg)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '24px',
                            padding: '3rem',
                            marginTop: '3rem',
                            boxShadow: 'var(--glass-shadow)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '3rem'
                        }}>
                            {/* 3 Step Flow */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr auto 1fr auto 1fr',
                                gap: '1rem',
                                alignItems: 'center'
                            }} className="architecture-grid">
                                <FlowCard title="Componentes" text="Elementos base reutilizables: botones, inputs, cards, etc. Con variables." icon={<Component size={28} />} />

                                <div className="flow-arrow">
                                    <ArrowRight color="var(--button-glass-hover)" />
                                </div>

                                <FlowCard title="Screens" text="Pantallas completas construidas por flujos de usuario y funcionalidades." icon={<LayoutTemplate size={28} />} />

                                <div className="flow-arrow">
                                    <ArrowRight color="var(--button-glass-hover)" />
                                </div>

                                <FlowCard title="Demos" text="Prototipos interactivos que simulan la experiencia real por tipo de usuario." icon={<Smartphone size={28} />} />
                            </div>

                            {/* Wide Bottom Block */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                whileHover={{ scale: 1.01, boxShadow: '0 20px 40px rgba(0,0,0,0.2)', y: -2 }}
                                style={{
                                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))',
                                    border: '1px solid rgba(168, 85, 247, 0.3)',
                                    borderRadius: '16px',
                                    padding: '2rem',
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    cursor: 'default'
                                }}
                            >
                                <Settings2 size={28} color="#A855F7" />
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-color)' }}>Actualización Automática</h4>
                                <p style={{ fontSize: '1rem', color: 'var(--secondary-text)', maxWidth: '600px' }}>
                                    Cambios en componentes reflejan actualizaciones en todas las screens y, por ende, en todos los demos correspondientes.
                                </p>
                            </motion.div>
                        </div>

                        <style>{`
                            @media (max-width: 1024px) {
                                .architecture-grid { 
                                    grid-template-columns: 1fr !important;
                                    gap: 2rem !important;
                                }
                                .flow-arrow { display: none !important; }
                            }
                        `}</style>
                    </SectionBlock>

                    {/* Figma Organization Section (Workspace Simulation) */}
                    <SectionBlock title={bp.figmaTitle} subtitle={bp.figmaSubtitle}>
                        <div style={{
                            background: 'var(--glass-bg)',
                            backdropFilter: 'blur(40px)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            marginTop: '3rem',
                            display: 'flex',
                            minHeight: '550px',
                            boxShadow: '0 40px 100px rgba(0,0,0,0.3)',
                            width: '100%'
                        }} className="figma-workspace">

                            {/* Left Side: Mock Sidebar */}
                            <div style={{
                                width: '280px',
                                background: 'rgba(20, 20, 20, 0.4)',
                                borderRight: '1px solid var(--glass-border)',
                                padding: '2rem 1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem'
                            }} className="figma-sidebar">
                                <div style={{ color: 'var(--secondary-text)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', opacity: 0.6 }}>
                                    Layers & Pages
                                </div>
                                <div style={{
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    background: '#121212',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                                }}>
                                    <LightboxImage src={orgPaginasImg} alt="Figma Pages Structure" />
                                </div>
                                <div style={{ marginTop: 'auto', fontSize: '0.8rem', color: 'var(--secondary-text)', fontStyle: 'italic', opacity: 0.5 }}>
                                    Figma Workspace v2.4
                                </div>
                            </div>

                            {/* Main Area: Detailed Insights */}
                            <div style={{ flex: 1, padding: '4rem' }} className="figma-main">
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="figma-grid">
                                    {/* Column 1 */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                            <div style={{ background: 'rgba(167, 139, 250, 0.1)', padding: '0.6rem', borderRadius: '12px' }}>
                                                <Layers size={20} color="#A78BFA" />
                                            </div>
                                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>{bp.figmaStructureTitle}</h3>
                                        </div>
                                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                            {bp.figmaStructureItems.map((item: string, i: number) => (
                                                <motion.li 
                                                    key={i} 
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.1 }}
                                                    whileHover={{ x: 5, color: '#A78BFA' }}
                                                    style={{ fontSize: '0.95rem', color: 'var(--secondary-text)', display: 'flex', gap: '0.8rem', alignItems: 'center', cursor: 'default' }}
                                                >
                                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#A78BFA' }}></span>
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Column 2 */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                            <div style={{ background: 'rgba(52, 211, 153, 0.1)', padding: '0.6rem', borderRadius: '12px' }}>
                                                <Target size={20} color="#34D399" />
                                            </div>
                                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>{bp.figmaCanvasTitle}</h3>
                                        </div>
                                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                            {bp.figmaCanvasItems.map((item: string, i: number) => (
                                                <motion.li 
                                                    key={i} 
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.1 }}
                                                    whileHover={{ x: 5, color: '#34D399' }}
                                                    style={{ fontSize: '0.95rem', color: 'var(--secondary-text)', display: 'flex', gap: '0.8rem', alignItems: 'center', cursor: 'default' }}
                                                >
                                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34D399' }}></span>
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Main Canvas Image (Horizontal) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    style={{
                                        marginTop: '3.5rem',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        background: '#121212',
                                        boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    <LightboxImage src={orgPantallasImg} alt="Organización del Canvas" />
                                </motion.div>

                                {/* Bottom Decorative Note */}
                                <div style={{
                                    marginTop: '4rem',
                                    paddingTop: '2rem',
                                    borderTop: '1px solid var(--glass-border)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fb7185' }}></div>
                                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fbbf24' }}></div>
                                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#4ade80' }}></div>
                                    </div>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--secondary-text)', opacity: 0.6 }}>{bp.figmaWorkspaceNote}</span>
                                </div>
                            </div>
                        </div>

                        <style>{`
                            @media (max-width: 1100px) {
                                .figma-workspace { flex-direction: column !important; min-height: auto !important; }
                                .figma-sidebar { width: 100% !important; border-right: none !important; border-bottom: 1px solid var(--glass-border) !important; }
                                .figma-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
                                .figma-main { padding: 2rem !important; }
                                .demos-card { grid-template-columns: 1fr !important; gap: 3rem !important; }
                            }
                        `}</style>
                    </SectionBlock>

                    {/* Demos Structure Card */}
                    <div style={{
                        background: 'var(--glass-bg)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '32px',
                        padding: '3.5rem',
                        marginTop: '3rem',
                        display: 'grid',
                        gridTemplateColumns: 'minmax(350px, 1fr) 1.2fr',
                        gap: '4rem',
                        alignItems: 'center',
                        boxShadow: 'var(--glass-shadow)',
                        width: '100%'
                    }} className="demos-card">

                        {/* Left Side: List */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <Gamepad2 size={32} color="var(--text-primary)" />
                                    <h3 style={{ fontSize: '1.8rem', fontWeight: 700 }}>{bp.figmaDemosTitle}</h3>
                                </div>
                                <p style={{ color: 'var(--secondary-text)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                                    {bp.figmaDemosSubtitle}
                                </p>
                            </div>

                            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                {[
                                    { icon: <User size={22} color="#60a5fa" />, ...bp.figmaDemosItems[0] },
                                    { icon: <Focus size={22} color="#ef4444" />, ...bp.figmaDemosItems[1] },
                                    { icon: <Repeat size={22} color="#818cf8" />, ...bp.figmaDemosItems[2] },
                                    { icon: <Smartphone size={22} color="#f97316" />, ...bp.figmaDemosItems[3] },
                                    { icon: <Sparkles size={22} color="#facc15" />, ...bp.figmaDemosItems[4] }
                                ].map((item: any, i: number) => (
                                    <motion.li 
                                        key={i} 
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ x: 10 }}
                                        style={{ 
                                            display: 'flex', 
                                            gap: '1rem', 
                                            alignItems: 'flex-start', 
                                            paddingBottom: '1.2rem', 
                                            borderBottom: i !== 4 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                                            cursor: 'default'
                                        }}
                                    >
                                        <div style={{ opacity: 0.9, marginTop: '2px' }}>{item.icon}</div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                                            <strong style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>{item.title}</strong>
                                            <span style={{ color: 'var(--secondary-text)', fontSize: '0.95rem' }}>{item.text}</span>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Side: Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{
                                borderRadius: '24px',
                                border: '1px solid rgba(255,255,255,0.08)',
                                overflow: 'hidden',
                                background: '#121212',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <LightboxImage src={orgDemosImg} alt="Estructura de Demos" />
                        </motion.div>
                    </div>

                    {/* Video Demo Section */}
                    <div style={{ marginTop: '6rem' }} />
                    <SectionBlock title={<div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}><Clapperboard size={36} /> {bp.demoActionTitle}</div>} subtitle="">
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1.1fr',
                            gap: '5rem',
                            marginTop: '4rem',
                            alignItems: 'stretch',
                            width: '100%'
                        }} className="video-section">

                            {/* Video Container */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                style={{
                                    background: '#0a0a0c',
                                    borderRadius: '32px',
                                    padding: '2rem',
                                    border: '1px solid var(--glass-border)',
                                    boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                    minHeight: '600px'
                                }}
                            >
                                <video
                                    src={demoVideo}
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        maxHeight: '550px',
                                        objectFit: 'contain',
                                        borderRadius: '32px'
                                    }}
                                />
                            </motion.div>

                            {/* Text Content */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                                        {bp.demoExperienceTitle}
                                    </h3>
                                    <p style={{ color: 'var(--secondary-text)', fontSize: '1.15rem', lineHeight: 1.7 }}>
                                        {bp.demoExperienceText}
                                    </p>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                                    {[
                                        { icon: <Zap size={22} color="#3b82f6" />, ...bp.demoFeatures[0] },
                                        { icon: <Smartphone size={22} color="#3b82f6" />, ...bp.demoFeatures[1] },
                                        { icon: <UserCheck size={22} color="#3b82f6" />, ...bp.demoFeatures[2] },
                                        { icon: <Timer size={22} color="#3b82f6" />, ...bp.demoFeatures[3] }
                                    ].map((feature: any, i: number) => (
                                        <motion.div 
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            whileHover={{ x: -10, background: 'rgba(255, 255, 255, 0.05)' }}
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.02)',
                                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                                padding: '1.5rem',
                                                borderRadius: '20px',
                                                display: 'flex',
                                                gap: '1.5rem',
                                                alignItems: 'center',
                                                cursor: 'default'
                                            }}
                                        >
                                            <div style={{
                                                background: 'rgba(59, 130, 246, 0.1)',
                                                border: '1px solid rgba(59, 130, 246, 0.2)',
                                                padding: '0.8rem',
                                                borderRadius: '14px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2rem' }}>{feature.title}</h4>
                                                <p style={{ color: 'var(--secondary-text)', fontSize: '0.95rem' }}>{feature.text}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <style>{`
                            @media (max-width: 1100px) {
                                .video-section { grid-template-columns: 1fr !important; gap: 4rem !important; }
                            }
                        `}</style>
                    </SectionBlock>

                    {/* Visual Design & Dual Theme */}
                    <SectionBlock title={bp.visualDesignTitle} subtitle={bp.visualDesignSubtitle}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1.4fr 1fr',
                            gap: '4rem',
                            marginTop: '3rem',
                            alignItems: 'center'
                        }} className="visual-design-grid">
                            
                            {/* Left: Comparison Image */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                style={{
                                    borderRadius: '32px',
                                    border: '1px solid var(--glass-border)',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--glass-shadow)',
                                    background: '#121212',
                                    position: 'relative'
                                }}
                            >
                                <LightboxImage src={visualDesignImg} alt="Dual Theme System" />
                                {/* Glass tag */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '1.5rem',
                                    left: '1.5rem',
                                    background: 'rgba(0,0,0,0.5)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '0.6rem 1.2rem',
                                    borderRadius: '100px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    fontSize: '0.85rem',
                                    color: 'white',
                                    fontWeight: 600
                                }}>
                                    {bp.visualDesignTag}
                                </div>
                            </motion.div>

                            {/* Right: Feature Cards */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {[
                                    { icon: <ShieldCheck size={22} color="#60a5fa" />, ...bp.visualDesignFeatures[0] },
                                    { icon: <SunMoon size={22} color="#facc15" />, ...bp.visualDesignFeatures[1] },
                                    { icon: <EyeOff size={22} color="#818cf8" />, ...bp.visualDesignFeatures[2] },
                                    { icon: <Zap size={22} color="#f97316" />, ...bp.visualDesignFeatures[3] }
                                ].map((feature: any, i: number) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        style={{
                                            background: 'var(--glass-bg)',
                                            backdropFilter: 'blur(20px)',
                                            border: '1px solid var(--glass-border)',
                                            borderRadius: '24px',
                                            padding: '2rem',
                                            display: 'flex',
                                            gap: '1.5rem',
                                            alignItems: 'center',
                                            boxShadow: 'var(--glass-shadow)',
                                            transition: 'transform 0.3s ease'
                                        }}
                                        whileHover={{ transform: 'translateX(10px)' }}
                                    >
                                        <div style={{
                                            padding: '0.8rem',
                                            borderRadius: '16px',
                                            background: 'rgba(255,255,255,0.03)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>{feature.title}</h4>
                                            <p style={{ color: 'var(--secondary-text)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                                                {feature.text}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <style>{`
                            @media (max-width: 1024px) {
                                .visual-design-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
                            }
                        `}</style>
                    </SectionBlock>

                    {/* Experiences Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', margin: '8rem 0' }}>
                        <ListCard
                            icon={<ShieldCheck size={32} color="#FBBF24" />}
                            title={bp.repExperienceTitle}
                            subtitle={bp.repExperienceSubtitle}
                            image={repExperienceImg}
                            items={[
                                "Tracking en tiempo real con ubicación precisa",
                                "Notificaciones inteligentes de llegada y salida",
                                "Chat directo con conductor y monitor",
                                "Perfiles completos del personal de transporte",
                                "Historial detallado de viajes y asistencia",
                                "Alertas de emergencia y retrasos"
                            ]}
                        />
                        <ListCard
                            icon={<Route size={32} color="#4ADE80" />}
                            title={bp.driverExperienceTitle}
                            subtitle={bp.driverExperienceSubtitle}
                            image={driverExperienceImg}
                            items={[
                                "Rutas optimizadas con navegación inteligente",
                                "Listas digitales de estudiantes por recoger",
                                "Check-in/Check-out rápido con códigos QR",
                                "Info de contacto de quién recibe a cada estudiante",
                                "Gestión multi-ruta desde una sola app",
                                "Reportes automáticos de asistencia y tiempos"
                            ]}
                        />
                    </div>

                    {/* Impact */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUpVariants}
                        whileHover={{ y: -5, boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}
                        style={{
                            background: 'linear-gradient(145deg, var(--glass-bg), rgba(250, 204, 21, 0.05))',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '32px',
                            padding: '4rem',
                            textAlign: 'center',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                            marginBottom: '4rem',
                            cursor: 'default'
                        }}
                    >
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>{bp.impactTitle}</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--secondary-text)', maxWidth: '800px', margin: '0 auto' }}>
                            {bp.impactText}
                        </p>
                    </motion.div>

                </div>
            </main>
        </SmoothScroll>
    );
}

function SectionBlock({ title, subtitle, children }: { title: React.ReactNode, subtitle: string, children: React.ReactNode }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-color)' }}>{title}</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--secondary-text)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>{subtitle}</p>
            <div style={{ width: '100%', textAlign: 'left' }}>
                {children}
            </div>
        </motion.section>
    )
}

function FlowCard({ title, text, icon }: { title: string, text: string, icon: any }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
                background: 'var(--icon-box-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '16px',
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '1rem',
                cursor: 'default'
            }}
        >
            <motion.div 
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                style={{ color: 'var(--button-glass-hover)' }}
            >
                {icon}
            </motion.div>
            <h4 style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-color)' }}>{title}</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--secondary-text)', lineHeight: 1.5 }}>{text}</p>
        </motion.div>
    )
}

function InfoCard({ icon, title, text }: { icon: any, title: string, text: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '24px',
                padding: '3rem 2rem',
                boxShadow: 'var(--glass-shadow)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                cursor: 'default'
            }}
        >
            <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'var(--icon-box-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)' }}
            >
                {icon}
            </motion.div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{title}</h3>
            <p style={{ color: 'var(--secondary-text)', lineHeight: 1.7 }}>{text}</p>
        </motion.div>
    )
}


function ListCard({ title, subtitle, items, icon, image }: { title: string, subtitle?: string, items: string[], icon: any, image?: string }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 30px 60px rgba(0,0,0,0.4)', borderColor: 'rgba(255,255,255,0.15)' }}
            transition={{ duration: 0.4 }}
            style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '24px',
                padding: '3rem',
                boxShadow: 'var(--glass-shadow)',
                width: '100%',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: subtitle ? '1rem' : '2rem' }}>
                <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    style={{ background: 'var(--icon-box-bg)', padding: '1rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}
                >
                    {icon}
                </motion.div>
                <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{title}</h3>
                    {subtitle && <p style={{ color: 'var(--secondary-text)', marginTop: '0.4rem' }}>{subtitle}</p>}
                </div>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '1.5rem',
                alignItems: 'center'
            }}>
                <ul style={{
                    listStyleType: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    flex: '1 1 300px'
                }}>
                    {items.map((item, idx) => (
                        <motion.li 
                            key={idx} 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ x: 10, color: 'var(--text-color)' }}
                            style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', cursor: 'default' }}
                        >
                            <span style={{ color: 'var(--button-glass-hover)', marginTop: '2px' }}>✦</span>
                            <span style={{ color: 'var(--secondary-text)', transition: 'color 0.2s ease' }}>{item}</span>
                        </motion.li>
                    ))}
                </ul>

                {image && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '1px solid var(--glass-border)',
                            background: 'rgba(0,0,0,0.2)',
                            maxWidth: '300px',
                            flex: '0 0 auto',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}
                    >
                        <LightboxImage src={image} alt={title} />
                    </motion.div>
                )}
            </div>
        </motion.div>
    )
}

function LightboxImage({ src, alt, style }: { src: string, alt: string, style?: any }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <>
            <motion.div 
                whileHover={{ scale: 1.01 }}
                style={{ cursor: 'zoom-in', width: '100%', height: '100%' }} 
                onClick={() => setIsOpen(true)}
            >
                <img src={src} alt={alt} style={{ ...style, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </motion.div>

            {createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0,0,0,0.85)',
                                backdropFilter: 'blur(10px)',
                            zIndex: 9999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Close button */}
                        <motion.button
                            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                position: 'fixed',
                                top: '2rem',
                                right: '2rem',
                                background: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: 'white',
                                width: '45px',
                                height: '45px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                zIndex: 10000,
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <X size={20} />
                        </motion.button>

                        <div 
                            style={{
                                padding: '4rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100vh',
                                width: '100vw',
                                pointerEvents: 'none' // Let clicks pass to the modal background
                            }}
                        >
                            <motion.img
                                layout
                                src={src}
                                alt={alt}
                                onClick={(e) => { 
                                    e.stopPropagation(); 
                                    setIsOpen(false);
                                }}
                                style={{
                                    pointerEvents: 'auto', // Re-enable clicks on image
                                    cursor: 'zoom-out',
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    borderRadius: '16px',
                                    boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                                    display: 'block'
                                }}
                            />
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>,
                document.body
            )}
        </>
    )
}
