import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header>
            <a href="/" className="logo">To Xuan Tuyen</a>
            <ul className="navmenu">
                <li>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={800}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={800}
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
