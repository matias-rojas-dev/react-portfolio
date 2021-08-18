import Project01 from '../assets/img/project-01.JPG';
import Project02 from '../assets/img/project-02.JPG';
import Project03 from '../assets/img/project-03.JPG';
import Project04 from '../assets/img/project-04.JPG';
import Project05 from '../assets/img/project-05.JPG';
import Project06 from '../assets/img/project-06.JPG';

import SVGHTML from '../assets/img/html-5.svg';
import SVGCSS from '../assets/img/css.svg'
import SVGJS from '../assets/img/javascript.svg'
import SVGREACT from '../assets/img/react (1).svg'
import SVGSASS from '../assets/img/sass.svg'

import EscalabAcademy from '../assets/img/cert-01.png';
import Udemy from '../assets/img/udemy.png';

export const PROJECTS_DATA = [
    {
        id: 1,
        name: 'Press on Nails',
        // imgUrl: Project01,
        imgUrl: 'https://i.ibb.co/K6Q2pVq/project-01.jpg',
        body: 'Pyme dedicada al rubro de la belleza y cosmética'
    },
    {
        id: 2,
        name: 'Buscador de libros',
        // imgUrl: Project02,
        imgUrl: 'https://i.ibb.co/ZL3FvKk/project-02.jpg',
        body: 'Proyecto final de academía de desarrollo'
    },
    {
        id: 3,
        name: 'Agenda online',
        // imgUrl: Project03,
        imgUrl: 'https://i.ibb.co/NmzVrwy/project-03.jpg',
        body: 'Aplicación que almacena notas y recordatorios'
    },
    {
        id: 4,
        name: 'Buscador de música',
        // imgUrl: Project04,
        imgUrl: 'https://i.ibb.co/XC24HM5/project-04.jpg',
        body: 'Aplicación de consumo de API que busca letra de canciones'
    },
    {
        id: 5,
        name: 'Aplicación nutricional',
        // imgUrl: Project05,
        imgUrl: 'https://i.ibb.co/NyY7cyf/project-05.jpg',
        body: 'Aplicación que permite buscar recetas'
    },
    {
        id: 6,
        name: 'Blog con React/Node',
        //imgUrl: Project06,
        imgUrl: 'https://i.ibb.co/YbyPrPs/project-06.jpg',
        body: 'Blog diseñado con librerías de Javascript'
    },
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

]


export const CERTIFICATIONS = [
    {
        id: 1,
        name: "React JS Developer - Credly",
        school: "Escalab Academy",
        // img: EscalabAcademy,
        img: 'https://i.ibb.co/ZT7X1ht/cert-01.png',
        url: 'https://www.credly.com/badges/2eebc38e-81ee-46e4-b5c4-0148a1189113/public_url',
    },
    {
        id: 2,
        name: "Frontend Developer React JS",
        school: "Escalab Academy",
        // img: EscalabAcademy,
        img: 'https://i.ibb.co/ZT7X1ht/cert-01.png',
        url: ' https://escalab.academy/certificados/react/gen5/certificado-de-aprobacion-matias-ignacio-rojas-rojas-EARG5-Escalab-reactjs-Gen5-19.pdf',
    },
    {
        id: 3,
        name: "Diseño Web Profesional El ...",
        school: "Udemy",
        // img: Udemy,
        img: 'https://i.ibb.co/6w1HZs2/udemy.jpg',
        url: 'https://www.udemy.com/certificate/UC-cdca200d-45b7-412f-ab19-40f9202e9a81/'
    },
]
