import React from 'react'
import { NavContainer, NavLinks } from '../styled-components/Nav';
import linkedin from '../assets/img/linkedin.png'

const Nav = () => (
    <NavContainer>
        <NavLinks
            target="_blank"
            href="https://www.linkedin.com/in/mat%C3%ADas-rojas-rojas-7049ab1b0/"
        >
            <img
                src={linkedin}
                alt="Linkedin"
            />
        </NavLinks>


    </NavContainer >
)

export default Nav;