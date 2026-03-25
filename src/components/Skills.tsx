import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface Skill {
    name: string;
    level: number;
    desc: string;
}

export default function Skills() {
    const { t } = useLanguage();
    const s = t.skills;
    const [activeTab, setActiveTab] = useState<string>(s.tabs[0].id);
    const prevTab = useRef<string>(s.tabs[0].id);

    const direction = s.tabs.findIndex(tab => tab.id === activeTab) >
        s.tabs.findIndex(tab => tab.id === prevTab.current) ? 1 : -1;

    const currentSkills: Skill[] = (s.categories as Record<string, Skill[]>)[activeTab] ?? [];

    const handleTabChange = (id: string) => {
        prevTab.current = activeTab;
        setActiveTab(id);
    };

    const accentColors: Record<string, string> = {
        design: '#a78bfa',
        dev: '#34d399',
        ai: '#f472b6',
        tools: '#60a5fa',
    };
    const accent = accentColors[activeTab] ?? '#a78bfa';

    return (
        <section id="skills" style={{
            padding: '2rem 2rem 4rem',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Ambient glow */}
            <div style={{
                position: 'absolute', top: '20%', left: '50%',
                transform: 'translateX(-50%)',
                width: '800px', height: '400px',
                background: `radial-gradient(ellipse at center, ${accent}18 0%, transparent 70%)`,
                pointerEvents: 'none',
                transition: 'background 0.8s ease',
                zIndex: 0,
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '960px', margin: '0 auto' }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '3.5rem' }}
                >
                    <p style={{
                        fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.18em',
                        color: accent, textTransform: 'uppercase', marginBottom: '1rem',
                        transition: 'color 0.4s ease',
                    }}>Stack</p>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        fontWeight: 800, color: 'var(--text-color)',
                        marginBottom: '1.2rem', lineHeight: 1.15,
                    }}>
                        {s.sectionTitle}
                    </h2>
                    <p style={{
                        fontSize: '1.05rem', color: 'var(--secondary-text)',
                        maxWidth: '600px', margin: '0 auto', lineHeight: 1.7,
                    }}>
                        {s.sectionSubtitle}
                    </p>
                </motion.div>

                {/* Tab bar */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                        display: 'flex', justifyContent: 'center',
                        gap: '0.5rem', marginBottom: '3rem',
                        flexWrap: 'wrap',
                    }}
                >
                    {s.tabs.map((tab) => {
                        const isActive = tab.id === activeTab;
                        const tabAccent = accentColors[tab.id];
                        return (
                            <motion.button
                                key={tab.id}
                                onClick={() => handleTabChange(tab.id)}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    padding: '0.7rem 1.6rem',
                                    borderRadius: '50px',
                                    border: isActive
                                        ? `1.5px solid ${tabAccent}`
                                        : '1.5px solid var(--glass-border)',
                                    background: isActive
                                        ? `${tabAccent}20`
                                        : 'var(--glass-bg)',
                                    backdropFilter: 'blur(12px)',
                                    color: isActive ? tabAccent : 'var(--secondary-text)',
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                                    transition: 'all 0.3s ease',
                                    boxShadow: isActive ? `0 0 20px ${tabAccent}30` : 'none',
                                }}
                            >
                                <span>{tab.icon}</span>
                                {tab.label}
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Skill cards */}
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={activeTab}
                        custom={direction}
                        initial={{ opacity: 0, x: direction * 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction * -40 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '1.25rem',
                        }}
                    >
                        {currentSkills.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
                                whileHover={{ y: -4, boxShadow: `0 16px 40px ${accent}22` }}
                                style={{
                                    background: 'var(--glass-bg)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '20px',
                                    padding: '1.6rem 1.8rem',
                                    transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                                    cursor: 'default',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = `${accent}60`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                                }}
                            >
                                {/* Skill header */}
                                <div style={{
                                    display: 'flex', justifyContent: 'space-between',
                                    alignItems: 'flex-start', marginBottom: '0.5rem',
                                }}>
                                    <span style={{
                                        fontWeight: 700, fontSize: '0.95rem',
                                        color: 'var(--text-color)', lineHeight: 1.3,
                                    }}>
                                        {skill.name}
                                    </span>
                                    <span style={{
                                        fontSize: '0.8rem', fontWeight: 700,
                                        color: accent, minWidth: '38px', textAlign: 'right',
                                        transition: 'color 0.4s ease',
                                    }}>
                                        {skill.level}%
                                    </span>
                                </div>

                                {/* Description */}
                                <p style={{
                                    fontSize: '0.82rem', color: 'var(--secondary-text)',
                                    marginBottom: '1.1rem', lineHeight: 1.5,
                                }}>
                                    {skill.desc}
                                </p>

                                {/* Progress bar */}
                                <div style={{
                                    height: '5px',
                                    background: 'var(--glass-border)',
                                    borderRadius: '99px',
                                    overflow: 'hidden',
                                }}>
                                    <motion.div
                                        initial={{ width: '0%' }}
                                        animate={{ width: `${skill.level}%` }}
                                        transition={{ duration: 0.9, delay: i * 0.06 + 0.2, ease: 'easeOut' }}
                                        style={{
                                            height: '100%',
                                            borderRadius: '99px',
                                            background: `linear-gradient(90deg, ${accent}99, ${accent})`,
                                            boxShadow: `0 0 8px ${accent}80`,
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}
