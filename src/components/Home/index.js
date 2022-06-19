import { useEffect, useState } from 'react'
import Link from 'next/link'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import home from '../../assets/images/home_c.jpg'
import layout from '../layout/index.module.scss'
import styles from './index.module.scss'
import Image from 'next/image'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    '  ',
    'P',
    'r',
    'a',
    't',
    'h',
    'a',
    'm',
    '  ',
    'A',
    'g',
    'r',
    'a',
    'w',
    'a',
    'l',
  ]
  const jobArray = [
    'F',
    'u',
    't',
    'u',
    'r',
    'e',
    '  ',
    'D',
    'a',
    't',
    'a',
    ' ',
    'S',
    'c',
    'i',
    'e',
    'n',
    't',
    'i',
    's',
    't',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div>
        <div className={`${styles["home-page"]}`}>
          <div className={`${styles["text-zone"]}`}>
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
            <h2>
              Future Data Scientist | Machine Learning Engineer |<br />{' '}
              Chaiperson at IET-VIT | Student{' '}
            </h2>
            <Link href="/contact" >
              <a className={`${styles["flat-button"]}`}>Contact</a> 
            </Link>
          </div>
          <div className={`${styles["homeimage"]}`}>
            <Image src={home} alt="home" width="800w" height="800px" />
          </div>
          <Loader type="pacman" />        
        </div>
        </div>
    </>
  )
}

export default Home
