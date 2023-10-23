import firebaseLogo from '../utilities/logos/firebase.jpeg';
import javascriptLogo from '../utilities/logos/javascript.png';
import nextuiLogo from '../utilities/logos/nextui.png';
import reduxLogo from '../utilities/logos/redux.png';
import routerLogo from '../utilities/logos/router.png';
import tailwindLogo from '../utilities/logos/tailwind.png';
import typescriptLogo from '../utilities/logos/typescript.png';
import vitejsLogo from '../utilities/logos/vitejs.jpeg';

import '../styles/bounce.css';

const technologies = [
    {
        name: 'TypeScript',
        description: 'TypeScript is a superset of JavaScript that adds static typing.',
        img: typescriptLogo,
        url: 'https://www.typescriptlang.org/'
    },
    {
        name: 'JavaScript (ES6+)',
        description: 'JavaScript is a widely used programming language in web development.',
        img: javascriptLogo,
        url: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
    },
    {
        name: 'React Redux RTK',
        description: 'Predictable state manager for JavaScript applications.',
        img: reduxLogo,
        url: 'https://redux-toolkit.js.org/'
    },
    {
        name: 'React Router 6',
        description: 'Router for single-page applications in React.',
        img: routerLogo,
        url: 'https://reactrouter.com/en/main'
    },
    {
        name: 'Vite.js',
        description: 'Bundler and rapid development environment for modern web applications.',
        img: vitejsLogo,
        url: 'https://vitejs.dev/'
    },
    {
        name: 'Firebase',
        description: 'Platform for mobile and web application development.',
        img: firebaseLogo,
        url: 'https://firebase.google.com/?hl=es'
    },
    {
        name: 'NextUI',
        description: 'NextUI is a Beautiful, fast and modern React UI library.',
        img: nextuiLogo,
        url: 'https://nextui.org/'
    },
    {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework.',
        img: tailwindLogo,
        url: 'https://tailwindcss.com/'
    },
];

export const CardItem = () => {
    return (
        <>
            {technologies.map(({ name, description, url, img }) => (
                <div key={name} className="u--bounceIn shadow-xl rounded-lg p-2 text-center text-gray-500 dark:text-gray-400">
                    <a target="_blank" href={url}>
                        <img loading="lazy" className="mx-auto mb-4 w-20 h-20 rounded-lg" src={img} alt={`image ${name}`} />
                    </a>
                    <h3 className="hover:text-blue-500 mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a target="_blank" href={url}>{name}</a>
                    </h3>
                    <p>{description}</p>
                </div>
            ))}
        </>
    );
}
