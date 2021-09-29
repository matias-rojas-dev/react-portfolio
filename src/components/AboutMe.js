import React from 'react';
import { AboutMeContainer, ProfileTitle } from '../styled-components/AboutMe'

const AboutMe = () => (
    <AboutMeContainer>
        <div className='profile_container'>
            <h1>Matías Rojas Rojas</h1>
            <h2>Desarrollador Front-end</h2>
            <p>Estudiante de cuarto año de Ingeniería civil en Computación, con amplio
                conocimiento en lógica de programación además de ciertas tecnologías,
                como <span>HTML, CSS y JS</span> agregado a un manejo sólido
                en <span>React JS</span> y sus elementos.
            </p>
        </div>
    </AboutMeContainer>
)

export default AboutMe;