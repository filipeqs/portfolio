import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../context/context';

const Hero = () => {
    const { hero } = useContext(PortfolioContext);
    const { title, name, subtitle, cta } = hero;

    return (
        <section id="hero">
            <Container>
                <Fade left duration={1000} delay={500} distance="30px">
                    <h1 className="hero-title">
                        {title || 'Hi, my name is'}{' '}
                        <span className="text-color-main">{name || 'Your Name'}</span>
                        <br />
                        {subtitle || "I'm the Unknown Developer."}
                    </h1>
                </Fade>
                <Fade bottom duration={1000} delay={1000} distance="30px">
                    <p className="hero-cta">
                        <span className="cta-btn cta-btn--hero">
                            <Link to="about" smooth duration={1000}>
                                {cta || 'Know more'}
                            </Link>
                        </span>
                    </p>
                </Fade>
            </Container>
        </section>
    );
};

export default Hero;
