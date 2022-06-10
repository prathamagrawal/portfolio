import Loader from 'react-loaders'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-box">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['G', 'e', 't', '  ', 'i', 'n', '  ', 't', 'o', 'u', 'c', 'h']}
              idx={15}
            />
          </h1>
        </div>
        <p>
          <br />Let's work on some exciting Machine Learning or <br />Artificial Intelligence Projects or something exciting
        </p>

        <div>
          <a href="mailto:prathamagrawal1205@gmail.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} color="white"> </FontAwesomeIcon>
          </a>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
