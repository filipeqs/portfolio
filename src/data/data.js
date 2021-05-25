import { v4 as uuidv4 } from 'uuid';

// Hero
export const heroData = {
    title: '',
    name: 'Filipe Silva',
    subtitle: 'Full Stack Web Developer',
    cta: '',
};

// About
export const aboutData = {
    img: '/img/profile.jpg',
    paragraphOne:
        'Full Stack .Net Developer with about three years of experience in web development. Seeking a motivating and innovative company to challenge and allow me to continue learning and building skill set and expertise.',
    paragraphTwo: '',
    paragraphThree: '',
    resume: '/assets/resume.pdf', // if no resume, the button will not show up
};

// Projects
export const projectsData = [
    {
        id: uuidv4(),
        img: '../assets/dev-connector.png',
        title: 'DevConnector',
        info: 'Blog app for developers where users are able to create a profile, create posts and interact with other developers.',
        info2: '',
        url: 'https://filipe-dev-connector.herokuapp.com/',
        repo: 'https://github.com/filipeqs/dev-connector',
    },
];

// Contact
export const contactData = {
    cta: '',
    btn: '',
    email: '',
};

// Footer
export const footerData = {
    networks: [
        {
            id: uuidv4(),
            name: 'twitter',
            url: '',
        },
        {
            id: uuidv4(),
            name: 'codepen',
            url: '',
        },
        {
            id: uuidv4(),
            name: 'linkedin',
            url: '',
        },
        {
            id: uuidv4(),
            name: 'github',
            url: '',
        },
    ],
};
