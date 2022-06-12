import Loader from 'react-loaders'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin, faKaggle, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons'
import { Grid } from '@mui/material'
import {Paper} from '@mui/material'
import {Container} from '@mui/material'



const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const gridStyles = {
    backgroundColor: "black",
    alignItems: "center",

  };

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-box">
          
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['G', 'e', 't', '  ', 'i', 'n', '  ', 't', 'o', 'u', 'c', 'h']}
              idx={15}
            />
          
        </div>
        <p>
          <br />Let's work on some exciting Machine Learning or <br />Artificial Intelligence Projects or something exciting
        </p>

        <div className="container contact-grid">
          <Container>
          <Grid container rowSpacing={20} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={gridStyles}> 
            <Grid spacing-12 item xs={12} sm={8} md={4} >
            <Paper sx={{backgroundColor:"black"}}>
              <a href="mailto:prathamagrawal1205@gmail.com" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} color="white" size="6x"></FontAwesomeIcon>
              </a>
            </Paper>
            </Grid>
            <Grid item xs={12} sm={8} md={4} >
           <Paper sx={{backgroundColor:"black"}}>
              <a href="https:www.github.com/prathamagrawal" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faGithub} color="white" size="6x"></FontAwesomeIcon>
              </a>
            </Paper>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
           <Paper sx={{backgroundColor:"black"}}>
              <a href="https:www.linkedin.com/pratham-manish-agrawal" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} color="white" size="6x"></FontAwesomeIcon>
                </a>
            </Paper>
            </Grid>

            <Grid item xs={12} sm={8} md={4} >
           <Paper sx={{backgroundColor:"black"}}>             
               <a href="https:www.instagram.com/prathammanishagrawal" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} color="white" size="6x"></FontAwesomeIcon>
                </a>
            </Paper>
            </Grid>
            <Grid item xs={12} sm={8} md={4} >
           <Paper sx={{backgroundColor:"black"}}>
              <a href="https:www.kaggle.com/fearsomejockey" target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={faKaggle} color="white" size="6x"></FontAwesomeIcon>
              </a>
            </Paper>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
            <Paper sx={{backgroundColor:"black"}}>
              <a href="tel:+918269067007" target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={faPhone} color="white" size="6x"></FontAwesomeIcon>
              </a>
            </Paper>
            </Grid>
            </Grid>
          </Container>
        </div>


      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
