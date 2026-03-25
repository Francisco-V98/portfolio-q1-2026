import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Showcase() {
    const { t } = useLanguage();
    const navigate = useNavigate();

    const handleProjectClick = (projectId: string) => {
        if (projectId === 'busbanz' || projectId === 'asesoria') {
            navigate(`/project/${projectId}`);
        }
    };

    return (
        <section id="projects" style={{
            padding: '2rem 2rem 10rem 2rem',
            minHeight: 'auto',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4rem',
                width: '100%'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: 800,
                        color: 'var(--text-color)',
                        textAlign: 'center',
                        letterSpacing: '-1px'
                    }}>
                        {t.showcase.title}
                    </h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gap: '2.5rem',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    width: '100%'
                }}>
                    {t.showcase.projects.map((project: any, idx: number) => (
                        <motion.div
                            key={project.id}
                            onClick={() => handleProjectClick(project.id)}
                            className="group"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            whileHover={{ y: -10 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                background: 'var(--glass-bg)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                boxShadow: 'var(--glass-shadow)',
                                position: 'relative',
                                height: '480px' // Fixed height to prevent language shift
                            }}
                        >
                            {/* Image Placeholder Area */}
                            <div style={{
                                height: '240px',
                                background: project.color, // Uses the yellow for Busbanz
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {/* This is where the logo will go later */}
                                {project.id === 'busbanz' && (
                                    <span style={{
                                        color: '#000000',
                                        fontWeight: 800,
                                        fontSize: '2rem',
                                        opacity: 0.3
                                    }}>
                                        [Logo Busbanz]
                                    </span>
                                )}
                                {project.id === 'asesoria' && (
                                    <span style={{
                                        color: '#ffffff',
                                        fontWeight: 800,
                                        fontSize: '2rem',
                                        opacity: 0.3
                                    }}>
                                        [API Logo]
                                    </span>
                                )}

                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
                                    pointerEvents: 'none'
                                }} />

                                {/* Category Badge Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    top: '1.2rem',
                                    left: '1.2rem',
                                    background: 'rgba(0, 0, 0, 0.4)',
                                    backdropFilter: 'blur(10px)',
                                    color: '#ffffff',
                                    padding: '0.4rem 1rem',
                                    borderRadius: '50px',
                                    fontSize: '0.8rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.5px',
                                    textTransform: 'uppercase',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    {project.category}
                                </div>
                            </div>

                            {/* Content Area */}
                            <div style={{
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1,
                                gap: '1rem'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h3 style={{
                                        fontSize: '1.8rem',
                                        fontWeight: 700,
                                        color: 'var(--text-color)',
                                        letterSpacing: '-0.5px'
                                    }}>
                                        {project.title}
                                    </h3>

                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            background: 'var(--icon-box-bg)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--text-color)',
                                            border: '1px solid var(--glass-border)'
                                        }}
                                    >
                                        <ArrowUpRight size={18} />
                                    </motion.div>
                                </div>

                                <p style={{
                                    color: 'var(--secondary-text)',
                                    lineHeight: 1.6,
                                    fontSize: '1rem'
                                }}>
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
