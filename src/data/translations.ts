export const translations = {
    es: {
        hero: {
            name: "Francisco Colmenarez",
            role: "Diseñador de Producto Senior & Desarrollador Móvil/Web",
            connect: "Conectar en LinkedIn",
            viewProjects: "Ver Proyectos",
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
                title: "Core Skills & Tech Stack",
                hardTitle: "Hard Skills",
                hardSkills: [
                    "Product Design", "UX/UI Design", "Design Systems", "Prototyping", "Figma",
                    "Flutter (iOS/Android)", "React.js", "TypeScript", "Frontend Architecture",
                    "Prompt Engineering", "Integración LLMs", "IA Automations", "User Research"
                ],
                softTitle: "Soft Skills",
                softSkills: [
                    "Liderazgo de Equipos", "Scrum / Agile", "Inglés Intermedio (B2)",
                    "Pensamiento Estratégico", "Resolución de Problemas", "Gestión de Producto",
                    "Mentoring", "Adaptabilidad", "Visión de Negocio"
                ]
            }
        },
        showcase: {
            title: "Proyectos Destacados",
            projects: [
                {
                    id: "busbanz",
                    title: "Busbanz",
                    category: "App Móvil & UX/UI",
                    description: "Plataforma Integral de Transporte Estudiantil. Herramientas de seguimiento en tiempo real, comunicación y gestión de rutas automatizada.",
                    color: "#Facc15" // Yellow color
                },
                {
                    id: "asesoria",
                    title: "Asesoría para Inmigrantes",
                    category: "UX/UI Design",
                    description: "Rediseño completo de la experiencia de usuario y arquitectura de información para bufete de abogados.",
                    color: "#3b82f6"
                },
                {
                    id: "project-3",
                    title: "Proyecto 3",
                    category: "Product Design",
                    description: "En diseño. Más detalles sobre la arquitectura e implementación se agregarán pronto.",
                    color: "rgba(255, 255, 255, 0.05)"
                }
            ]
        },
        skills: {
            sectionTitle: "Mis Habilidades",
            sectionSubtitle: "Un perfil híbrido que combina diseño centrado en el usuario, desarrollo técnico e innovación con IA para crear productos digitales excepcionales.",
            tabs: [
                { id: "design", label: "Diseño", icon: "🎨" },
                { id: "dev", label: "Desarrollo", icon: "💻" },
                { id: "ai", label: "IA & Estrategia", icon: "🧠" },
                { id: "tools", label: "Herramientas", icon: "🛠️" }
            ],
            categories: {
                design: [
                    { name: "UX Research", level: 95, desc: "Entrevistas, testing, user journeys" },
                    { name: "UI Design", level: 98, desc: "Interfaces visuales de alto impacto" },
                    { name: "Design Systems", level: 90, desc: "Sistemas escalables y documentados" },
                    { name: "Prototyping", level: 92, desc: "Prototipos interactivos en Figma" },
                    { name: "Information Architecture", level: 85, desc: "Estructuras claras y navegación intuitiva" },
                    { name: "Accessibility (WCAG)", level: 88, desc: "Diseño inclusivo y estándares internacionales" }
                ],
                dev: [
                    { name: "Flutter (iOS/Android)", level: 88, desc: "Apps nativas cross-platform" },
                    { name: "React.js", level: 82, desc: "Interfaces web modernas" },
                    { name: "TypeScript", level: 80, desc: "Código tipado y escalable" },
                    { name: "HTML / CSS", level: 90, desc: "Maquetado y estilos avanzados" },
                    { name: "API REST", level: 78, desc: "Integración y consumo de APIs" },
                    { name: "Git / GitHub", level: 85, desc: "Control de versiones y colaboración" }
                ],
                ai: [
                    { name: "Prompt Engineering", level: 92, desc: "Diseño de prompts efectivos" },
                    { name: "LLM Integration", level: 85, desc: "OpenAI, Gemini, Claude" },
                    { name: "AI Workflow Automation", level: 88, desc: "Automatización de procesos con IA" },
                    { name: "Product Strategy", level: 90, desc: "Visión de producto y roadmap" },
                    { name: "Agile / Scrum", level: 87, desc: "Metodologías ágiles de desarrollo" },
                    { name: "Creative Ideation", level: 93, desc: "Generación de ideas con asistencia IA" }
                ],
                tools: [
                    { name: "Figma", level: 98, desc: "Diseño, prototipado y systems" },
                    { name: "VS Code", level: 90, desc: "Entorno de desarrollo principal" },
                    { name: "Postman", level: 82, desc: "Testing de APIs" },
                    { name: "Notion", level: 88, desc: "Documentación y gestión" },
                    { name: "Docker", level: 72, desc: "Contenedores y deployment" },
                    { name: "Adobe Suite", level: 85, desc: "Diseño gráfico y multimedia" }
                ]
            }
        },
        workProcess: {
            sectionLabel: "Forma de Trabajar",
            sectionTitle: "Cómo construyo productos",
            sectionSubtitle: "Un proceso iterativo que combina investigación, metodologías ágiles y colaboración multidisciplinaria.",
            processSteps: [
                { num: "01", icon: "🔎", title: "Discover", desc: "Entrevistas y análisis competitivo para entender el problema real." },
                { num: "02", icon: "💡", title: "Define", desc: "Arquitectura de información, flujos y wireframes de baja fidelidad." },
                { num: "03", icon: "✨", title: "Design", desc: "Prototipado interactivo, sistema de diseño y UI de alto impacto." },
                { num: "04", icon: "🚀", title: "Deliver", desc: "Handoff a desarrollo, testing con usuarios e iteración continua." }
            ],
            pillars: [
                {
                    icon: "🏃",
                    title: "Agile & Scrum",
                    desc: "Sprints de 2-3 semanas con backlog priorizado, standups y retrospectivas que maximizan el valor entregado.",
                    tags: ["Sprint Planning", "Story Points", "Retrospectives"]
                },
                {
                    icon: "🤝",
                    title: "Colaboración",
                    desc: "Trabajo fluido con Desarrollo, Producto y Marketing. Presento decisiones de diseño en términos de impacto de negocio.",
                    tags: ["Dev Handoff", "Stakeholders", "Team Alignment"]
                },
                {
                    icon: "📚",
                    title: "Documentación",
                    desc: "Design systems documentados, especificaciones técnicas y flujos de usuario para que cualquier miembro del equipo pueda continuar el trabajo.",
                    tags: ["Design Tokens", "User Journeys", "Dev Specs"]
                }
            ],
            growthCards: [
                {
                    icon: "🌱",
                    title: "Feedback & Crecimiento",
                    desc: "Convierto críticas en mejoras tangibles. He mentorizado diseñadores junior ayudándoles a crecer en UX/UI y metodologías de trabajo.",
                    tags: ["Mentoring", "Mejora Continua", "Leadership"]
                }
            ],
            quote: "\'Cada decisión de diseño debe tener un \'por qué\' y un \'cómo\'. Diseño con propósito, ejecuto con precisión y colaboro con empatía.\'",
            quoteAuthor: "Francisco Colmenarez"
        },
        nav: {
            whatsapp: "WhatsApp",
            linkedin: "LinkedIn",
            lang: "EN" // Button text to switch TO
        },
        aboutSection: {
            title: "Conóceme más a detalle",
            greeting: "¡Hola! Soy Francisco Colmenarez, un profesional con un perfil híbrido que une diseño, desarrollo y estrategia de IA.",
            intro: "Con más de 10 años de trayectoria en el mundo del diseño, he evolucionado hasta consolidar un perfil integral. Mi experiencia se desglosa en:",
            bullet0Bold: "Más de 10 años como Diseñador Gráfico",
            bullet0Text: ", creando identidad corporativa, contenido visual y produciendo elementos adaptados tanto a medios digitales como físicos.",
            bullet1Bold: "Más de 4 años como Product Designer",
            bullet1Text: ", creando soluciones digitales intuitivas y centradas en el usuario, desde la conceptualización hasta la entrega final.",
            bullet2Bold: "Más de 2 años como Desarrollador Móvil especializado en Flutter",
            bullet2Text: ", materializando diseños en aplicaciones funcionales, eficientes y de alto rendimiento.",
            skillsTitle: "Mis competencias clave incluyen:",
            skill1Bold: "Visión End-to-End:",
            skill1Text: " Mi enfoque me permite no solo diseñar la experiencia de usuario (UI/UX), sino también traducir esos diseños directamente en código funcional y eficiente. Esto garantiza una fidelidad absoluta a la visión original y agiliza el desarrollo.",
            skill2Bold: "Metodologías Ágiles:",
            skill2Text: " Cuento con experiencia en Scrum y Sprints para asegurar una evolución sincronizada, adaptable y eficiente en cada proyecto.",
            skill3Bold: "Innovación con Inteligencia Artificial:",
            skill3Text: " Domino y aplico la IA de forma estratégica para potenciar mis capacidades tanto en diseño como en desarrollo. La utilizo para acelerar la ideación creativa, generar código más limpio y optimizar los flujos de trabajo.",
            goalBold: "Mi objetivo:",
            goalText: " Me entusiasma unirme a equipos que estén creando productos con propósito. Disfruto colaborando y usando mi combinación de diseño, código e IA para resolver desafíos interesantes. Si tienes un proyecto así, ¡me encantaría conversar!"
        },
        busbanzProject: {
            caseStudy: "Caso de Estudio",
            title: "Busbanz",
            subtitle: "Plataforma de Transporte Estudiantil",
            problemTitle: "El Problema",
            problemText: "Los padres de familia vivían con constante preocupación: '¿Llegó mi hijo al colegio?', '¿Quién está manejando el bus?', '¿Por qué se retrasa tanto?'. Mientras tanto, los conductores lidiaban con procesos manuales caóticos: listas en papel, rutas desorganizadas y falta de comunicación con los representantes.",
            researchTitle: "La Investigación",
            researchText: "Realizamos entrevistas profundas con representantes, conductores, monitores y colegios. Descubrimos patrones claros: el 89% de los padres querían visibilidad en tiempo real, mientras que el 94% de los conductores necesitaban automatizar sus procesos diarios.",
            architectureTitle: "Arquitectura del Design System",
            architectureSubtitle: "Desarrollé una arquitectura de diseño escalable y automatizada que garantiza consistencia y eficiencia en todo el proceso de desarrollo.",
            figmaTitle: "Organización Profesional en Figma",
            figmaSubtitle: "Mi metodología refleja años de experiencia optimizando flujos de diseño, facilitando la colaboración en equipo y el mantenimiento.",
            visualDesignTitle: "Diseño Visual & Sistema de Temas Dual",
            visualDesignSubtitle: "Desarrollé un sistema de Dark Mode y Light Mode que se adapta automáticamente a las preferencias del usuario.",
            visualDesignFeatures: [
                { title: "Accesibilidad WCAG AA", text: "Garantizando legibilidad óptima para todos los usuarios." },
                { title: "Sistema de Tema Dual", text: "Adaptación automática entre Dark y Light Mode." },
                { title: "Fatiga Visual Reducida", text: "Uso nocturno cómodo para conductores y padres." },
                { title: "Transición Fluida", text: "Experiencia sin cambios bruscos en la interfaz." }
            ],
            visualDesignTag: "Cambio de Tema Inteligente",
            repExperienceTitle: "Experiencia para Representantes",
            repExperienceSubtitle: "Tranquilidad y Control Total al brindarles visibilidad completa del transporte.",
            driverExperienceTitle: "Experiencia para Conductores",
            driverExperienceSubtitle: "Eficiencia y Automatización transformando su trabajo diario.",
            impactTitle: "El Impacto",
            impactText: "Busbanz transformó completamente la experiencia del transporte estudiantil, brindando tranquilidad a los padres y eficiencia operativa a los conductores. La plataforma se convirtió en una herramienta indispensable para instituciones educativas que buscan ofrecer un servicio de transporte moderno y confiable.",
            back: "Volver al inicio",
            tags: ["UX/UI Design", "Mobile App", "Design Systems", "Figma", "Prototypado"],
            figmaStructureTitle: "Estructura de Páginas",
            figmaStructureItems: [
                "Portada y Documentación",
                "Sistema de Diseño y Tokens",
                "Pantallas por Módulo",
                "Demos Interactivos",
                "Control de Versiones e Iteraciones"
            ],
            figmaCanvasTitle: "Organización del Canvas",
            figmaCanvasItems: [
                "Sistema de Retículas y Alineación",
                "Convención de Nombres",
                "Conexiones de Flujo",
                "Contexto en Device Frames",
                "Anotaciones Técnicas"
            ],
            figmaWorkspaceNote: "Workspace Optimizado para Handoff a Flutter",
            figmaDemosTitle: "Estructura de Demos",
            figmaDemosSubtitle: "Prototipos organizados para testing y presentación:",
            figmaDemosItems: [
                { title: "Flujos de Usuario", text: "Demo por tipo de usuario" },
                { title: "Puntos de Inicio", text: "Puntos de entrada claros" },
                { title: "Lógica de Interacción", text: "Flujos lógicos y naturales" },
                { title: "Comportamiento Responsivo", text: "Adaptación a diferentes dispositivos" },
                { title: "Micro-interacciones", text: "Detalles que mejoran la experiencia" }
            ],
            demoActionTitle: "Demo en Acción",
            demoExperienceTitle: "Experiencia Fluida y Natural",
            demoExperienceText: "Este demo interactivo demuestra la calidad y fluidez del prototipo final. Cada transición y micro-interacción fue cuidadosamente diseñada para crear una experiencia natural e intuitiva.",
            demoFeatures: [
                { title: "Transiciones Fluidas", text: "Animaciones suaves que guían al usuario" },
                { title: "Interacciones Realistas", text: "Comportamiento natural de la interfaz" },
                { title: "Flujo Intuitivo", text: "Navegación clara y sin fricción" },
                { title: "Respuesta Inmediata", text: "Feedback visual instantáneo" }
            ]
        },
        asesoriaProject: {
            caseStudy: "Rediseño UX/UI",
            title: "Asesoría para Inmigrantes",
            subtitle: "Buffet Legal especializado en casos de inmigración",
            liveUrl: "Ver Sitio Web",
            problemTitle: "El Desafío",
            problemText: "El sitio web original no transmitía la profesionalidad requerida ni facilitaba que los usuarios encontraran la información que necesitaban. El desafío era crear una experiencia que generara confianza y convirtiera visitantes en clientes potenciales.",
            problemsIdentifiedTitle: "Problemas Identificados",
            problemsIdentifiedItems: [
                { title: "Falta de Confianza", text: "El diseño no transmitía profesionalismo ni credibilidad legal" },
                { title: "Información Difícil de Encontrar", text: "Los servicios y procesos no estaban claramente organizados" },
                { title: "Experiencia Móvil Deficiente", text: "No era responsive y la navegación móvil era confusa" },
                { title: "Call-to-Actions Débiles", text: "No había un flujo claro para contactar o solicitar consulta" }
            ],
            userStoriesTitle: "Historias de Usuario",
            userStoriesItems: [
                { title: "Miguel, Empresario", text: "\"Como empresario que necesita renovar mi visa de trabajo, quiero encontrar rápidamente información sobre los requisitos y costos, para poder tomar una decisión informada sobre contratar los servicios.\"" },
                { title: "Carmen, Madre de Familia", text: "\"Como madre que busca reunificación familiar, necesito entender el proceso paso a paso y sentir confianza en el abogado, para asegurarme de que mi familia pueda estar junta.\"" },
                { title: "Alex, Estudiante", text: "\"Como estudiante internacional, quiero acceder fácilmente desde mi móvil a información sobre cambio de estatus, para poder planificar mi futuro académico y profesional.\"" }
            ],
            transformationTitle: "Antes vs Después: Transformación Visual",
            transformationText: "La comparación lado a lado muestra claramente la evolución del diseño, desde una interfaz desorganizada hasta una experiencia profesional y centrada en el usuario.",
            transformationProblems: ["Diseño desactualizado", "Navegación confusa", "Falta de jerarquía visual", "No responsive", "CTAs poco visibles"],
            transformationSolutions: ["Diseño moderno y profesional", "Navegación intuitiva", "Jerarquía visual clara", "Totalmente responsive", "CTAs prominentes"],
            architectureTitle: "Reestructuración de Arquitectura de Información",
            architectureText: "Con más de 50 páginas distribuidas sin lógica clara, los usuarios se perdían buscando información. Realizamos una reestructuración completa basada en UX.",
            archBeforeItems: ["Duplicación de Servicios", "Jerarquía confusa", "Sobrecarga cognitiva", "No optimizada para móvil"],
            archAfterItems: ["Organización por países", "Proceso lineal claro", "Navegación intuitiva", "Mobile-first design"],
            journeyTitle: "Optimización del User Journey",
            journeyItems: [
                { title: "Selección de País", text: "Usuario elige jurisdicción específica desde el inicio" },
                { title: "Tipo de Servicio", text: "Servicios filtrados por país seleccionado" },
                { title: "Información Detallada", text: "Contenido específico con CTAs claros" },
                { title: "Contacto/Cita", text: "Múltiples opciones de conversión" }
            ],
            solutionsTitle: "Soluciones Implementadas",
            solutionsItems: [
                { title: "Diseño Profesional", text: "Paleta de colores que transmite confianza y seriedad legal." },
                { title: "Navegación Intuitiva", text: "Reorganización con menús claros y breadcrumbs." },
                { title: "Mobile First", text: "Optimizado para el 70% del tráfico." },
                { title: "CTAs Estratégicos", text: "Botones prominentes y formularios optimizados." }
            ],
            impactTitle: "Resultados del Rediseño",
            impactText: "Las consultas aumentaron un 340% en los primeros 3 meses, y la satisfacción del usuario mejoró significativamente. El sitio ahora genera confianza y facilita las conversiones.",
            resultsTitle: "Resultados del Rediseño",
            resultsCards: [
                { label: "Tasa de Conversión", badge: "+278% mejora" },
                { label: "Tiempo de Rebote", badge: "-61% reducción" },
                { label: "Páginas por Sesión", badge: "+133% aumento" },
                { label: "Tráfico Móvil", badge: "+144% mejora" }
            ],
            resultsText: "El rediseño transformó completamente la presencia digital del bufete.",
            resultsHighlight: "Las consultas aumentaron un 340%",
            resultsTextEnd: "en los primeros 3 meses, y la satisfacción del usuario mejoró significativamente según las métricas de usabilidad. El sitio ahora genera confianza y facilita que los usuarios encuentren la información que necesitan para tomar decisiones importantes sobre sus casos de inmigración.",
            methodologyTitle: "Metodología y Herramientas",
            methodologyCategories: [
                { title: "Investigación UX", tools: ["User Interviews", "Competitive Analysis", "Heuristic Evaluation", "User Journey Mapping"] },
                { title: "Diseño UI", tools: ["Figma", "Design System", "Prototyping", "Responsive Design"] },
                { title: "Validación", tools: ["A/B Testing", "Usability Testing", "Analytics Tracking", "Performance Monitoring"] }
            ],
            back: "Volver al inicio",
            tags: ["UX Research", "UI Design", "Information Architecture", "Figma", "Web"]
        }
    },
    en: {
        hero: {
            name: "Francisco Colmenarez",
            role: "Senior Product Designer & Mobile/Web Developer",
            connect: "Connect on LinkedIn",
            viewProjects: "View Projects",
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
                title: "Core Skills & Tech Stack",
                hardTitle: "Hard Skills",
                hardSkills: [
                    "Product Design", "UX/UI Design", "Design Systems", "Prototyping", "Figma",
                    "Flutter (iOS/Android)", "React.js", "TypeScript", "Frontend Architecture",
                    "Prompt Engineering", "LLM Integration", "AI Automations", "User Research"
                ],
                softTitle: "Soft Skills",
                softSkills: [
                    "Team Leadership", "Scrum / Agile", "Intermediate English (B2)",
                    "Strategic Thinking", "Problem Solving", "Product Management",
                    "Mentoring", "Adaptability", "Business Vision"
                ]
            }
        },
        showcase: {
            title: "Selected Works",
            projects: [
                {
                    id: "busbanz",
                    title: "Busbanz",
                    category: "Mobile App & UX/UI",
                    description: "Comprehensive Student Transportation Platform. Real-time tracking, communication, and automated route management.",
                    color: "#Facc15" // Yellow color
                },
                {
                    id: "asesoria",
                    title: "Immigration Advising",
                    category: "UX/UI Design",
                    description: "Complete redesign of user experience and information architecture for a law firm.",
                    color: "#3b82f6"
                },
                {
                    id: "project-3",
                    title: "Project 3",
                    category: "Product Design",
                    description: "In the design phase. Architecture and implementation details to be added soon.",
                    color: "rgba(255, 255, 255, 0.05)"
                }
            ]
        },
        skills: {
            sectionTitle: "My Skills",
            sectionSubtitle: "A hybrid profile combining user-centered design, technical development, and AI innovation to create exceptional digital products.",
            tabs: [
                { id: "design", label: "Design", icon: "🎨" },
                { id: "dev", label: "Development", icon: "💻" },
                { id: "ai", label: "AI & Strategy", icon: "🧠" },
                { id: "tools", label: "Tools", icon: "🛠️" }
            ],
            categories: {
                design: [
                    { name: "UX Research", level: 95, desc: "Interviews, testing, user journeys" },
                    { name: "UI Design", level: 98, desc: "High-impact visual interfaces" },
                    { name: "Design Systems", level: 90, desc: "Scalable and documented systems" },
                    { name: "Prototyping", level: 92, desc: "Interactive prototypes in Figma" },
                    { name: "Information Architecture", level: 85, desc: "Clear structures and intuitive navigation" },
                    { name: "Accessibility (WCAG)", level: 88, desc: "Inclusive design and international standards" }
                ],
                dev: [
                    { name: "Flutter (iOS/Android)", level: 88, desc: "Native cross-platform apps" },
                    { name: "React.js", level: 82, desc: "Modern web interfaces" },
                    { name: "TypeScript", level: 80, desc: "Typed and scalable code" },
                    { name: "HTML / CSS", level: 90, desc: "Advanced markup and styling" },
                    { name: "API REST", level: 78, desc: "API integration and consumption" },
                    { name: "Git / GitHub", level: 85, desc: "Version control and collaboration" }
                ],
                ai: [
                    { name: "Prompt Engineering", level: 92, desc: "Effective prompt design" },
                    { name: "LLM Integration", level: 85, desc: "OpenAI, Gemini, Claude" },
                    { name: "AI Workflow Automation", level: 88, desc: "Process automation with AI" },
                    { name: "Product Strategy", level: 90, desc: "Product vision and roadmap" },
                    { name: "Agile / Scrum", level: 87, desc: "Agile development methodologies" },
                    { name: "Creative Ideation", level: 93, desc: "AI-assisted idea generation" }
                ],
                tools: [
                    { name: "Figma", level: 98, desc: "Design, prototyping, and systems" },
                    { name: "VS Code", level: 90, desc: "Primary development environment" },
                    { name: "Postman", level: 82, desc: "API testing" },
                    { name: "Notion", level: 88, desc: "Documentation and management" },
                    { name: "Docker", level: 72, desc: "Containers and deployment" },
                    { name: "Adobe Suite", level: 85, desc: "Graphic design and multimedia" }
                ]
            }
        },
        workProcess: {
            sectionLabel: "How I Work",
            sectionTitle: "How I build products",
            sectionSubtitle: "An iterative process combining research, agile methodologies, and multidisciplinary collaboration.",
            processSteps: [
                { num: "01", icon: "🔎", title: "Discover", desc: "User interviews and competitive analysis to truly understand the problem." },
                { num: "02", icon: "💡", title: "Define", desc: "Information architecture, user flows, and low-fidelity wireframes." },
                { num: "03", icon: "✨", title: "Design", desc: "Interactive prototyping, design system, and high-impact UI." },
                { num: "04", icon: "🚀", title: "Deliver", desc: "Dev handoff, user testing, and continuous iteration." }
            ],
            pillars: [
                {
                    icon: "🏃",
                    title: "Agile & Scrum",
                    desc: "2–3 week sprints with a prioritized backlog, standups, and retrospectives that maximize delivered value.",
                    tags: ["Sprint Planning", "Story Points", "Retrospectives"]
                },
                {
                    icon: "🤝",
                    title: "Collaboration",
                    desc: "Fluid work with Dev, Product, and Marketing teams. I present design decisions in business impact terms.",
                    tags: ["Dev Handoff", "Stakeholders", "Team Alignment"]
                },
                {
                    icon: "📚",
                    title: "Documentation",
                    desc: "Documented design systems, technical specs, and user flows so any team member can seamlessly continue the work.",
                    tags: ["Design Tokens", "User Journeys", "Dev Specs"]
                }
            ],
            growthCards: [
                {
                    icon: "🌱",
                    title: "Feedback & Growth",
                    desc: "I turn critiques into tangible improvements. I've mentored junior designers, helping them grow in UX/UI and collaborative workflows.",
                    tags: ["Mentoring", "Continuous Improvement", "Leadership"]
                }
            ],
            quote: "'Every design decision must have a 'why' and a 'how'. I design with purpose, execute with precision, and collaborate with empathy.'",
            quoteAuthor: "Francisco Colmenarez"
        },
        nav: {
            whatsapp: "WhatsApp",
            linkedin: "LinkedIn",
            lang: "ES" // Button text to switch TO
        },
        aboutSection: {
            title: "Get to know me in detail",
            greeting: "Hi! I'm Francisco Colmenarez, a professional with a hybrid profile bridging design, development, and AI strategy.",
            intro: "With over 10 years of experience in the design world, I have evolved to consolidate a comprehensive profile. My experience breaks down into:",
            bullet0Bold: "Graphic Designer",
            bullet0Text: ", creating corporate identity, visual content, and producing elements tailored for both digital and physical mediums.",
            bullet1Bold: "More than 4 years as a Product Designer",
            bullet1Text: ", creating intuitive and user-centric digital solutions, from conceptualization to final delivery.",
            bullet2Bold: "More than 2 years as a Mobile Developer specialized in Flutter",
            bullet2Text: ", materializing designs into functional, efficient, and high-performance applications.",
            skillsTitle: "My key competencies include:",
            skill1Bold: "End-to-End Vision:",
            skill1Text: " My approach allows me not only to design the user experience (UI/UX) but also to translate those designs directly into functional and efficient code. This guarantees absolute fidelity to the original vision and speeds up development.",
            skill2Bold: "Agile Methodologies:",
            skill2Text: " I have experience with Scrum and Sprints to ensure synchronized, adaptable, and efficient evolution in every project.",
            skill3Bold: "Innovation with Artificial Intelligence:",
            skill3Text: " I master and strategically apply AI to enhance my capabilities in both design and development. I use it to accelerate creative ideation, generate cleaner code, and optimize workflows.",
            goalBold: "My goal:",
            goalText: " I'm excited to join teams that are building purposeful products. I enjoy collaborating and using my blend of design, code, and AI to solve interesting challenges. If you have such a project, I'd love to chat!"
        },
        busbanzProject: {
            caseStudy: "Case Study",
            title: "Busbanz",
            subtitle: "Student Transportation Platform",
            problemTitle: "The Problem",
            problemText: "Parents lived with constant worry: 'Did my child arrive at school?', 'Who is driving the bus?', 'Why is it so late?'. Meanwhile, drivers dealt with chaotic manual processes: paper lists, disorganized routes, and lack of communication with representatives.",
            researchTitle: "The Research",
            researchText: "We conducted in-depth interviews with representatives, drivers, monitors, and schools. We discovered clear patterns: 89% of parents wanted real-time visibility, while 94% of drivers needed to automate their daily processes.",
            architectureTitle: "Design System Architecture",
            architectureSubtitle: "I developed a scalable and automated design architecture that ensures consistency and efficiency throughout the development process.",
            figmaTitle: "Professional Figma Organization",
            figmaSubtitle: "My methodology reflects years of experience optimizing design flows, facilitating team collaboration and maintenance.",
            visualDesignTitle: "Visual Design & Dual Theme System",
            visualDesignSubtitle: "I developed a Dark Mode and Light Mode system that automatically adapts to user preferences.",
            visualDesignFeatures: [
                { title: "WCAG AA Accessibility", text: "Ensuring optimal readability for all users." },
                { title: "Dual Theme System", text: "Automatic adaptation between Dark and Light Mode." },
                { title: "Reduced Visual Fatigue", text: "Comfortable night use for drivers and parents." },
                { title: "Smooth Transition", text: "Experience without sudden UI shifts." }
            ],
            visualDesignTag: "System-Aware Theme Switching",
            repExperienceTitle: "Experience for Representatives",
            repExperienceSubtitle: "Total peace of mind and control by providing full visibility of transportation.",
            driverExperienceTitle: "Experience for Drivers",
            driverExperienceSubtitle: "Efficiency and Automation transforming their daily work.",
            impactTitle: "The Impact",
            impactText: "Busbanz completely transformed the student transportation experience, providing peace of mind to parents and operational efficiency to drivers. The platform became an indispensable tool for educational institutions looking to offer a modern and reliable transportation service.",
            back: "Back to Home",
            tags: ["UX/UI Design", "Mobile App", "Design Systems", "Figma", "Prototyping"],
            figmaStructureTitle: "Page Structure",
            figmaStructureItems: [
                "Cover & Documentation",
                "Design System & Tokens",
                "Screens by Module",
                "Interactive Demos",
                "Versioning & Iterations"
            ],
            figmaCanvasTitle: "Canvas Organization",
            figmaCanvasItems: [
                "Grid System & Alignment",
                "Naming Convention",
                "Flow Connections",
                "Device Frames Context",
                "Technical Annotations"
            ],
            figmaWorkspaceNote: "Workspace Optimized for Flutter Handoff",
            figmaDemosTitle: "Demos Structure",
            figmaDemosSubtitle: "Prototypes organized for testing and presentation:",
            figmaDemosItems: [
                { title: "Separate User Flows", text: "Demo by user type" },
                { title: "Starting Points", text: "Clear entry points" },
                { title: "Interaction Logic", text: "Logical and natural flows" },
                { title: "Responsive Behavior", text: "Adaptation to different devices" },
                { title: "Micro-interactions", text: "Details that improve the experience" }
            ],
            demoActionTitle: "Demo in Action",
            demoExperienceTitle: "Fluid and Natural Experience",
            demoExperienceText: "This interactive demo showcases the quality and fluidity of the final prototype. Every transition and micro-interaction was carefully designed to create a natural and intuitive experience.",
            demoFeatures: [
                { title: "Fluid Transitions", text: "Smooth animations that guide the user" },
                { title: "Realistic Interactions", text: "Natural interface behavior" },
                { title: "Intuitive Flow", text: "Clear and frictionless navigation" },
                { title: "Immediate Response", text: "Instant visual feedback" }
            ]
        },
        asesoriaProject: {
            caseStudy: "UX/UI Redesign",
            title: "Immigration Advising",
            subtitle: "Law firm specialized in immigration cases",
            liveUrl: "View Website",
            problemTitle: "The Challenge",
            problemText: "The original website did not convey the required professionalism nor made it easy for users to find the information they needed. The challenge was to create an experience that built trust and converted visitors into leads.",
            problemsIdentifiedTitle: "Problems Identified",
            problemsIdentifiedItems: [
                { title: "Lack of Trust", text: "The design did not convey professionalism or legal credibility" },
                { title: "Information Hard to Find", text: "Services and processes were not clearly organized" },
                { title: "Poor Mobile Experience", text: "It wasn't responsive and mobile navigation was confusing" },
                { title: "Weak Call-to-Actions", text: "There was no clear flow to contact or request a consultation" }
            ],
            userStoriesTitle: "User Stories",
            userStoriesItems: [
                { title: "Miguel, Entrepreneur", text: "\"As an entrepreneur needing to renew my work visa, I want to quickly find info on requirements and costs, to make an informed decision on hiring services.\"" },
                { title: "Carmen, Mother", text: "\"As a mother seeking family reunification, I need to understand the step-by-step process and feel trust in the lawyer, to ensure my family can be together.\"" },
                { title: "Alex, Student", text: "\"As an international student, I want to easily access info on status change from my mobile, to plan my academic and professional future.\"" }
            ],
            transformationTitle: "Before vs After: Visual Transformation",
            transformationText: "The side-by-side comparison clearly shows the design evolution, from a disorganized interface to a professional, user-centric experience.",
            transformationProblems: ["Outdated design", "Confusing navigation", "Lack of visual hierarchy", "Not responsive", "Barely visible CTAs"],
            transformationSolutions: ["Modern, professional design", "Intuitive navigation", "Clear visual hierarchy", "Fully responsive", "Prominent CTAs"],
            architectureTitle: "Information Architecture Restructuring",
            architectureText: "With over 50 pages scattered without clear logic, users got lost looking for info. We did a full UX-based restructure.",
            archBeforeItems: ["Service Duplication", "Confusing hierarchy", "Cognitive overload", "Not mobile-optimized"],
            archAfterItems: ["Organization by countries", "Clear linear process", "Intuitive navigation", "Mobile-first design"],
            journeyTitle: "User Journey Optimization",
            journeyItems: [
                { title: "Country Selection", text: "User chooses specific jurisdiction right from the start" },
                { title: "Service Type", text: "Services filtered by selected country" },
                { title: "Detailed Info", text: "Specific content with clear CTAs" },
                { title: "Contact/Consultation", text: "Multiple conversion options" }
            ],
            solutionsTitle: "Implemented Solutions",
            solutionsItems: [
                { title: "Professional Design", text: "Color palette that conveys trust and legal seriousness." },
                { title: "Intuitive Navigation", text: "Reorganization with clear menus and breadcrumbs." },
                { title: "Mobile First", text: "Optimized for the 70% of traffic." },
                { title: "Strategic CTAs", text: "Prominent action buttons and optimized forms." }
            ],
            impactTitle: "Redesign Results",
            impactText: "Consultations increased by 340% in the first 3 months, and user satisfaction improved significantly. The site now builds trust and facilitates conversions.",
            resultsTitle: "Redesign Results",
            resultsCards: [
                { label: "Conversion Rate", badge: "+278% improvement" },
                { label: "Bounce Time", badge: "-61% reduction" },
                { label: "Pages per Session", badge: "+133% increase" },
                { label: "Mobile Traffic", badge: "+144% improvement" }
            ],
            resultsText: "The redesign completely transformed the firm's digital presence.",
            resultsHighlight: "Consultations increased by 340%",
            resultsTextEnd: "in the first 3 months, and user satisfaction improved significantly according to usability metrics. The site now builds trust and helps users find the information they need to make important decisions about their immigration cases.",
            methodologyTitle: "Methodology & Tools",
            methodologyCategories: [
                { title: "UX Research", tools: ["User Interviews", "Competitive Analysis", "Heuristic Evaluation", "User Journey Mapping"] },
                { title: "UI Design", tools: ["Figma", "Design System", "Prototyping", "Responsive Design"] },
                { title: "Validation", tools: ["A/B Testing", "Usability Testing", "Analytics Tracking", "Performance Monitoring"] }
            ],
            back: "Back to Home",
            tags: ["UX Research", "UI Design", "Information Architecture", "Figma", "Web"]
        }
    }
};

export type Language = 'es' | 'en';
export type TranslationState = typeof translations.es;
