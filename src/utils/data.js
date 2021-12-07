import images from './images'
import SVGHTML from '../assets/img/html-5.svg';
import SVGCSS from '../assets/img/css.svg'
import SVGJS from '../assets/img/javascript.svg'
import SVGREACT from '../assets/img/react (1).svg'
import SVGSASS from '../assets/img/sass.svg'
import NODE from '../assets/img/nodejs.png'


export const PROJECTS_DATA = [
    {
        id: 1,
        url: 'https://github.com/matias-rojas-dev/react-sia-project',
        name: 'Press on Nails',
        imgUrl: images['project-01'],
        //imgUrl: 'https://i.ibb.co/K6Q2pVq/project-01.jpg',
        body: 'Pyme dedicada al rubro de la belleza y cosmética'
    },
    {
        id: 2,
        url: 'https://github.com/matias-rojas-dev/react-app-redux',
        name: 'Buscador de libros',
        imgUrl: images['project-02'],
        //imgUrl: 'https://i.ibb.co/ZL3FvKk/project-02.jpg',
        body: 'Proyecto final de academía de desarrollo'
    },
    {
        id: 3,
        url: 'https://github.com/matias-rojas-dev/react-journal-app',
        name: 'Agenda online',
        imgUrl: images['project-03'],
        //imgUrl: 'https://i.ibb.co/NmzVrwy/project-03.jpg',
        body: 'Aplicación que almacena notas y recordatorios'
    },
    {
        id: 4,
        url: 'https://github.com/matias-rojas-dev/lyric-app-curso-react',
        name: 'Buscador de música',
        imgUrl: images['project-04'],
        //imgUrl: 'https://i.ibb.co/XC24HM5/project-04.jpg',
        body: 'Aplicación de consumo de API que busca letra de canciones'
    },
    {
        id: 5,
        url: 'https://github.com/matias-rojas-dev/app-nutricional',
        name: 'Aplicación nutricional',
        imgUrl: images['project-05'],
        //imgUrl: 'https://i.ibb.co/NyY7cyf/project-05.jpg',
        body: 'Aplicación que permite buscar recetas'
    },
    {
        id: 6,
        url: 'https://github.com/matias-rojas-dev/node-devJobs',
        name: 'Buscador con Node',
        imgUrl: images['project-06'],
        //imgUrl: 'https://i.ibb.co/YbyPrPs/project-06.jpg',
        body: 'Buscador de trabajos'
    },
    {
        id: 7,
        url: 'https://github.com/matias-rojas-dev/node-uptakst',
        name: 'CRUD con Node',
        imgUrl: images['project-07'],
        body: 'Web de tareas con login y uso de CRUD',
    },
    {
        id: 8,
        url: 'https://https://github.com/matias-rojas-dev/node-meetiApp',
        name: 'Clon de Meeti',
        imgUrl: images['project-08'],
        body: 'Clon de Meeti con login y uso de CRUD',
    }
]

export const SKILLS_DATA = [
    {
        id: 1,
        name: "HTML",
        imgUrl: SVGHTML
    }, {
        id: 2,
        name: "CSS",
        imgUrl: SVGCSS
    },
    {
        id: 3,
        name: "JS",
        imgUrl: SVGJS
    },
    {
        id: 4,
        name: "REACT",
        imgUrl: SVGREACT
    },
    {
        id: 5,
        name: "SASS",
        imgUrl: SVGSASS
    },
    {
        id: 6,
        name: "NODE",
        imgUrl: NODE
    }

]


export const CERTIFICATIONS = [
    {
        id: 1,
        name: "React JS Developer - Credly",
        school: "Escalab Academy",
        img: images.escalab,
        url: 'https://www.credly.com/badges/2eebc38e-81ee-46e4-b5c4-0148a1189113/public_url',
    },
    {
        id: 2,
        name: "Frontend Developer React JS",
        school: "Escalab Academy",
        img: images.escalab,
        url: ' https://escalab.academy/certificados/react/gen5/certificado-de-aprobacion-matias-ignacio-rojas-rojas-EARG5-Escalab-reactjs-Gen5-19.pdf',
    },
    {
        id: 3,
        name: "Diseño Web Profesional El ...",
        school: "Udemy",
        img: images.udemy,
        url: 'https://www.udemy.com/certificate/UC-cdca200d-45b7-412f-ab19-40f9202e9a81/'
    },
    {
        id: 4,
        name: "Cursando Ing. civil en Computación",
        school: "UTEM",
        img: images.utem,
        url: 'https://fing.utem.cl/carreras-ingreso-psu/ingenieria-civil-en-computacion-mencion-informatica/'
    },
]
