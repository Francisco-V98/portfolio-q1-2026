import { motion } from 'framer-motion';
import { ArrowLeft, Target, ShieldCheck, User, Route, X, Smartphone, Check, Folder, MapPin, Zap, AlertCircle, BarChart3, ArrowRight, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import SmoothScroll from '../components/SmoothScroll';
import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import BackgroundEffect from '../components/BackgroundEffect';

// Images downloaded from the current project url
import oldImg from '../assets/projects/asesoria/api-old.png';
import newImg from '../assets/projects/asesoria/api-new.png';

export default function AsesoriaProject() {
    const { t } = useLanguage();
    const ap = (t as any).asesoriaProject;

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
            <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', padding: '2rem', zIndex: 100, display: 'flex', justifyContent: 'space-between', pointerEvents: 'none' }}>
                <Link to="/" style={{ pointerEvents: 'auto', textDecoration: 'none' }}>
                    <motion.div
                        whileHover={{ scale: 1.05, x: -5 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            background: 'var(--glass-bg)', backdropFilter: 'blur(20px)',
                            padding: '0.8rem 1.5rem', borderRadius: '50px',
                            border: '1px solid var(--glass-border)', color: 'var(--text-color)',
                            fontWeight: 600, boxShadow: 'var(--glass-shadow)', cursor: 'pointer'
                        }}
                    >
                        <ArrowLeft size={20} />
                        {ap.back}
                    </motion.div>
                </Link>
            </nav>

            <main style={{ paddingBottom: '8rem', color: 'var(--text-color)' }}>
                {/* Hero Header */}
                <section style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '8rem 2rem 4rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                    <BackgroundEffect />
                    <motion.div initial="hidden" animate="visible" variants={fadeUpVariants} style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                        <div style={{
                            background: 'rgba(59, 130, 246, 0.15)', // Blue tint for API
                            color: '#3b82f6', padding: '0.5rem 1.5rem', borderRadius: '50px',
                            fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase',
                            fontSize: '0.9rem', border: '1px solid rgba(59, 130, 246, 0.3)'
                        }}>
                            {ap.caseStudy}
                        </div>
                        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-2px' }}>
                            {ap.title}
                        </h1>
                        <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'var(--secondary-text)', fontWeight: 500, maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
                            {ap.subtitle}
                        </p>
                        
                        <div style={{ marginTop: '1rem' }}>
                           <a href="https://asesoriaparainmigrantes.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{
                                    background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white', padding: '0.8rem 1.5rem', borderRadius: '50px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
                                }}>
                                    {ap.liveUrl} <ArrowLeft size={16} style={{ transform: 'rotate(135deg)' }} />
                                </motion.div>
                           </a>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                            {ap.tags.map((tag: string, index: number) => (
                                <motion.span key={index} whileHover={{ scale: 1.05 }} style={{
                                    background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', border: '1px solid var(--glass-border)', padding: '0.6rem 1.2rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-color)', boxShadow: 'var(--glass-shadow)'
                                }}>
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </section>

                <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                    
                    {/* El Desafio y Problemas Identificados */}
                    <div style={{ margin: '8rem 0' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '32px', padding: 'clamp(2.5rem, 6vw, 5rem)', display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                                {/* Background glow */}
                                <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(239, 68, 68, 0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
                                
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#ef4444' }}>
                                    <Target size={40} strokeWidth={2.5} />
                                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, margin: 0, letterSpacing: '-1px' }}>{ap.problemTitle}</h2>
                                </div>
                                <p style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)', color: 'var(--text-color)', lineHeight: 1.6, maxWidth: '1000px', fontWeight: 500 }}>
                                    {ap.problemText}
                                </p>
                            </motion.div>

                            <div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--secondary-text)' }}>
                                    {ap.problemsIdentifiedTitle}
                                    <span style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></span>
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                    {ap.problemsIdentifiedItems.map((item: any, i: number) => (
                                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.02, y: -5, borderColor: 'rgba(239, 68, 68, 0.3)', boxShadow: '0 15px 30px rgba(239, 68, 68, 0.1)' }} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '24px', padding: '2rem', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '1.2rem', cursor: 'default' }}>
                                            <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle at top right, rgba(239, 68, 68, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
                                            <div style={{ width: '48px', height: '48px', borderRadius: '16px', background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444' }}>
                                                <X size={24} strokeWidth={3} />
                                            </div>
                                            <strong style={{ color: 'var(--text-primary)', fontSize: '1.2rem', display: 'block', fontWeight: 700 }}>{item.title}</strong>
                                            <span style={{ color: 'var(--secondary-text)', fontSize: '1rem', lineHeight: 1.6 }}>{item.text}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Historias de Usuario */}
                    <div style={{ margin: '8rem 0' }}>
                        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '3rem', textAlign: 'center' }}>{ap.userStoriesTitle}</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                            <StoryCard icon={<User size={28} color="#3b82f6" />} title={ap.userStoriesItems[0].title} text={ap.userStoriesItems[0].text} />
                            <StoryCard icon={<User size={28} color="#10b981" />} title={ap.userStoriesItems[1].title} text={ap.userStoriesItems[1].text} />
                            <StoryCard icon={<User size={28} color="#f59e0b" />} title={ap.userStoriesItems[2].title} text={ap.userStoriesItems[2].text} />
                        </div>
                    </div>

                    {/* Transformacion Visual (Antes vs Despues) */}
                    <SectionBlock title={ap.transformationTitle} subtitle={ap.transformationText}>
                        <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                            {/* Comparison block */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                                {/* Antes */}
                                <div style={{ 
                                    border: '2px solid #ef4444', 
                                    borderRadius: '24px', 
                                    padding: '2rem', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    gap: '2rem', 
                                    background: 'var(--glass-bg)' 
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                                            <div style={{ background: '#ef4444', borderRadius: '50%', color: 'white', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                                                <X size={14} strokeWidth={4} />
                                            </div>
                                            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>Diseño Original</h3>
                                        </div>
                                        <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600 }}>
                                            Antes
                                        </div>
                                    </div>
                                    
                                    <div style={{ padding: '0 0.5rem' }}>
                                        <ScrollableImage src={oldImg} alt="Sitio Original" containerHeight="450px" />
                                    </div>

                                    <div style={{ background: 'rgba(0,0,0,0.02)', padding: '1.5rem', borderRadius: '16px' }}>
                                        <h4 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1rem', color: 'var(--text-color)' }}>Problemas Identificados:</h4>
                                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                            {ap.transformationProblems.map((prob: string, i: number) => (
                                                <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--secondary-text)', fontWeight: 600, fontSize: '0.95rem' }}>
                                                    <X size={20} color="#ef4444" strokeWidth={3} /> {prob}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Despues */}
                                <div style={{ 
                                    border: '2px solid #10b981', 
                                    borderRadius: '24px', 
                                    padding: '2rem', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    gap: '2rem', 
                                    background: 'var(--glass-bg)' 
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                                            <div style={{ background: '#10b981', borderRadius: '50%', color: 'white', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                                                <Check size={14} strokeWidth={4} />
                                            </div>
                                            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>Rediseño Mejorado</h3>
                                        </div>
                                        <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600 }}>
                                            Después
                                        </div>
                                    </div>

                                    <div style={{ padding: '0 0.5rem' }}>
                                        <ScrollableImage src={newImg} alt="Sitio Rediseñado" containerHeight="450px" />
                                    </div>

                                    <div style={{ background: 'rgba(0,0,0,0.02)', padding: '1.5rem', borderRadius: '16px' }}>
                                        <h4 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1rem', color: 'var(--text-color)' }}>Mejoras Implementadas:</h4>
                                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                            {ap.transformationSolutions.map((sol: string, i: number) => (
                                                <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: '#10b981', fontWeight: 600, fontSize: '0.95rem' }}>
                                                    <div style={{ background: '#10b981', borderRadius: '4px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Check size={14} color="white" strokeWidth={3} /></div> <span style={{ color: 'var(--text-primary)' }}>{sol}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SectionBlock>

                    {/* Arquitectura Info - Nuevo Esquema Visual */}
                    <SectionBlock title={ap.architectureTitle} subtitle={ap.architectureText}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                            {/* Original */}
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ border: '2px solid #ef4444', borderRadius: '24px', padding: '2rem', background: 'var(--glass-bg)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                        <X size={20} color="#ef4444" strokeWidth={3} /> Estructura Original
                                    </h3>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '50px' }}>50-60 páginas</span>
                                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '50px' }}>4 niveles</span>
                                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '50px' }}>Duplicaciones</span>
                                    </div>
                                </div>

                                {/* Tree View Original */}
                                <div style={{ background: 'var(--bg-color)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '2rem', flex: 1, boxShadow: 'inset 0 4px 15px rgba(0,0,0,0.02)' }}>
                                    
                                    <TreeNode label={<><Folder size={18} color="#94a3b8" /> SERVICIOS (Menú Principal)</>} isRoot>
                                        <TreeNode label="Seguro de Salud en España" />
                                        <TreeNode label="Cuenta bancaria en España" />
                                        <TreeNode label="Nacionalidad Española">
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Expediente nacionalidad española</>} />
                                        </TreeNode>
                                        <TreeNode label="Asesoría Fiscal y Tributaria" />
                                        <TreeNode label="Asilo Político en España" />
                                        <TreeNode label="Arraigo">
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Arraigo Social</>} />
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Arraigo Familiar</>} />
                                        </TreeNode>
                                        <TreeNode label="Visados para España">
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Estancia por estudios</>} />
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Nómada Digital</>} />
                                        </TreeNode>
                                        <TreeNode label="Inmigración en España">
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Residencia no lucrativa ...</>} />
                                        </TreeNode>
                                    </TreeNode>

                                    <div style={{ marginTop: '2rem' }}></div>

                                    <TreeNode label={<><Folder size={18} color="#94a3b8" /> TRÁMITES (Sub-menú por países)</>} isRoot>
                                        <TreeNode label="Dubái">
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Asesoría / Residencia Dorada</>} />
                                        </TreeNode>
                                        <TreeNode label="España">
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Curso CAP</>} />
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Canje licencias, Antecedentes...</>} />
                                        </TreeNode>
                                        <TreeNode label="Migración EEUU">
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Visa Inmigrante / No Inmigrante</>} />
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> TPS y Waivers</>} />
                                        </TreeNode>
                                    </TreeNode>
                                    
                                    <div style={{ marginTop: '2rem' }}></div>
                                    <TreeNode label={<><Folder size={18} color="#94a3b8" /> CONTÁCTANOS</>} isRoot />
                                    <TreeNode label={<><Folder size={18} color="#94a3b8" /> BLOG</>} isRoot />

                                </div>

                                {/* Identificados list */}
                                <div style={{ background: 'rgba(248, 250, 252, 0.03)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)' }}>
                                    <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-color)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Problemas identificados:</h4>
                                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <li style={{ display: 'flex', gap: '0.8rem', fontSize: '0.95rem', color: '#ef4444', fontWeight: 500 }}><AlertCircle size={18} /> Duplicación entre Servicios/Trámites</li>
                                        <li style={{ display: 'flex', gap: '0.8rem', fontSize: '0.95rem', color: '#ef4444', fontWeight: 500 }}><AlertCircle size={18} /> Jerarquía confusa</li>
                                        <li style={{ display: 'flex', gap: '0.8rem', fontSize: '0.95rem', color: '#ef4444', fontWeight: 500 }}><AlertCircle size={18} /> Sobrecarga cognitiva</li>
                                        <li style={{ display: 'flex', gap: '0.8rem', fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 500 }}><Smartphone size={18} color="#334155" /> No optimizada para móvil</li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Optimizado */}
                            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ border: '2px solid #10b981', borderRadius: '24px', padding: '2rem', background: 'var(--glass-bg)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                        <Check size={20} color="#10b981" strokeWidth={3} /> Estructura Optimizada
                                    </h3>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '50px' }}>35-40 páginas</span>
                                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '50px' }}>3 niveles</span>
                                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '50px' }}>Sin duplicaciones</span>
                                    </div>
                                </div>

                                {/* Tree View Optimized */}
                                <div style={{ background: 'var(--bg-color)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '2rem', flex: 1, boxShadow: 'inset 0 4px 15px rgba(16, 185, 129, 0.05)' }}>
                                    
                                    <TreeNode label={<><MapPin size={18} color="#3b82f6" /> SERVICIOS (Mega Menú)</>} isRoot>
                                        <TreeNode label="🇪🇸 España">
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Curso CAP</>} />
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Nacionalidad Española</>} />
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Residencia y Permisos</>} />
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Arraigo Sociolaboral</>} />
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Nómada Digital</>} />
                                        </TreeNode>
                                        <TreeNode label="🇺🇸 Estados Unidos">
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Visas de Inmigrante</>} />
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Visas de No Inmigrante</>} />
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Permisos de Trabajo</>} />
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Waivers y TPS</>} />
                                        </TreeNode>
                                        <TreeNode label="🇵🇹 Portugal">
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Ciudadanía Portuguesa</>} />
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Autorización de Residencia</>} />
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Visa de Trabajo / Estudiante</>} />
                                        </TreeNode>
                                        <TreeNode label="🇻🇪 Venezuela">
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Pasaporte / Apostilla</>} />
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Antecedentes Penales</>} />
                                        </TreeNode>
                                        <TreeNode label="🇦🇪 Dubái">
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Residencia Dorada</>} />
                                            <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Asesoría General</>} />
                                        </TreeNode>
                                    </TreeNode>

                                    <div style={{ marginTop: '2.5rem' }}></div>

                                    <TreeNode label={<><Zap size={18} color="#f59e0b" /> SISTEMA DE PROCESOS</>} isRoot>
                                        <TreeNode label={<><span style={{ background:'#3b82f6', color:'white', borderRadius:'4px', padding:'2px 8px', fontSize:'0.8rem', fontWeight:700 }}>1</span> Consulta Inicial</>} />
                                        <TreeNode label={<><span style={{ background:'#8b5cf6', color:'white', borderRadius:'4px', padding:'2px 8px', fontSize:'0.8rem', fontWeight:700 }}>2</span> Asesoría Personalizada</>} />
                                        <TreeNode label={<><span style={{ background:'#10b981', color:'white', borderRadius:'4px', padding:'2px 8px', fontSize:'0.8rem', fontWeight:700 }}>3</span> Gestión de Trámites</>} />
                                    </TreeNode>

                                    <div style={{ marginTop: '2.5rem' }}></div>

                                    <TreeNode label={<><Folder size={18} color="#3b82f6" /> CENTRO DE RECURSOS</>} isRoot>
                                        <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Blog y Noticias</>} />
                                        <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Guías Descargables</>} />
                                        <TreeNode label={<><span style={{ color:'#e2e8f0' }}>└</span> Casos de Éxito</>} />
                                    </TreeNode>
                                    
                                    <div style={{ marginTop: '2.5rem' }}></div>
                                    <TreeNode label={<><Folder size={18} color="#3b82f6" /> INFORMACIÓN CORPORATIVA</>} isRoot />

                                </div>

                                {/* Mejoras list */}
                                <div style={{ background: 'rgba(248, 250, 252, 0.03)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
                                    <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-color)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Mejoras Implementadas:</h4>
                                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <li style={{ display: 'flex', gap: '0.8rem', fontSize: '0.95rem', color: '#10b981', fontWeight: 600 }}><Check size={18} strokeWidth={3} /> Organización por países</li>
                                        <li style={{ display: 'flex', gap: '0.8rem', fontSize: '0.95rem', color: '#10b981', fontWeight: 600 }}><Check size={18} strokeWidth={3} /> Proceso lineal claro</li>
                                        <li style={{ display: 'flex', gap: '0.8rem', fontSize: '0.95rem', color: '#10b981', fontWeight: 600 }}><Check size={18} strokeWidth={3} /> Navegación intuitiva</li>
                                        <li style={{ display: 'flex', gap: '0.8rem', fontSize: '0.95rem', color: '#10b981', fontWeight: 600 }}><Smartphone size={18} /> Mobile-first design</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </SectionBlock>

                    {/* Impacto de la Reestructuración */}
                    <div style={{ margin: '6rem 0' }}>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
                            <BarChart3 size={24} color="#10b981" /> Impacto de la Reestructuración
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                            {/* Card 1 */}
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ background: 'var(--glass-bg)', borderRadius: '16px', border: '1px solid var(--glass-border)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ fontSize: '1.3rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <span style={{ color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '8px' }}>50-60</span>
                                    <ArrowRight size={18} color="var(--secondary-text)" />
                                    <span style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '8px' }}>35-40</span>
                                </div>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>Páginas Totales</span>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#10b981', color: 'white', fontSize: '0.75rem', fontWeight: 700, textAlign: 'center', padding: '0.4rem', letterSpacing: '0.5px' }}>-25% reducción</div>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ background: 'var(--glass-bg)', borderRadius: '16px', border: '1px solid var(--glass-border)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ fontSize: '1.3rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <span style={{ color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '8px' }}>4</span>
                                    <ArrowRight size={18} color="var(--secondary-text)" />
                                    <span style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '8px' }}>3</span>
                                </div>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>Niveles de Navegación</span>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#10b981', color: 'white', fontSize: '0.75rem', fontWeight: 700, textAlign: 'center', padding: '0.4rem', letterSpacing: '0.5px' }}>-25% más simple</div>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ background: 'var(--glass-bg)', borderRadius: '16px', border: '1px solid var(--glass-border)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ fontSize: '1.3rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <span style={{ color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '8px' }}>5.2</span>
                                    <ArrowRight size={18} color="var(--secondary-text)" />
                                    <span style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '8px' }}>2.1</span>
                                </div>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>Clics para Encontrar Info</span>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#10b981', color: 'white', fontSize: '0.75rem', fontWeight: 700, textAlign: 'center', padding: '0.4rem', letterSpacing: '0.5px' }}>-60% más eficiente</div>
                            </motion.div>

                            {/* Card 4 */}
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} style={{ background: 'var(--glass-bg)', borderRadius: '16px', border: '1px solid var(--glass-border)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ fontSize: '1.3rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <span style={{ color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '8px' }}>23%</span>
                                    <ArrowRight size={18} color="var(--secondary-text)" />
                                    <span style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '8px' }}>67%</span>
                                </div>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>Usuarios que Completan Flujo</span>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#10b981', color: 'white', fontSize: '0.75rem', fontWeight: 700, textAlign: 'center', padding: '0.4rem', letterSpacing: '0.5px' }}>+191% mejora</div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Optimización del User Journey */}
                    <div style={{ margin: '6rem 0' }}>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '3rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
                            <Route size={24} color="#8b5cf6" /> Optimización del User Journey
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'center' }}>
                            {/* Step 1 */}
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '2.5rem 1.5rem', flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: '#8b5cf6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 800, boxShadow: '0 8px 15px rgba(139, 92, 246, 0.3)' }}>1</div>
                                <div>
                                    <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Selección de País</strong>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--secondary-text)', lineHeight: 1.5 }}>Usuario elige jurisdicción específica desde el inicio</span>
                                </div>
                            </motion.div>

                            <ArrowRight color="#cbd5e1" size={24} style={{ display: 'none' }} className="journey-arrow" />

                            {/* Step 2 */}
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '2.5rem 1.5rem', flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: '#8b5cf6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 800, boxShadow: '0 8px 15px rgba(139, 92, 246, 0.3)' }}>2</div>
                                <div>
                                    <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Tipo de Servicio</strong>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--secondary-text)', lineHeight: 1.5 }}>Servicios filtrados por país seleccionado</span>
                                </div>
                            </motion.div>

                            <ArrowRight color="#cbd5e1" size={24} style={{ display: 'none' }} className="journey-arrow" />

                            {/* Step 3 */}
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '2.5rem 1.5rem', flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: '#8b5cf6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 800, boxShadow: '0 8px 15px rgba(139, 92, 246, 0.3)' }}>3</div>
                                <div>
                                    <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Información Detallada</strong>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--secondary-text)', lineHeight: 1.5 }}>Contenido específico con CTAs claros</span>
                                </div>
                            </motion.div>

                            <ArrowRight color="#cbd5e1" size={24} style={{ display: 'none' }} className="journey-arrow" />

                            {/* Step 4 */}
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '2.5rem 1.5rem', flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: '#8b5cf6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 800, boxShadow: '0 8px 15px rgba(139, 92, 246, 0.3)' }}>4</div>
                                <div>
                                    <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Contacto/Cita</strong>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--secondary-text)', lineHeight: 1.5 }}>Múltiples opciones de conversión</span>
                                </div>
                            </motion.div>
                            
                            <style>{`
                                @media (min-width: 900px) {
                                    .journey-arrow { display: block !important; }
                                }
                            `}</style>
                        </div>
                    </div>


                    {/* Soluciones Implementadas - Propuesta Bento Box Moderna */}
                    <SectionBlock title={ap.solutionsTitle} subtitle="">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(max(300px, calc(50% - 1rem)), 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
                            
                            {/* Card 1: Diseño Profesional (Compacto) */}
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '24px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '40%', background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.05))', pointerEvents: 'none' }} />
                                
                                <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                                    <ShieldCheck size={28} />
                                </div>
                                <div style={{ zIndex: 1 }}>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>{ap.solutionsItems[0].title}</h4>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--secondary-text)', lineHeight: 1.6, maxWidth: '90%' }}>{ap.solutionsItems[0].text}</p>
                                </div>

                                {/* UI Visualizer: Color Palette */}
                                <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem', background: 'var(--bg-color)', padding: '1rem', borderRadius: '100px', border: '1px solid var(--glass-border)', justifyContent: 'center', zIndex: 1 }}>
                                    <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#0f172a', border: '2px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} title="Dark Navy" />
                                    <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#3b82f6', border: '2px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)' }} title="Blue" />
                                    <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#10b981', border: '2px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 10px rgba(16, 185, 129, 0.3)' }} title="Green" />
                                    <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#f8fafc', border: '1px solid #e2e8f0', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }} title="Light" />
                                </div>
                            </motion.div>

                            {/* Card 2: Navegación Intuitiva */}
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '24px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                                    <Route size={28} />
                                </div>
                                <div style={{ zIndex: 1 }}>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>{ap.solutionsItems[1].title}</h4>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--secondary-text)', lineHeight: 1.6, maxWidth: '90%' }}>{ap.solutionsItems[1].text}</p>
                                </div>
                                
                                {/* UI Visualizer: Breadcrumbs */}
                                <div style={{ marginTop: 'auto', background: 'var(--bg-color)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--secondary-text)', zIndex: 1 }}>
                                    <span style={{ color: '#3b82f6' }}>Inicio</span>
                                    <span>/</span>
                                    <span style={{ color: '#3b82f6' }}>Servicios</span>
                                    <span>/</span>
                                    <span style={{ color: 'var(--text-primary)' }}>España</span>
                                </div>
                            </motion.div>

                            {/* Card 3: Mobile First */}
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '24px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                                    <Smartphone size={28} />
                                </div>
                                <div style={{ zIndex: 1 }}>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>{ap.solutionsItems[2].title}</h4>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--secondary-text)', lineHeight: 1.6, maxWidth: '90%' }}>{ap.solutionsItems[2].text}</p>
                                </div>
                                
                                {/* UI Visualizer: Mobile Frame */}
                                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', zIndex: 1 }}>
                                    <div style={{ width: '120px', height: '60px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', border: '3px solid var(--glass-border)', borderBottom: 'none', background: 'var(--bg-color)', position: 'relative', overflow: 'hidden', transform: 'translateY(1.5rem)' }}>
                                        {/* Notch */}
                                        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '40px', height: '12px', background: 'var(--glass-border)', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }} />
                                        {/* Content Lines */}
                                        <div style={{ position: 'absolute', top: '25px', left: '15px', right: '15px', height: '4px', background: 'rgba(59,130,246,0.3)', borderRadius: '2px' }} />
                                        <div style={{ position: 'absolute', top: '35px', left: '15px', right: '40px', height: '4px', background: 'var(--glass-border)', borderRadius: '2px' }} />
                                        <div style={{ position: 'absolute', top: '45px', left: '15px', right: '25px', height: '4px', background: 'var(--glass-border)', borderRadius: '2px' }} />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 4: CTAs Estratégicos (Compacto) */}
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '24px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
                                
                                <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                                    <Target size={28} />
                                </div>
                                <div style={{ zIndex: 1 }}>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>{ap.solutionsItems[3].title}</h4>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--secondary-text)', lineHeight: 1.6, maxWidth: '90%' }}>{ap.solutionsItems[3].text}</p>
                                </div>
                                
                                {/* UI Visualizer: Glowing Button */}
                                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', zIndex: 1 }}>
                                    <div style={{ padding: '0.8rem 1.5rem', background: 'linear-gradient(135deg, #10b981, #059669)', color: 'white', borderRadius: '50px', fontWeight: 800, fontSize: '0.9rem', boxShadow: '0 10px 25px rgba(16, 185, 129, 0.4)', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'default', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        Solicitar Cita <ArrowRight size={16} />
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </SectionBlock>

                    {/* Resultados del Rediseño */}
                    <SectionBlock title="" subtitle="">
                        <div style={{ background: 'var(--bg-color)', border: '1px solid var(--glass-border)', borderRadius: '24px', padding: '3rem', width: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', marginBottom: '3rem' }}>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '2.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                <BarChart3 size={22} color="#10b981" /> Resultados del Rediseño
                            </h3>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                                {/* Card 1 */}
                                <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ fontSize: '1.3rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                                        <span style={{ color: '#ef4444', fontWeight: 700 }}>2.3%</span>
                                        <ArrowRight size={16} color="var(--secondary-text)" />
                                        <span style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '8px' }}>8.7%</span>
                                    </div>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>Tasa de Conversión</span>
                                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#10b981', color: 'white', fontSize: '0.75rem', fontWeight: 700, textAlign: 'center', padding: '0.4rem' }}>+278% mejora</div>
                                </div>
                                {/* Card 2 */}
                                <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ fontSize: '1.3rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                                        <span style={{ color: '#ef4444', fontWeight: 700 }}>4:32</span>
                                        <ArrowRight size={16} color="var(--secondary-text)" />
                                        <span style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '8px' }}>1:45</span>
                                    </div>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>Tiempo de Rebote</span>
                                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#10b981', color: 'white', fontSize: '0.75rem', fontWeight: 700, textAlign: 'center', padding: '0.4rem' }}>-61% reducción</div>
                                </div>
                                {/* Card 3 */}
                                <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ fontSize: '1.3rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                                        <span style={{ color: '#ef4444', fontWeight: 700 }}>1.8</span>
                                        <ArrowRight size={16} color="var(--secondary-text)" />
                                        <span style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '8px' }}>4.2</span>
                                    </div>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>Páginas por Sesión</span>
                                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#10b981', color: 'white', fontSize: '0.75rem', fontWeight: 700, textAlign: 'center', padding: '0.4rem' }}>+133% aumento</div>
                                </div>
                                {/* Card 4 */}
                                <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ fontSize: '1.3rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                                        <span style={{ color: '#ef4444', fontWeight: 700 }}>32%</span>
                                        <ArrowRight size={16} color="var(--secondary-text)" />
                                        <span style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '8px' }}>78%</span>
                                    </div>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>Tráfico Móvil</span>
                                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#10b981', color: 'white', fontSize: '0.75rem', fontWeight: 700, textAlign: 'center', padding: '0.4rem' }}>+144% mejora</div>
                                </div>
                            </div>
                            
                            <p style={{ fontSize: '1rem', color: 'var(--secondary-text)', lineHeight: 1.7, textAlign: 'left' }}>
                                El rediseño transformó completamente la presencia digital del bufete. <strong style={{ color: 'var(--text-primary)' }}>Las consultas aumentaron un 340%</strong> en los primeros 3 meses, y la satisfacción del usuario mejoró significativamente según las métricas de usabilidad. El sitio ahora genera confianza y facilita que los usuarios encuentren la información que necesitan para tomar decisiones importantes sobre sus casos de inmigración.
                            </p>
                        </div>

                        {/* Metodología y Herramientas */}
                        <div style={{ background: 'var(--bg-color)', border: '1px solid var(--glass-border)', borderRadius: '24px', padding: '3rem', width: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', marginBottom: '4rem' }}>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '2.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                <Wrench size={22} color="var(--secondary-text)" /> Metodología y Herramientas
                            </h3>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem' }}>
                                {/* Col 1 */}
                                <div>
                                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.2rem' }}>Investigación UX</h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--secondary-text)', background: 'var(--glass-bg)', padding: '0.4rem 1rem', borderRadius: '50px', border: '1px solid var(--glass-border)' }}>User Interviews</span>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--secondary-text)', background: 'var(--glass-bg)', padding: '0.4rem 1rem', borderRadius: '50px', border: '1px solid var(--glass-border)' }}>Competitive Analysis</span>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--secondary-text)', background: 'var(--glass-bg)', padding: '0.4rem 1rem', borderRadius: '50px', border: '1px solid var(--glass-border)' }}>Heuristic Evaluation</span>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--secondary-text)', background: 'var(--glass-bg)', padding: '0.4rem 1rem', borderRadius: '50px', border: '1px solid var(--glass-border)' }}>User Journey Mapping</span>
                                    </div>
                                </div>
                                {/* Col 2 */}
                                <div>
                                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.2rem' }}>Diseño UI</h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--secondary-text)', background: 'var(--glass-bg)', padding: '0.4rem 1rem', borderRadius: '50px', border: '1px solid var(--glass-border)' }}>Figma</span>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--secondary-text)', background: 'var(--glass-bg)', padding: '0.4rem 1rem', borderRadius: '50px', border: '1px solid var(--glass-border)' }}>Design System</span>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--secondary-text)', background: 'var(--glass-bg)', padding: '0.4rem 1rem', borderRadius: '50px', border: '1px solid var(--glass-border)' }}>Prototyping</span>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--secondary-text)', background: 'var(--glass-bg)', padding: '0.4rem 1rem', borderRadius: '50px', border: '1px solid var(--glass-border)' }}>Responsive Design</span>
                                    </div>
                                </div>
                                {/* Col 3 */}
                                <div>
                                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.2rem' }}>Validación</h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--secondary-text)', background: 'var(--glass-bg)', padding: '0.4rem 1rem', borderRadius: '50px', border: '1px solid var(--glass-border)' }}>A/B Testing</span>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--secondary-text)', background: 'var(--glass-bg)', padding: '0.4rem 1rem', borderRadius: '50px', border: '1px solid var(--glass-border)' }}>Usability Testing</span>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--secondary-text)', background: 'var(--glass-bg)', padding: '0.4rem 1rem', borderRadius: '50px', border: '1px solid var(--glass-border)' }}>Analytics Tracking</span>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--secondary-text)', background: 'var(--glass-bg)', padding: '0.4rem 1rem', borderRadius: '50px', border: '1px solid var(--glass-border)' }}>Performance Monitoring</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SectionBlock>
                </div>
            </main>
        </SmoothScroll>
    );
}

// ---------------- Helper Components ---------------- //

function SectionBlock({ title, subtitle, children }: { title: React.ReactNode, subtitle: string, children: React.ReactNode }) {
    return (
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} style={{ marginBottom: '8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: subtitle ? '1rem' : '3rem', color: 'var(--text-color)' }}>{title}</h2>
            {subtitle && <p style={{ fontSize: '1.1rem', color: 'var(--secondary-text)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>{subtitle}</p>}
            <div style={{ width: '100%', textAlign: 'left' }}>
                {children}
            </div>
        </motion.section>
    )
}

function StoryCard({ icon, title, text }: { icon: any, title: string, text: string }) {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ background: 'var(--icon-box-bg)', padding: '1rem', borderRadius: '16px', border: '1px solid var(--glass-border)', alignSelf: 'flex-start' }}>{icon}</div>
            <h4 style={{ fontSize: '1.3rem', fontWeight: 700 }}>{title}</h4>
            <p style={{ color: 'var(--secondary-text)', lineHeight: 1.6, fontStyle: 'italic' }}>{text}</p>
        </motion.div>
    )
}




function ScrollableImage({ src, alt, containerHeight = '450px' }: { src: string, alt: string, containerHeight?: string }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const isDown = useRef(false);
    const startY = useRef(0);
    const scrollTop = useRef(0);

    const onMouseDown = (e: React.MouseEvent) => {
        isDown.current = true;
        if (scrollRef.current) {
            scrollRef.current.style.cursor = 'grabbing';
            startY.current = e.pageY - scrollRef.current.offsetTop;
            scrollTop.current = scrollRef.current.scrollTop;
        }
    };

    const onMouseLeaveOrUp = () => {
        isDown.current = false;
        if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDown.current || !scrollRef.current) return;
        e.preventDefault();
        const y = e.pageY - scrollRef.current.offsetTop;
        const walk = (y - startY.current) * 2; // scroll-fast multiplier
        scrollRef.current.scrollTop = scrollTop.current - walk;
    };

    return (
        <>
            <div 
                ref={scrollRef}
                data-lenis-prevent="true" 
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeaveOrUp}
                onMouseUp={onMouseLeaveOrUp}
                onMouseMove={onMouseMove}
                style={{ width: '100%', height: containerHeight, overflowY: 'auto', background: 'var(--glass-bg)', borderRadius: '16px', border: '1px solid var(--glass-border)', boxShadow: 'inset 0 4px 15px rgba(0,0,0,0.15)', cursor: 'grab' }} 
                className="hide-scrollbar"
            >
                <img src={src} alt={alt} draggable={false} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px', pointerEvents: 'none', userSelect: 'none' }} />
            </div>
            <style>{`.hide-scrollbar::-webkit-scrollbar { width: 6px; } .hide-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.2); border-radius: 4px; }`}</style>
        </>
    )
}

function TreeNode({ label, children, isRoot }: { label: React.ReactNode, children?: React.ReactNode, isRoot?: boolean }) {
    return (
        <div style={{ 
            marginLeft: isRoot ? 0 : '1rem', 
            borderLeft: isRoot ? 'none' : '2px solid rgba(0,0,0,0.05)', 
            paddingLeft: isRoot ? 0 : '1.5rem', 
            paddingTop: isRoot ? 0 : '0.5rem' 
        }}>
            <div style={{ 
                color: isRoot ? 'var(--text-primary)' : 'var(--secondary-text)', 
                fontWeight: isRoot ? 700 : 500, 
                fontSize: isRoot ? '1.1rem' : '0.95rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                marginBottom: '0.5rem'
            }}>
                {label}
            </div>
            {children && <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>{children}</div>}
        </div>
    )
}
