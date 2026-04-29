const translations = {
    it: {
        // NAVBAR
        home: 'Home',
        approccio: 'Approccio',
        progetti: 'Progetti',
        competenze: 'Competenze',
        faq: 'FAQ',

        // HERO
        location: 'Full-Stack Developer · Modena, Italia',
        heroTitle: 'Ciao, sono Lucia<br>Sviluppatrice Full-Stack neolaureata.',
        heroDesc: 'Creo <strong>web app moderne</strong> e <strong>siti web strategici</strong> con React, TypeScript, Node.js e Firebase. <br><br>Qui troverai i miei progetti personali, le competenze tecniche e come posso contribuire al tuo team.',
        explorProjects: 'Esplora i Miei Progetti',

        // APPROCCIO SECTION
        myApproach: 'Il Mio <span style="color: var(--accent-color);">Approccio</span>',
        approachIntro: 'Non creo solo "codice". Sviluppo soluzioni pensate per essere mantenibili, scalabili e orientate alla qualità. Ecco i pilastri del mio lavoro.',
        cleanCode: 'Codice Pulito',
        cleanCodeDesc: 'Scrivo codice leggibile, testabile e facile da mantenere. Seguo best practice moderne e convenzioni di settore.',
        userFirst: 'User-First Design',
        userFirstDesc: 'Sviluppo interfacce responsabili e intuitive, pensate per offrire la migliore esperienza su tutti i dispositivi.',
        performance: 'Performance & Affidabilità',
        performanceDesc: 'Ottimizziamo le applicazioni per velocità, SEO e robustezza. Perché il codice deve funzionare sempre, ovunque.',

        // PROGETTI SECTION
        myProjects: 'I Miei Progetti',
        projectsSubtitle: 'Progetti personali sviluppati end-to-end, dalla progettazione al deployment.',
        visitSite: 'Visita il Sito',
        visitWebApp: 'Visita la Web App',
        thesis: 'Progetto di Tesi',
        ferrariHub: 'Ferrari Sustainability Hub',
        ferrariDesc: 'Piattaforma web per la consultazione e il download dei report ufficiali di sostenibilità di Ferrari. Progetto realizzato come tesi di laurea con focus su accessibilità e user experience.',
        fitnessManager: 'Fitness Studio Manager',
        fitnessDesc: 'Web app full-stack per la gestione di una palestra: dashboard amministrativa, costruttore di schede di allenamento con layout di stampa e gestione completa dei clienti.',
        myPersonalGym: 'My Personal Gym',
        gymDesc: 'Web app pensata per l\'uso diretto in palestra. Gestione clienti, monitoraggio progressi e schede di allenamento interattive a portata di smartphone.',
        bellaNapoli: 'Bella Napoli Premium',
        bellaNapoliDesc: 'Piattaforma avanzata per la gestione degli ordini e menù digitale interattivo. Un\'esperienza fluida e premium per i clienti della pizzeria.',
        sisModena: 'SIS Modena — Carpenteria Metallica',
        sisModenaDesc: 'Sito per carpenteria metallica B2B: galleria progetti reali, sezione certificazioni e form preventivo rapido per acquisire lead.',

        // CHI SIAMO SECTION
        aboutMe: 'Su di Me',
        techUsed: 'Tecnologie usate',
        fullStack: 'Full-Stack Developer',
        degree: 'Laurea Triennale',
        english: 'Inglese Fluente',
        aboutText: 'Sono Lucia, <strong>sviluppatrice Full-Stack neolaureata</strong> in Informatica per le Aziende Digitali presso l\'Università Telematica Pegaso. <br><br>La mia passione è creare applicazioni web moderne, scalabili e user-friendly. Sono autonoma nell\'intero ciclo di sviluppo: dalla progettazione architettonica al deployment, sempre con un approccio orientato alla qualità e alla semplicità del codice. <br><br>Attualmente sto approfondendo i temi di <strong>intelligenza artificiale</strong> attraverso il programma AI Skills 4 Women di Microsoft e Founderz. Sono sempre entusiasta di imparare nuove tecnologie e di collaborare con team dinamici per creare soluzioni innovative.',

        // COMPETENZE SECTION
        skills: 'Competenze Tecniche',
        frontend: 'Frontend',
        frontendSkills: 'React 18+, React Native, TypeScript, HTML5, CSS3, Tailwind CSS, Vite, Framer Motion',
        backend: 'Backend & APIs',
        backendSkills: 'Node.js, Express.js, REST API, autenticazione e gestione sessioni',
        database: 'Database & Cloud',
        databaseSkills: 'Firebase (Firestore, Authentication, Storage), Supabase, SQL, GitHub Pages, Netlify',
        tools: 'Tools & Metodologie',
        toolsSkills: 'VS Code, Responsive Design, SEO, PWA, AI & Prompt Engineering',
        languages: 'Lingue',
        languagesSkills: 'Italiano (madrelingua) · Inglese (C1 — livello avanzato)',

        // FAQ SECTION
        faqTitle: 'Domande Frequenti',
        faqIntro: 'Domande che potrebbero interessare chi mi sta valutando per un ruolo.',
        q1: 'Qual è il tuo background formativo?',
        a1: 'Mi sono laureata nel <strong>Ottobre 2025</strong> in <strong>Informatica per le Aziende Digitali</strong> presso l\'Università Telematica Pegaso. Durante il corso ho affrontato algoritmi, basi di dati, ingegneria del software e sviluppo web full-stack. Ho realizzato numerosi progetti end-to-end con React, Node.js, Firebase e Supabase.',
        q2: 'Quali sono le tue tecnologie preferite?',
        a2: 'Sono specializzata in <strong>React.js</strong> per il frontend (con TypeScript), <strong>Node.js/Express</strong> per il backend, <strong>Firebase</strong> e <strong>Supabase</strong> per database e cloud. Utilizzo <strong>Tailwind CSS</strong> per lo styling moderno e <strong>Vite</strong> come build tool. Attualmente sto sviluppando anche app per mobile in <strong>React Native</strong>.',
        q3: 'Lavori in team o preferisci autonomamente?',
        a3: 'Mi piace entrambi! Sono autonoma nell\'intero ciclo di sviluppo (da zero al deploy), ma lavoro benissimo in team. Comunico fluidamente in <strong>Inglese (C1)</strong>, uso Git per la collaborazione e seguo best practice di codice pulito e documentazione. Apprezzo il feedback e imparo velocemente dalle esperienze condivise.',
        q4: 'Quali sono i tuoi punti di forza come sviluppatrice?',
        a4: 'Attenzione alla <strong>qualità del codice</strong>, problem-solving creativo, <strong>responsabilità</strong> e voglia di imparare. Creo applicazioni scalabili e mantenibili, mi preoccupo della <strong>user experience</strong> oltre che della logica backend, e sono proattiva nel cercare soluzioni ottimali. Apprezzo la semplicità nel codice e la documentazione chiara.',
        q5: 'Hai esperienza con deployment e DevOps?',
        a5: 'Sì! Ho deployato progetti su <strong>Netlify</strong>, <strong>Firebase Hosting</strong>, <strong>GitHub Pages</strong> e <strong>Expo</strong> per React Native. Ho familiarità con <strong>GitHub Actions</strong> per CI/CD, gestione delle variabili d\'ambiente e ottimizzazione per la produzione. Continuo a migliorare in questo ambito perché lo trovo affascinante.',

        // FORMAZIONE SECTION
        education: 'Formazione & Certificazioni',
        degreeName: 'Laurea Triennale in Informatica per le Aziende Digitali',
        university: 'Università Telematica Pegaso',
        graduationDate: 'Ottobre 2025',
        aiSkills: 'AI Skills 4 Women',
        aiPartners: 'Microsoft & Founderz',
        aiStatus: 'In Corso (Aprile 2026)',
    },
    en: {
        // NAVBAR
        home: 'Home',
        approccio: 'Approach',
        progetti: 'Projects',
        competenze: 'Skills',
        faq: 'FAQ',

        // HERO
        location: 'Full-Stack Developer · Modena, Italy',
        heroTitle: 'Hi, I\'m Lucia<br>A newly graduated Full-Stack Developer.',
        heroDesc: 'I build <strong>modern web apps</strong> and <strong>strategic websites</strong> with React, TypeScript, Node.js and Firebase. <br><br>Here you\'ll find my personal projects, technical skills and how I can contribute to your team.',
        explorProjects: 'Explore My Projects',

        // APPROCCIO SECTION
        myApproach: 'My <span style="color: var(--accent-color);">Approach</span>',
        approachIntro: 'I don\'t just write "code". I develop solutions designed to be maintainable, scalable and quality-driven. Here are the pillars of my work.', // ✏️ quality-oriented → quality-driven
        cleanCode: 'Clean Code',
        cleanCodeDesc: 'I write readable, testable and easy-to-maintain code. I follow modern best practices and industry conventions.',
        userFirst: 'User-First Design',
        userFirstDesc: 'I develop responsive and intuitive interfaces, designed to provide the best experience across all devices.',
        performance: 'Performance & Reliability',
        performanceDesc: 'I optimize applications for speed, SEO and robustness. Because code must always work, everywhere.', // ✏️ We → I / work always → always work

        // PROGETTI SECTION
        myProjects: 'My Projects',
        projectsSubtitle: 'Personal projects developed end-to-end, from design to deployment.',
        visitSite: 'View Live Site',
        visitWebApp: 'View Live Web App',
        thesis: 'Thesis Project',
        ferrariHub: 'Ferrari Sustainability Hub',
        ferrariDesc: 'Web platform for consulting and downloading Ferrari\'s official sustainability reports. A thesis project focused on accessibility and user experience.',
        fitnessManager: 'Fitness Studio Manager',
        fitnessDesc: 'Full-stack web app for managing a gym: administrative dashboard, workout plan builder with print layout and complete client management.',
        myPersonalGym: 'My Personal Gym',
        gymDesc: 'Web app designed for direct use in the gym. Client management, progress monitoring and interactive workout plans at your fingertips.',
        bellaNapoli: 'Bella Napoli Premium',
        bellaNapoliDesc: 'Advanced platform for order management and interactive digital menu. A smooth and premium experience for pizzeria customers.',
        sisModena: 'SIS Modena — Metal Carpentry',
        sisModenaDesc: 'B2B website for metal carpentry: gallery of real projects, certifications section and quick quote form to acquire leads.',

        // CHI SIAMO SECTION
        aboutMe: 'About Me',
        techUsed: 'Technologies Used',
        fullStack: 'Full-Stack Developer',
        degree: 'Bachelor\'s Degree',
        english: 'Fluent English',
        aboutText: 'I\'m Lucia, a <strong>newly graduated Full-Stack Developer</strong> with a degree in Computer Science from Pegaso Telematic University. <br><br>My passion is creating modern, scalable and user-friendly web applications. I\'m independent in the entire development cycle: from architectural design to deployment, always with an approach oriented to code quality and simplicity. <br><br>I\'m currently deepening my knowledge of <strong>artificial intelligence</strong> through Microsoft and Founderz\'s AI Skills 4 Women program. I\'m always enthusiastic about learning new technologies and collaborating with dynamic teams to create innovative solutions.', // ✏️ developer in Computer Science → with a degree in Computer Science

        // COMPETENZE SECTION
        skills: 'Technical Skills',
        frontend: 'Frontend',
        frontendSkills: 'React 18+, React Native, TypeScript, HTML5, CSS3, Tailwind CSS, Vite, Framer Motion',
        backend: 'Backend & APIs',
        backendSkills: 'Node.js, Express.js, REST API, authentication and session management',
        database: 'Database & Cloud',
        databaseSkills: 'Firebase (Firestore, Authentication, Storage), Supabase, SQL, GitHub Pages, Netlify',
        tools: 'Tools & Methodologies',
        toolsSkills: 'VS Code, Responsive Design, SEO, PWA, AI & Prompt Engineering',
        languages: 'Languages',
        languagesSkills: 'Italian (native) · English (C1 — advanced level)',

        // FAQ SECTION
        faqTitle: 'Frequently Asked Questions',
        faqIntro: 'Questions that might interest those evaluating me for a role.',
        q1: 'What is your educational background?',
        a1: 'I graduated in <strong>October 2025</strong> with a degree in <strong>Computer Science</strong> from Pegaso Telematic University. During my studies, I covered algorithms, databases, software engineering and full-stack web development. I\'ve completed numerous end-to-end projects with React, Node.js, Firebase and Supabase.', // ✏️ "graduated in CS" → "with a degree in CS" / "During the course I studied" → "During my studies, I covered"
        q2: 'What are your favorite technologies?',
        a2: 'I specialize in <strong>React.js</strong> for frontend (with TypeScript), <strong>Node.js/Express</strong> for backend, <strong>Firebase</strong> and <strong>Supabase</strong> for database and cloud. I use <strong>Tailwind CSS</strong> for modern styling and <strong>Vite</strong> as a build tool. I\'m currently also developing mobile apps with <strong>React Native</strong>.',
        q3: 'Do you prefer working in a team or independently?', // ✏️ grammatica corretta
        a3: 'I like both! I can handle the entire development cycle independently (from scratch to deployment), but I thrive in team environments. I communicate fluently in <strong>English (C1)</strong>, use Git for collaboration and follow clean code and documentation best practices. I appreciate feedback and learn quickly from shared experiences.', // ✏️ "I'm independent in..." → "I can handle... independently" / "I work very well in teams" → "I thrive in team environments"
        q4: 'What are your strengths as a developer?',
        a4: 'Attention to <strong>code quality</strong>, creative problem-solving, <strong>responsibility</strong> and eagerness to learn. I create scalable and maintainable applications, I care about <strong>user experience</strong> as much as backend logic, and I\'m proactive in seeking optimal solutions. I value simplicity in code and clear documentation.',
        q5: 'Do you have deployment and DevOps experience?',
        a5: 'Yes! I\'ve deployed projects on <strong>Netlify</strong>, <strong>Firebase Hosting</strong>, <strong>GitHub Pages</strong> and <strong>Expo</strong> for React Native. I\'m familiar with <strong>GitHub Actions</strong> for CI/CD, environment variable management and production optimization. I continue to improve in this area because I find it fascinating.',

        // FORMAZIONE SECTION
        education: 'Education & Certifications',
        degreeName: 'Bachelor\'s Degree in Computer Science', // ✏️ "Digital IT for Companies" → "Computer Science"
        university: 'Pegaso Telematic University',
        graduationDate: 'October 2025',
        aiSkills: 'AI Skills 4 Women',
        aiPartners: 'Microsoft & Founderz',
        aiStatus: 'In Progress (April 2026)',
    }
};
