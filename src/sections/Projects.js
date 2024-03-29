import React, { useContext } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import Tilt from 'react-tilt';
import Fade from 'react-reveal/Fade';

import PortfolioContect from '../context/context';

import Title from '../components/Title';

const Projects = () => {
    const { projects } = useContext(PortfolioContect);

    return (
        <section id="projects">
            <Container>
                <div className="project-wrapper">
                    <Title title="Projects" />
                    {projects.map((project) => {
                        const { title, icons, info, info2, url, repo, img, id } = project;
                        return (
                            <Row key={id}>
                                <Col lg={4} sm={12}>
                                    <Fade left duration={1000} delay={500} distance="30px">
                                        <div className="project-wrapper__text">
                                            <h3 className="project-wrapper__text-title">
                                                {title || 'Project Title'}
                                            </h3>

                                            <div className="project__icon-container">
                                                {icons.map(({ img, title, link }, i) => (
                                                    <a
                                                        href={link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Image
                                                            key={i}
                                                            title={title}
                                                            alt={'icon'}
                                                            fluid
                                                            src={img}
                                                            className="project__icon"
                                                        />
                                                    </a>
                                                ))}
                                            </div>

                                            <div>
                                                <p>
                                                    {info ||
                                                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                                                </p>
                                                <p className="mb-4">{info2 || ''}</p>
                                            </div>

                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="cta-btn cta-btn--hero"
                                                href={url || '#!'}
                                            >
                                                See Live
                                            </a>

                                            {repo && (
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="cta-btn text-color-main"
                                                    href={repo}
                                                >
                                                    Source Code
                                                </a>
                                            )}
                                        </div>
                                    </Fade>
                                </Col>
                                <Col lg={8} sm={12}>
                                    <Fade right duration={1000} delay={1000} distance="30px">
                                        <div className="project-wrapper__image">
                                            <a
                                                href={url || '#!'}
                                                target="_blank"
                                                aria-label="Project Link"
                                                rel="noopener noreferrer"
                                            >
                                                <Tilt
                                                    options={{
                                                        reverse: false,
                                                        max: 8,
                                                        perspective: 1000,
                                                        scale: 1,
                                                        speed: 300,
                                                        transition: true,
                                                        axis: null,
                                                        reset: true,
                                                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                                                    }}
                                                >
                                                    <div data-tilt className="thumbnail rounded">
                                                        <Image alt={title} fluid src={img} />
                                                    </div>
                                                </Tilt>
                                            </a>
                                        </div>
                                    </Fade>
                                </Col>
                            </Row>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default Projects;
