import React from 'react'
import { Link } from 'react-router-dom'
import userData from '../../constants';
import ThemeSwicth from '../ThemeSwicth';

const Header = () => {

    const toggleMenu = () => {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }

    const linksUI = (<><Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/projects'}>Projects</Link>
        <Link to={'/experience'}>Experience</Link>
        <Link to={'/contact'}>Contact</Link>
    </>)

    return (
        <div>
            <ThemeSwicth />
            <nav id="desktop-nav">
                <div className="logo">{userData.name}</div>
                <div><ul className="nav-links"> {linksUI}</ul></div>
            </nav>
            <nav id="hamburger-nav">
                <div className="logo">{userData.name}</div>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <div className="hamburger-icon">
                        <span className='hamburger-line'></span>
                        <span className='hamburger-line'></span>
                        <span className='hamburger-line'></span>
                    </div>
                    <div className="menu-links">{linksUI}</div>
                </div>
            </nav>
        </div>
    )
}

export default Header
