import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import home from "../../assets/images/home.jpg"

import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['  ', 'P', 'r', 'a', 't', 'h', 'a', 'm', '  ', 'A', 'g', 'r', 'a', 'w', 'a', 'l']
  const jobArray = ['F', 'u', 't', 'u', 'r', 'e', '  ', 'D', 'a', 't', 'a', ' ', 'S', 'c', 'i', 'e', 'n', 't', 'i', 's', 't']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div>
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={1}
              />
            </h1>
            <h2>Future Data Scientist | Machine Learning Engineer |<br/> Chaiperson at IET-VIT |  Student </h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </div>
        <img src={home} alt="home-img" className="home_img" />
        <Loader type="pacman" />
      </div>
    </>
  )
}

export default Home
