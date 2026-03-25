import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Sparkles, Rocket, Repeat2, Users, BookOpen, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/useIsMobile';

interface ProcessStep { num: string; icon: string; title: string; desc: string; }
interface Pillar { icon: string; title: string; desc: string; tags: string[]; }
interface GrowthCard { icon: string; title: string; desc: string; tags: string[]; }

export default function WorkProcess() {
    const { t } = useLanguage();
    const w = t.workProcess;
    const isMobile = useIsMobile();
    const [activeStep, setActiveStep] = useState<number>(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startTimer = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setActiveStep(prev => (prev + 1) % (w.processSteps as ProcessStep[]).length);
        }, 2500);
    }, [w.processSteps]);

    // Auto-advance carousel
    useEffect(() => {
        startTimer();
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [startTimer]);

    const handleStepClick = (i: number) => {
        setActiveStep(i);
        startTimer(); // reset timer on manual click
    };

    const stepColors = ['#a78bfa', '#60a5fa', '#f472b6', '#34d399'];
    const pillarColors = ['#a78bfa', '#60a5fa', '#34d399'];

    const stepIcons = [
        <Search size={20} />,
        <Lightbulb size={20} />,
        <Sparkles size={20} />,
        <Rocket size={20} />,
    ];
    const pillarIcons = [
        <Repeat2 size={22} />,
        <Users size={22} />,
        <BookOpen size={22} />,
    ];
    const growthIcon = <TrendingUp size={22} />;

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] },
    });

    return (
        <section id="work-process" style={{ padding: isMobile ? '2rem 1.2rem 5rem' : '2rem 2rem 8rem', position: 'relative' }}>
            <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>

                {/* Header */}
                <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <p style={{
                        fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em',
                        color: '#a78bfa', textTransform: 'uppercase', marginBottom: '0.8rem',
                    }}>{w.sectionLabel}</p>
                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', fontWeight: 800,
                        color: 'var(--text-color)', marginBottom: '1rem', lineHeight: 1.2,
                    }}>{w.sectionTitle}</h2>
                    <p style={{
                        fontSize: '1rem', color: 'var(--secondary-text)',
                        maxWidth: '560px', margin: '0 auto', lineHeight: 1.7,
                    }}>{w.sectionSubtitle}</p>
                </motion.div>

                {/* Process Steps — horizontal interactive timeline */}
                <motion.div {...fadeUp(0.1)} style={{ marginBottom: '2rem' }}>
                    {/* Step selector */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                        gap: '0.75rem',
                        marginBottom: '1.5rem',
                    }}>
                        {(w.processSteps as ProcessStep[]).map((step, i) => {
                            const isActive = activeStep === i;
                            const color = stepColors[i];
                            return (
                                <motion.button
                                    key={i}
                                    onClick={() => handleStepClick(i)}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                    style={{
                                        background: isActive ? `${color}18` : 'var(--glass-bg)',
                                        border: `1.5px solid ${isActive ? color : 'var(--glass-border)'}`,
                                        borderRadius: '16px',
                                        padding: '1.2rem 1rem',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        backdropFilter: 'blur(16px)',
                                        transition: 'all 0.28s ease',
                                        boxShadow: isActive ? `0 0 20px ${color}28` : 'none',
                                        display: 'flex', flexDirection: 'column', gap: '0.3rem',
                                    }}
                                >
                                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: isActive ? color : 'var(--secondary-text)', letterSpacing: '0.1em' }}>
                                        {step.num}
                                    </span>
                                    <span style={{ fontSize: '1.2rem', color: isActive ? color : 'var(--secondary-text)', display: 'flex', transition: 'color 0.3s' }}>{stepIcons[i]}</span>
                                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: isActive ? color : 'var(--text-color)', transition: 'color 0.3s' }}>
                                        {step.title}
                                    </span>
                                    {/* Progress bar */}
                                    <div style={{ height: '2px', background: 'var(--glass-border)', borderRadius: '99px', overflow: 'hidden', marginTop: '0.4rem' }}>
                                        {isActive && (
                                            <motion.div
                                                key={`bar-${activeStep}`}
                                                initial={{ width: '0%' }}
                                                animate={{ width: '100%' }}
                                                transition={{ duration: 2.5, ease: 'linear' }}
                                                style={{ height: '100%', background: color, borderRadius: '99px', boxShadow: `0 0 6px ${color}` }}
                                            />
                                        )}
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Active step detail */}
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            background: `${stepColors[activeStep]}12`,
                            border: `1px solid ${stepColors[activeStep]}50`,
                            borderRadius: '16px',
                            padding: '1.2rem 1.6rem',
                            backdropFilter: 'blur(16px)',
                            display: 'flex', alignItems: 'center', gap: '1rem',
                        }}
                    >
                        <span style={{ color: stepColors[activeStep], display: 'flex', flexShrink: 0, fontSize: '1.8rem' }}>
                            {stepIcons[activeStep]}
                        </span>
                        <div>
                            <p style={{ fontWeight: 700, color: stepColors[activeStep], marginBottom: '0.2rem', fontSize: '1rem' }}>
                                {(w.processSteps as ProcessStep[])[activeStep].title}
                            </p>
                            <p style={{ color: 'var(--secondary-text)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                                {(w.processSteps as ProcessStep[])[activeStep].desc}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Pillars grid — 3 columns */}
                <motion.div
                    {...fadeUp(0.15)}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                        gap: '1rem',
                        marginBottom: '1rem',
                    }}
                >
                    {(w.pillars as Pillar[]).map((pillar, i) => {
                        const color = pillarColors[i];
                        return (
                            <motion.div
                                key={i}
                                whileHover={{ y: -4, borderColor: `${color}70` }}
                                style={{
                                    background: 'var(--glass-bg)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '20px',
                                    padding: '1.5rem',
                                    backdropFilter: 'blur(20px)',
                                    transition: 'border-color 0.3s, box-shadow 0.3s',
                                    cursor: 'default',
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 12px 32px ${color}18`; }}
                                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
                            >
                                <span style={{ color: color, display: 'flex', marginBottom: '0.7rem' }}>{pillarIcons[i]}</span>
                                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-color)', marginBottom: '0.5rem' }}>
                                    {pillar.title}
                                </h3>
                                <p style={{ fontSize: '0.82rem', color: 'var(--secondary-text)', lineHeight: 1.6, marginBottom: '1rem' }}>
                                    {pillar.desc}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                    {pillar.tags.map((tag, j) => (
                                        <span key={j} style={{
                                            fontSize: '0.72rem', fontWeight: 600, color: color,
                                            background: `${color}15`, border: `1px solid ${color}40`,
                                            borderRadius: '50px', padding: '0.2rem 0.7rem',
                                        }}>{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom row — Growth card + Quote */}
                <motion.div
                    {...fadeUp(0.2)}
                    style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.5fr', gap: '1rem' }}
                >
                    {/* Growth card */}
                    {(w.growthCards as GrowthCard[]).map((card, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -3 }}
                            style={{
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '20px',
                                padding: '1.5rem',
                                backdropFilter: 'blur(20px)',
                                cursor: 'default',
                            }}
                        >
                            <span style={{ color: '#f472b6', display: 'flex', marginBottom: '0.7rem' }}>{growthIcon}</span>
                            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-color)', marginBottom: '0.5rem' }}>
                                {card.title}
                            </h3>
                            <p style={{ fontSize: '0.82rem', color: 'var(--secondary-text)', lineHeight: 1.6, marginBottom: '1rem' }}>
                                {card.desc}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                {card.tags.map((tag, j) => (
                                    <span key={j} style={{
                                        fontSize: '0.72rem', fontWeight: 600, color: '#f472b6',
                                        background: '#f472b615', border: '1px solid #f472b640',
                                        borderRadius: '50px', padding: '0.2rem 0.7rem',
                                    }}>{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    {/* Quote card */}
                    <motion.div
                        whileHover={{ y: -3 }}
                        style={{
                            background: 'linear-gradient(135deg, #a78bfa18, #60a5fa18)',
                            border: '1px solid #a78bfa40',
                            borderRadius: '20px',
                            padding: '2rem',
                            backdropFilter: 'blur(20px)',
                            display: 'flex', flexDirection: 'column', justifyContent: 'center',
                            position: 'relative', overflow: 'hidden', cursor: 'default',
                        }}
                    >
                        {/* Decorative quote mark */}
                        <span style={{
                            position: 'absolute', top: '-10px', left: '16px',
                            fontSize: '6rem', color: '#a78bfa20', lineHeight: 1,
                            fontFamily: 'Georgia, serif', fontWeight: 900, userSelect: 'none',
                            pointerEvents: 'none',
                        }}>❝</span>
                        <p style={{
                            fontSize: '1rem', color: 'var(--text-color)',
                            lineHeight: 1.75, fontStyle: 'italic', fontWeight: 500,
                            position: 'relative', zIndex: 1, marginBottom: '1.2rem',
                        }}>
                            {w.quote}
                        </p>
                        <p style={{
                            fontSize: '0.8rem', fontWeight: 700, color: '#a78bfa',
                            letterSpacing: '0.05em', position: 'relative', zIndex: 1,
                        }}>
                            — {w.quoteAuthor}
                        </p>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
