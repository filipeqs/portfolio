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
    img: `${process.env.PUBLIC_URL}/img/profile.jpg`,
    paragraphOne:
        'Full Stack Web Developer with about two years of experience in web development. Seeking a motivating and innovative company to challenge and allow me to continue learning and building skill set and expertise.',
    paragraphTwo: '',
    paragraphThree: '',
    resume: `${process.env.PUBLIC_URL}/assets/resume.pdf`, // if no resume, the button will not show up
};

// Projects
export const projectsData = [
    {
        id: uuidv4(),
        icons: [
            {
                img: `${process.env.PUBLIC_URL}/icons/csharp.png`,
                title: 'C#',
                link: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
            },
            {
                img: `${process.env.PUBLIC_URL}/icons/angular.png`,
                title: 'Angular',
                link: 'https://angular.io/',
            },
            {
                img: `${process.env.PUBLIC_URL}/icons/postgresql.png`,
                title: 'PostgreSQL',
                link: 'https://www.postgresql.org/',
            },
            {
                img: `${process.env.PUBLIC_URL}/icons/bootstrap.png`,
                title: 'Bootstrap',
                link: 'https://getbootstrap.com/',
            },
        ],
        img: `${process.env.PUBLIC_URL}/img/datingapp.png`,
        title: 'Dating App',
        info: 'Social',
        info2: 'Dating app where users can like other users, see who liked them and send messages.',
        url: 'https://filipe-datingapp.herokuapp.com/',
        repo: 'https://github.com/filipeqs/DatingApp',
    },
    {
        id: uuidv4(),
        icons: [
            {
                img: `${process.env.PUBLIC_URL}/icons/react.png`,
                title: 'ReactJs',
                link: 'https://reactjs.org/',
            },
            {
                img: `${process.env.PUBLIC_URL}/icons/redux.png`,
                title: 'Redux',
                link: 'https://react-redux.js.org/',
            },
            {
                img: `${process.env.PUBLIC_URL}/icons/nodejs.png`,
                title: 'NodeJs',
                link: 'https://nodejs.org/en/',
            },
            {
                img: `${process.env.PUBLIC_URL}/icons/mongodb.png`,
                title: 'MongoDB',
                link: 'https://www.mongodb.com/',
            },
            {
                img: `${process.env.PUBLIC_URL}/icons/bootstrap.png`,
                title: 'Bootstrap',
                link: 'https://getbootstrap.com/',
            },
            {
                img: `${process.env.PUBLIC_URL}/icons/sass.png`,
                title: 'Sass',
                link: 'https://sass-lang.com/',
            },
        ],
        img: `${process.env.PUBLIC_URL}/img/dev-connector.png`,
        title: 'DevConnector',
        info: 'Blog',
        info2: 'Blog app for developers where users are able to create a profile, create posts and interact with other developers.',
        url: 'https://filipe-dev-connector.herokuapp.com/',
        repo: 'https://github.com/filipeqs/dev-connector',
    },
    {
        id: uuidv4(),
        icons: [
            {
                img: `${process.env.PUBLIC_URL}/icons/react.png`,
                title: 'ReactJs',
                link: 'https://reactjs.org/',
            },
            {
                img: `${process.env.PUBLIC_URL}/icons/redux.png`,
                title: 'Redux',
                link: 'https://react-redux.js.org/',
            },
            {
                img: `${process.env.PUBLIC_URL}/icons/nodejs.png`,
                title: 'NodeJs',
                link: 'https://nodejs.org/en/',
            },
            {
                img: `${process.env.PUBLIC_URL}/icons/mongodb.png`,
                title: 'MongoDB',
                link: 'https://www.mongodb.com/',
            },
            {
                img: `${process.env.PUBLIC_URL}/icons/bootstrap.png`,
                title: 'Bootstrap',
                link: 'https://getbootstrap.com/',
            },
            {
                img: `${process.env.PUBLIC_URL}/icons/sass.png`,
                title: 'Sass',
                link: 'https://sass-lang.com/',
            },
        ],
        img: `${process.env.PUBLIC_URL}/img/shoeshop.png`,
        title: 'Proshop',
        info: 'ECommerce website',
        info2: 'Full featured shopping cart with PayPal & credit/debit payments. Admin area to manage customers, products & orders. Product search, carousel, pagination & more.',
        url: 'https://filipe-shoeshop.herokuapp.com/',
        repo: 'https://github.com/filipeqs/shoeshop',
    },
];

// Contact
export const contactData = {
    cta: 'Would you like to get in touch with me?',
    btn: 'Send Email',
    email: 'filipeqs@outlook.com',
};

// Footer
export const footerData = {
    networks: [
        {
            id: uuidv4(),
            name: 'facebook',
            url: 'https://www.facebook.com/filipeqs92',
        },
        {
            id: uuidv4(),
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/filipe-silva-775464b6/',
        },
        {
            id: uuidv4(),
            name: 'github',
            url: 'https://github.com/filipeqs',
        },
    ],
};
