import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faKaggle, faInstagram, } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faBook } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import LogoS  from '../../assets/images/outlinedP.png'
import LogoP from '../../assets/images/Pratham.png'


const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoP} alt="LogoP" className="logoP"/>                
                <img src={LogoS} alt="Logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="resume-link" to="resume">
                    <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
                    
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/pratham-manish-agrawal/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/prathamagrawal" target="_blank" rel="noreferrer" >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a href="https:/www.kaggle.com/fearsomejockey" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faKaggle} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a href="https://mailto:prathamagrawal1205@gmail.com" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar