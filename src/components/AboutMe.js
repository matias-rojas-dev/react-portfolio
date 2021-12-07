import React from 'react';
import { AboutMeContainer } from '../styled-components/AboutMe'

const AboutMe = () => (
    <AboutMeContainer>
        <div className='profile_container'>
            <h1>Matías Rojas Rojas</h1>
            <h2>Desarrollador Full-Stack</h2>
            <p>Desarrollador Full-Stack principalmente autodidacta con conocimientos en tecnologías
                de JavaScript, React, NodeJS, MongoDB, Express, Mongoose, MySQL, entre otros.
            </p>
        </div>
    </AboutMeContainer>
)

export default AboutMe;