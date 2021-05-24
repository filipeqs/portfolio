import { v4 as uuidv4 } from 'uuid';

// Hero
export const heroData = {
    title: '',
    name: '',
    subtitle: '',
    cta: '',
};

// About
export const aboutData = {
    img: '../assets/profile.jpg',
    paragraphOne: '',
    paragraphTwo: '',
    paragraphThree: '',
    resume: '../assets/resume.pdf', // if no resume, the button will not show up
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
