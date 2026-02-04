import { motion } from 'framer-motion';
import { Linkedin, Code2, Palette, Smartphone, Layers, Zap, MousePointer2 } from 'lucide-react';
import profileImage from '../assets/profile.png';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: '2rem'
        }}>
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
                    <StatItem icon={<Palette size={24} />} title={t.hero.stats.design} subtitle={t.hero.stats.designSub} />
                    <StatItem icon={<Layers size={24} />} title={t.hero.stats.vision} subtitle={t.hero.stats.visionSub} />
                    <StatItem icon={<MousePointer2 size={24} />} title={t.hero.stats.strategy} subtitle={t.hero.stats.strategySub} />
                </motion.div>

                {/* Center Column: Profile Card */}
                {/* Center Column: Profile Card */}
                {/* Center Column: Profile Card */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            position: 'relative',
                            width: '450px',
                            height: '650px',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            boxShadow: 'var(--glass-shadow)',
                            border: '1px solid var(--glass-border)',
                        }}
                    >
                        <img
                            src={profileImage}
                            alt={t.hero.name}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.95)'
                            }}
                        />

                        {/* Overlay Gradient */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '70%',
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
                            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.8rem', letterSpacing: '-1px', lineHeight: 1.1 }}>
                                Francisco <br /> Colmenarez
                            </h1>
                            <p style={{ color: '#e0e0e0', fontSize: '1.1rem', lineHeight: '1.5', fontWeight: 500 }}>
                                {t.hero.role}
                            </p>
                        </div>
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
