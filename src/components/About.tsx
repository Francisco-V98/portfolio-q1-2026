import { motion } from 'framer-motion';
import { Palette, Figma, PenTool, LayoutTemplate, Smartphone, Code2, Terminal, Globe, Zap, Database, Cpu, MousePointer2, Layers, Hash, Box, Sparkles } from 'lucide-react';
import StatsOrbit from './StatsOrbit';
import BackgroundEffect from './BackgroundEffect';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    // We recreate the statsData here to pass it to StatsOrbit
    const statsData = [
        { icon: <Palette size={20} />, label: "Product Design" },
        { icon: <Figma size={20} />, label: "Figma" },
        { icon: <PenTool size={20} />, label: "Prototyping" },
        { icon: <LayoutTemplate size={20} />, label: "UI Systems" },
        { icon: <Smartphone size={20} />, label: "Mobile Dev" },
        { icon: <Code2 size={20} />, label: "React" },
        { icon: <Terminal size={20} />, label: "TypeScript" },
        { icon: <Globe size={20} />, label: "Web" },
        { icon: <Zap size={20} />, label: "AI Strategy" },
        { icon: <Database size={20} />, label: "Node.js" },
        { icon: <Cpu size={20} />, label: "Algorithms" },
        { icon: <MousePointer2 size={20} />, label: "UX Research" },
        { icon: <Layers size={20} />, label: "Architecture" },
        { icon: <Hash size={20} />, label: "Clean Code" },
        { icon: <Box size={20} />, label: "3D Modeling" },
        { icon: <Sparkles size={20} />, label: "Motion" },
    ];

    return (
        <section id="about" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: '4rem 2rem'
        }}>
            <BackgroundEffect />

            <div className="container" style={{
                position: 'relative',
                zIndex: 10,
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
                gap: '4rem',
                alignItems: 'center',
                width: '100%',
                margin: '0 auto'
            }}>
                {/* Left Column: Copy */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        color: 'var(--text-color)'
                    }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                        {t.aboutSection.title}
                    </h2>
                    
                    <div style={{
                        background: 'var(--glass-bg)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '24px',
                        padding: '2.5rem',
                        boxShadow: 'var(--glass-shadow)',
                        fontSize: '1.05rem',
                        lineHeight: 1.7,
                        color: 'var(--secondary-text)'
                    }}>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--text-color)', fontWeight: 600, fontSize: '1.15rem' }}>
                            {t.aboutSection.greeting}
                        </p>
                        
                        <p style={{ marginBottom: '1.5rem' }}>
                            {t.aboutSection.intro}
                        </p>
                        
                        <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                                <span style={{ color: 'var(--button-glass-hover)', marginTop: '2px' }}>✦</span>
                                <span><strong style={{ color: 'var(--text-color)' }}>{t.aboutSection.bullet0Bold}</strong>{t.aboutSection.bullet0Text}</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                                <span style={{ color: 'var(--button-glass-hover)', marginTop: '2px' }}>✦</span>
                                <span><strong style={{ color: 'var(--text-color)' }}>{t.aboutSection.bullet1Bold}</strong>{t.aboutSection.bullet1Text}</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                                <span style={{ color: 'var(--button-glass-hover)', marginTop: '2px' }}>✦</span>
                                <span><strong style={{ color: 'var(--text-color)' }}>{t.aboutSection.bullet2Bold}</strong>{t.aboutSection.bullet2Text}</span>
                            </li>
                        </ul>

                        <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-color)', marginBottom: '1.2rem' }}>{t.aboutSection.skillsTitle}</h3>
                        
                        <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                                <span style={{ color: 'var(--button-glass-hover)', marginTop: '2px' }}>✦</span>
                                <span><strong style={{ color: 'var(--text-color)' }}>{t.aboutSection.skill1Bold}</strong>{t.aboutSection.skill1Text}</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                                <span style={{ color: 'var(--button-glass-hover)', marginTop: '2px' }}>✦</span>
                                <span><strong style={{ color: 'var(--text-color)' }}>{t.aboutSection.skill2Bold}</strong>{t.aboutSection.skill2Text}</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                                <span style={{ color: 'var(--button-glass-hover)', marginTop: '2px' }}>✦</span>
                                <span><strong style={{ color: 'var(--text-color)' }}>{t.aboutSection.skill3Bold}</strong>{t.aboutSection.skill3Text}</span>
                            </li>
                        </ul>

                        <p style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--text-color)' }}>
                            <strong style={{ fontStyle: 'normal' }}>{t.aboutSection.goalBold}</strong>{t.aboutSection.goalText}
                        </p>
                    </div>
                </motion.div>

                {/* Right Column: StatsOrbit */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        position: 'relative',
                        height: '400px', // Smaller height
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: 'scale(0.8)' // Quick visual scale down for orbit if radius isn't enough
                    }}
                >
                    <StatsOrbit stats={statsData} radius={250} />
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{__html: `
                @media (max-width: 900px) {
                    #about .container {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}} />
        </section>
    );
}
