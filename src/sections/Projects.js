import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';

import PortfolioContect from '../context/context';

import Title from '../components/Title';

const Projects = () => {
    const { projects } = useContext(PortfolioContect);
    console.log(projects);

    return (
        <section id="projects">
            <Container>
                <div className="project-wrapper">
                    <Title title="Projects" />
                </div>
            </Container>
        </section>
    );
};

export default Projects;
