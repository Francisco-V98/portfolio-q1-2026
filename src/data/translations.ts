export const translations = {
    es: {
        hero: {
            name: "Francisco Colmenarez",
            role: "Diseñador de Producto Senior & Desarrollador Móvil/Web",
            connect: "Conectar en LinkedIn",
            designerTitle: "Diseñador de Producto",
            developerTitle: "Desarrollador",
            stats: {
                design: "Diseño de Producto",
                designSub: "Especialista UX/UI Senior",
                vision: "Visión Integral",
                visionSub: "Diseño End-to-End",
                strategy: "Estrategia",
                strategySub: "Liderazgo y Planificación",
                mobile: "Desarrollo Móvil",
                mobileSub: "Experto en Flutter (iOS/Android)",
                web: "Desarrollo Web",
                webSub: "React & Tecnologías Modernas",
                ai: "Innovación IA",
                aiSub: "Optimización y Creatividad"
            },
            about: {
                title: "Sobre mí",
                p1: "Soy Francisco Colmenarez, un profesional con un perfil híbrido que une diseño, desarrollo y estrategia de IA.",
                p2: "Con más de 10 años de trayectoria, he evolucionado hasta consolidar un perfil integral como Product Designer y Desarrollador Móvil (Flutter).",
                p3: "Mi objetivo es unir diseño, código e IA para crear productos digitales con propósito."
            },
            bottomStats: {
                aiTitle: "Inteligencia Artificial",
                aiItems: [
                    { label: "Prompt Engineering", value: "Experto" },
                    { label: "Automatización IA", value: "Avanzado" },
                    { label: "Integración LLMs", value: "Profesional" }
                ],
                softSkillsTitle: "Soft Skills",
                softSkillsItems: [
                    { label: "Liderazgo", value: "10+ años" },
                    { label: "Comunicación", value: "Bilingüe" },
                    { label: "Resolución de Problemas", value: "Estratégico" }
                ]
            }
        },
        nav: {
            whatsapp: "WhatsApp",
            linkedin: "LinkedIn",
            lang: "EN" // Button text to switch TO
        }
    },
    en: {
        hero: {
            name: "Francisco Colmenarez",
            role: "Senior Product Designer & Mobile/Web Developer",
            connect: "Connect on LinkedIn",
            designerTitle: "Product Designer",
            developerTitle: "Developer",
            stats: {
                design: "Product Design",
                designSub: "Senior UX/UI Specialist",
                vision: "Integral Vision",
                visionSub: "End-to-End Design",
                strategy: "Strategy",
                strategySub: "Leadership & Planning",
                mobile: "Mobile Dev",
                mobileSub: "Flutter Expert (iOS/Android)",
                web: "Web Development",
                webSub: "React & Modern Tech",
                ai: "AI Innovation",
                aiSub: "Optimization & Creativity"
            },
            about: {
                title: "About Me",
                p1: "I'm Francisco Colmenarez, a professional with a hybrid profile that unites design, development, and AI strategy.",
                p2: "With over 10 years of experience, I have evolved into a comprehensive profile as a Product Designer and Mobile Developer (Flutter).",
                p3: "My goal is to bridge design, code, and AI to create purposeful digital products."
            },
            bottomStats: {
                aiTitle: "Artificial Intelligence",
                aiItems: [
                    { label: "Prompt Engineering", value: "Expert" },
                    { label: "AI Automation", value: "Advanced" },
                    { label: "LLM Integration", value: "Professional" }
                ],
                softSkillsTitle: "Soft Skills",
                softSkillsItems: [
                    { label: "Leadership", value: "10+ years" },
                    { label: "Communication", value: "Bilingual" },
                    { label: "Problem Solving", value: "Strategic" }
                ]
            }
        },
        nav: {
            whatsapp: "WhatsApp",
            linkedin: "LinkedIn",
            lang: "ES" // Button text to switch TO
        }
    }
};

export type Language = 'es' | 'en';
export type TranslationState = typeof translations.es;
