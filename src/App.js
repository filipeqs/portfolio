import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero';

import { PortfolioProvider } from './context/context';

import About from './sections/About';
import Projects from './sections/Projects';
import Footer from './layout/Footer';
import Contact from './sections/Contact';

import { heroData, aboutData, footerData, contactData, projectsData } from './data/data';

const App = () => {
    const [hero, setHero] = useState({});
    const [about, setAbout] = useState({});
    const [projects, setProjects] = useState([]);
    const [contact, setContact] = useState({});
    const [footer, setFooter] = useState({});

    useEffect(() => {
        setHero({ ...heroData });
        setAbout({ ...aboutData });
        setProjects([...projectsData]);
        setContact({ ...contactData });
        setFooter({ ...footerData });
    }, []);

    return (
        <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </PortfolioProvider>
    );
};

export default App;
