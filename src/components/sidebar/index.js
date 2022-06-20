import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faKaggle,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import LogoS from '../../assets/images/outlinedP.png'
import LogoP from '../../assets/images/Pratham.png'
import styleslayout from './index.module.scss'
import Image from 'next/image'

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const Sidebar = () => {
  return (
  <div>
    <div className={`${styleslayout["bars"]}`}>
      <a href="javascript:void(0);" onclick="myFunction()" className={`${styleslayout["class"]}`}>
      <FontAwesomeIcon icon={faBars} color="white" size="3x"/>
      </a>
    </div>
    <div className={`${styleslayout["nav-bar"]}`}>
      <div className={`${styleslayout["nav-bar1"]}`}>
      <Link className={`${styleslayout["logo"]}`} href="/">
        <div>
          <Image src={LogoP} alt="LogoP" className={`${styleslayout["logo"]}`} width="80" height="130"/>
          <Image src={LogoS} alt="Logo" className={`${styleslayout["logo"]}`} />
        </div>
      </Link>
      </div>
      

      <nav className={`${styleslayout["navba"]}`}>
        <Link href="/">
          <a className={`${styleslayout["socials"]}`}>Home</a>
        </Link>
        <Link href="/about">
        <a className={`${styleslayout["socials"]}`}>About</a>
        </Link>
        <Link href="Resume.pdf">
        <a className={`${styleslayout["socials"]}`}>Resume</a>
        </Link>
        <Link href="/contact">
        <a className={`${styleslayout["socials"]}`}>Contact</a>
        </Link>
      </nav>

      <ul className={`${styleslayout["socialslist"]}`}>
        <li className={`${styleslayout["socialslist1"]}`}>
          <a
            className={`${styleslayout["socials"]}`}
            href="https://www.linkedin.com/in/pratham-manish-agrawal/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" size="2xl" />
          </a>
        </li>
        <li className={`${styleslayout["socialslist1"]}`}>
          <a
            className={`${styleslayout["socials"]}`}
            href="https://github.com/prathamagrawal"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" size="2xl" />
          </a>
        </li>
        <li className={`${styleslayout["socialslist1"]}`}>
          <a
            className={`${styleslayout["socials"]}`}
            href="https:/www.kaggle.com/fearsomejockey"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faKaggle} color="#4d4d4e" size="2xl" />
          </a>
        </li>
        <li className={`${styleslayout["socialslist1"]}`}>
          <a 
          className={`${styleslayout["socials"]}`}
          href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" size="2xl" />
          </a>
        </li>
        <li className={`${styleslayout["socialslist1"]}`}>
          <a
          className={`${styleslayout["socials"]}`}
            href="https://mailto:prathamagrawal1205@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" size="2xl" />
          </a>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Sidebar
