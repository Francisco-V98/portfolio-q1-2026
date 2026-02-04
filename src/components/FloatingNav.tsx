import { motion } from 'framer-motion';
import { Linkedin, MessageCircle, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function FloatingNav() {
    const { toggleLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    const buttonStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--glass-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'var(--text-color)',
        outline: 'none',
        position: 'relative' as 'relative',
        transition: 'background 0.3s, border 0.3s, color 0.3s'
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '1rem',
            padding: '0.5rem 1rem',
            background: 'var(--dock-bg)',
            backdropFilter: 'blur(15px)',
            borderRadius: '50px',
            border: '1px solid var(--dock-border)',
            zIndex: 100,
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            transition: 'background 0.3s, border 0.3s'
        }}>
            <motion.a
                href="https://wa.me/584127948930"
                target="_blank"
                rel="noopener noreferrer"
                style={buttonStyle}
                whileHover={{ scale: 1.1, backgroundColor: 'var(--button-glass-hover)' }}
                whileTap={{ scale: 0.95 }}
                title="WhatsApp"
            >
                <MessageCircle size={24} />
            </motion.a>

            <motion.a
                href="https://www.linkedin.com/in/francisco-stoff/"
                target="_blank"
                rel="noopener noreferrer"
                style={buttonStyle}
                whileHover={{ scale: 1.1, backgroundColor: 'var(--button-glass-hover)' }}
                whileTap={{ scale: 0.95 }}
                title="LinkedIn"
            >
                <Linkedin size={24} />
            </motion.a>

            <div style={{ width: '1px', background: 'var(--glass-border)', margin: '0 0.2rem' }}></div>

            <motion.button
                onClick={toggleLanguage}
                style={buttonStyle}
                whileHover={{ scale: 1.1, backgroundColor: 'var(--button-glass-hover)' }}
                whileTap={{ scale: 0.95 }}
                title="Switch Language"
            >
                <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{t.nav.lang}</span>
            </motion.button>

            <motion.button
                onClick={toggleTheme}
                style={buttonStyle}
                whileHover={{ scale: 1.1, backgroundColor: 'var(--button-glass-hover)' }}
                whileTap={{ scale: 0.95 }}
                title="Switch Theme"
            >
                {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </motion.button>
        </div>
    );
}
