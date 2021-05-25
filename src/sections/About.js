import React, { useContext } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import PortfolioContext from '../context/context';

import Title from '../components/Title';

const About = () => {
    const { about } = useContext(PortfolioContext);
    const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

    return (
        <section id="about">
            <Container>
                <Title title="About me" />
                <Row className="about-wrapper">
                    <Col md={6} sm={12}>
                        <Fade bottom duration={1000} delay={600} distance="30px">
                            <Image src={img} alt="profile" className="shadow-lg" roundedCircle />
                        </Fade>
                    </Col>
                    <Col md={6} sm={12}>
                        <Fade left duration={1000} delay={1000} distance="30px">
                            <div className="about-wrapper__info">
                                <p className="about-wrapper__info-text">
                                    {paragraphOne ||
                                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                                </p>
                                <p className="about-wrapper__info-text">{paragraphTwo || ''}</p>
                                <p className="about-wrapper__info-text">{paragraphThree || ''}</p>
                                {resume && (
                                    <span className="d-flex mt-3">
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cta-btn cta-btn--resume"
                                            href={resume}
                                        >
                                            Resume
                                        </a>
                                    </span>
                                )}
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
