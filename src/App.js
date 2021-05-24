import React, { useState, useEffect } from 'react';
import { PortfolioProvider } from './context/context';

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
        <PortfolioProvider value={{ hero, about, projects, contact, footer }}></PortfolioProvider>
    );
};

export default App;
