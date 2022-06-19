import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import { Backdrop } from '@mui/material'
import Card from './card'

const About = () => {
  const backdropStyle = {
    backgroundColor: '#BFACC8',
    position: 'absolute',
    right: 30,
    left: 150,
    zIndex: 5,
  }
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleToggle = () => {
    setOpen(!open)
  }
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="container card">
          <p>It's a trap! Don't Click.. </p>
          <Button onClick={handleToggle}>CLICK ME</Button>
        </div>
        <Backdrop open={open} onClick={handleClose} sx={backdropStyle}>
          <Card />
        </Backdrop>
        <div className="about-text">
          <p className="about-heading">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e  ']}
              idx={15}
            />
          </p>
          <p>
            I'm a Third Year student Computer Science student.
            <br />
            I'm very ambitious soon to be an Engineer specilized in Data Science
            <br />
            and Machine Learning in . I would love to work on more any projects.
          </p>
          <p align="LEFT">
            I also serve as the Chaiperson for IET-VIT, a student run chapter in
            VIT, Vellore.
            <br />I am highly interested in research opportunities.
          </p>
          <p align="LEFT">
            I also like to serve back to the community through my special love
            for dogs.
            <br />I accomplish this task through serving as Human Resources
            Director for Littelove, Indore.
          </p>
          <p align="LEFT">
            I'm a quitely confident, artistic, optimistic, and perpetually
            working on
            <br />
            problem at a time. I love to listen to old music when I am working.{' '}
            <br />I am always up for drawing Marvel heros sketches and listening
            to old music.
          </p>
          <p align="LEFT">You can learn more about me in the resume.</p>
          <Link href="/resume" className="flat-button">
            RESUME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
