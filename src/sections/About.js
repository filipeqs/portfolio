import React, { useContext } from 'react';

import PortfolioContext from '../context/context';

const About = () => {
    const { about } = useContext(PortfolioContext);
    console.log(about);

    return <div>About</div>;
};

export default About;
