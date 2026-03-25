import { motion } from 'framer-motion';
import { Linkedin, MessageCircle, ArrowUp, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Footer() {
    const { t } = useLanguage();
    const isMobile = useIsMobile();
    const f = t.footer;

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navLinks = [
        { label: f.navAbout,    id: 'about' },
        { label: f.navProjects, id: 'projects' },
        { label: f.navSkills,   id: 'skills' },
        { label: f.navProcess,  id: 'work-process' },
    ];

    return (
        <footer style={{
            position: 'relative',
            background: 'var(--glass-bg)',
            borderTop: '1px solid var(--glass-border)',
            backdropFilter: 'blur(20px)',
            padding: isMobile ? '2.5rem 1.5rem 1.5rem' : '3.5rem 2rem 2rem',
        }}>
            {/* Subtle top glow line */}
            <div style={{
                position: 'absolute', top: 0, left: '50%',
                transform: 'translateX(-50%)',
                width: '200px', height: '1px',
                background: 'linear-gradient(90deg, transparent, #a78bfa, transparent)',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>

                {/* Top row: brand + nav + scroll-top */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr auto auto',
                    gap: isMobile ? '2rem' : '3rem',
                    alignItems: 'start',
                    marginBottom: isMobile ? '2rem' : '3rem',
                }}>

                    {/* Brand */}
                    <div>
                        <p style={{
                            fontSize: isMobile ? '1.4rem' : '1.6rem',
                            fontWeight: 800, color: 'var(--text-color)',
                            marginBottom: '0.4rem', letterSpacing: '-0.5px',
                        }}>
                            Francisco<span style={{ color: '#a78bfa' }}>.</span>
                        </p>
                        <p style={{
                            fontSize: '0.85rem', color: 'var(--secondary-text)',
                            lineHeight: 1.6, maxWidth: '260px',
                        }}>
                            {f.tagline}
                        </p>
                    </div>

                    {/* Nav links */}
                    <nav style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.6rem',
                        minWidth: '120px',
                    }}>
                        <p style={{
                            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em',
                            color: '#a78bfa', textTransform: 'uppercase', marginBottom: '0.4rem',
                        }}>{f.navTitle}</p>
                        {navLinks.map(link => (
                            <motion.button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                whileHover={{ x: 4, color: 'var(--text-color)' }}
                                style={{
                                    background: 'none', border: 'none', cursor: 'pointer',
                                    color: 'var(--secondary-text)', fontSize: '0.92rem',
                                    textAlign: 'left', padding: 0, fontWeight: 500,
                                    transition: 'color 0.2s',
                                }}
                            >
                                {link.label}
                            </motion.button>
                        ))}
                    </nav>

                    {/* Contact / Social */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', minWidth: '140px' }}>
                        <p style={{
                            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em',
                            color: '#a78bfa', textTransform: 'uppercase', marginBottom: '0.4rem',
                        }}>{f.contactTitle}</p>

                        <motion.a
                            href="https://www.linkedin.com/in/francisco-stoff/"
                            target="_blank" rel="noopener noreferrer"
                            whileHover={{ x: 4 }}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '0.6rem',
                                color: 'var(--secondary-text)', textDecoration: 'none',
                                fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.color = '#60a5fa')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'var(--secondary-text)')}
                        >
                            <Linkedin size={16} /> LinkedIn
                        </motion.a>

                        <motion.a
                            href="https://wa.me/584248993982"
                            target="_blank" rel="noopener noreferrer"
                            whileHover={{ x: 4 }}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '0.6rem',
                                color: 'var(--secondary-text)', textDecoration: 'none',
                                fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.color = '#34d399')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'var(--secondary-text)')}
                        >
                            <MessageCircle size={16} /> WhatsApp
                        </motion.a>
                    </div>
                </div>

                {/* Divider */}
                <div style={{ borderTop: '1px solid var(--glass-border)', margin: '0 0 1.5rem' }} />

                {/* Bottom row: copyright + scroll-to-top */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.8rem',
                }}>
                    <p style={{
                        fontSize: '0.8rem', color: 'var(--secondary-text)',
                        display: 'flex', alignItems: 'center', gap: '0.3rem',
                    }}>
                        © {new Date().getFullYear()} Francisco Colmenarez · {f.madeWith}
                        <Heart size={12} style={{ color: '#f472b6' }} />
                    </p>

                    <motion.button
                        onClick={scrollTop}
                        whileHover={{ y: -3, boxShadow: '0 8px 20px #a78bfa30' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.4rem',
                            background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                            borderRadius: '50px', padding: '0.5rem 1.1rem',
                            color: 'var(--secondary-text)', fontSize: '0.8rem',
                            fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease',
                        }}
                    >
                        <ArrowUp size={14} /> {f.backToTop}
                    </motion.button>
                </div>

            </div>
        </footer>
    );
}
