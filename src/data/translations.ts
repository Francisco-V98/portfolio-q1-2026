export const translations = {
    es: {
        hero: {
            name: "Francisco Colmenarez",
            role: "Diseñador de Producto Senior & Desarrollador Móvil/Web",
            connect: "Conectar en LinkedIn",
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
