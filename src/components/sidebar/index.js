import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faKaggle,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import LogoS from '../../assets/images/outlinedP.png'
import LogoP from '../../assets/images/Pratham.png'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" href="/">
        <div>
          <img src={LogoP} alt="LogoP" className="logoP" />
          <img src={LogoS} alt="Logo" />
        </div>
      </Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="Resume.pdf">Resume</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/pratham-manish-agrawal/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" size="2xl" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/prathamagrawal"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" size="2xl" />
          </a>
        </li>
        <li>
          <a
            href="https:/www.kaggle.com/fearsomejockey"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faKaggle} color="#4d4d4e" size="2xl" />
          </a>
        </li>
        <li>
          <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" size="2xl" />
          </a>
        </li>
        <li>
          <a
            href="https://mailto:prathamagrawal1205@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" size="2xl" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
