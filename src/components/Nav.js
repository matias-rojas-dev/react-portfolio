import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => (
    <div className='nav_container'>
        <Link className='nav_links' to='/about-me'>
            SOBRE MI
        </Link>
        <Link className='nav_links' to='/projects'>
            PROYECTOS
        </Link>
        <Link className='nav_links' to='/contact'>
            CONTACTO
        </Link>
    </div>
)

export default Nav;