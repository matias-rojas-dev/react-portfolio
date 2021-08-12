import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => (
    <div className='nav_container'>
        <Link className='nav_links' to='/contact'>
            CONTACTO
        </Link>
    </div>
)

export default Nav;