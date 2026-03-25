import { motion } from 'framer-motion';
import { Palette, Figma, PenTool, LayoutTemplate, Smartphone, Code2, Terminal, MousePointer2, Layers, Box, Sparkles, Search, Target, ArrowRightLeft, CheckCircle, Eye, GitBranch, Github, Brain, Send, AppWindow } from 'lucide-react';
import StatsOrbit from './StatsOrbit';
import BackgroundEffect from './BackgroundEffect';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/useIsMobile';

export default function About() {
    const { t } = useLanguage();
    const isMobile = useIsMobile();

    // We recreate the statsData here to pass it to StatsOrbit
    const statsData = [
        // UX/UI & Product (Heavy Focus)
        { icon: <Palette size={20} />, label: "Product Design" },
        { icon: <Figma size={20} />, label: "Figma" },
        { icon: <PenTool size={20} />, label: "Wireframing" },
        { icon: <LayoutTemplate size={20} />, label: "UI Systems" },
        { icon: <Layers size={20} />, label: "Prototyping" },
        { icon: <MousePointer2 size={20} />, label: "Interaction Design" },
        { icon: <Search size={20} />, label: "UX Research" },
        { icon: <Target size={20} />, label: "Product Strategy" },
        { icon: <ArrowRightLeft size={20} />, label: "User Flows" },
        { icon: <CheckCircle size={20} />, label: "Usability Testing" },
        { icon: <Eye size={20} />, label: "Accessibility" },
        
        // Mobile Dev & Tools
        { icon: <Smartphone size={20} />, label: "Flutter" },
        { icon: <AppWindow size={20} />, label: "React Native" },
        { icon: <Box size={20} />, label: "Docker" },
        { icon: <Send size={20} />, label: "Postman" },
        { icon: <GitBranch size={20} />, label: "Git" },
        { icon: <Github size={20} />, label: "GitHub" },
        { icon: <Code2 size={20} />, label: "Clean Code" },

        // AI (A few)
        { icon: <Brain size={20} />, label: "AI Integration" },
        { icon: <Terminal size={20} />, label: "Prompt Engineering" },
        { icon: <Sparkles size={20} />, label: "LLMs / ChatGPT" },
    ];

    return (
        <section id="about" style={{
            minHeight: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: isMobile ? '5rem 1.2rem 3rem' : '10rem 2rem 4rem 2rem'
        }}>
            <BackgroundEffect />

            <div className="container" style={{
                position: 'relative',
                zIndex: 10,
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
                gap: isMobile ? '2rem' : '4rem',
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
                    <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                        {t.aboutSection.title}
                    </h2>
                    
                    <div style={{
                        background: 'var(--glass-bg)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '24px',
                        padding: isMobile ? '1.5rem' : '2.5rem',
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

                {/* Right Column: StatsOrbit — below text on mobile */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        position: 'relative',
                        height: isMobile ? 'auto' : '400px',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: isMobile ? undefined : 'scale(0.8)'
                    }}
                >
                    {isMobile ? (
                        /* Mobile: simple chip grid instead of orbit */
                        <div style={{
                            display: 'flex', flexWrap: 'wrap', gap: '0.6rem',
                            justifyContent: 'center', padding: '1rem 0',
                        }}>
                            {statsData.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.04 }}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '0.4rem',
                                        background: 'var(--glass-bg)', backdropFilter: 'blur(10px)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: '50px', padding: '0.4rem 0.9rem',
                                        fontSize: '0.82rem', color: 'var(--secondary-text)',
                                    }}
                                >
                                    <span style={{ color: 'var(--button-glass-hover)', display: 'flex' }}>{stat.icon}</span>
                                    {stat.label}
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <StatsOrbit stats={statsData} radius={250} />
                    )}
                </motion.div>
            </div>
        </section>
    );
}
