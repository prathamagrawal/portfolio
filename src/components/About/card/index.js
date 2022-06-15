import AnimatedLetters from '../../AnimatedLetters'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { Paper } from '@mui/material'
import { Container } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faRProject, faHtml5, faReact, faJava, faCss3, faJs, faNodeJs } from '@fortawesome/free-brands-svg-icons'



const Card = () => {
    const gridStyles = {
        borderRadius: "10%"
    };
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])



    return (
        <>
            <div className="card_h">
                <p>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['S', 'K', 'I', 'L', 'L', 'S']}
                        idx={15}
                    />
                </p>
                <Container>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={gridStyles}>
                        <Grid spacing-12 item xs={12} sm={12} md={6}>
                            <Paper sx={{ border: "5px solid #783f8e", backgroundColor: "#bfacc8" }}>
                                <div className="card_de">
                                    <div className="card_heading">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 0C214.9 0 240 25.07 240 56V456C240 486.9 214.9 512 184 512C155.1 512 131.3 490.1 128.3 461.9C123.1 463.3 117.6 464 112 464C76.65 464 48 435.3 48 400C48 392.6 49.27 385.4 51.59 378.8C21.43 367.4 0 338.2 0 304C0 272.1 18.71 244.5 45.77 231.7C37.15 220.8 32 206.1 32 192C32 161.3 53.59 135.7 82.41 129.4C80.84 123.9 80 118 80 112C80 82.06 100.6 56.92 128.3 49.93C131.3 21.86 155.1 0 184 0zM383.7 49.93C411.4 56.92 432 82.06 432 112C432 118 431.2 123.9 429.6 129.4C458.4 135.7 480 161.3 480 192C480 206.1 474.9 220.8 466.2 231.7C493.3 244.5 512 272.1 512 304C512 338.2 490.6 367.4 460.4 378.8C462.7 385.4 464 392.6 464 400C464 435.3 435.3 464 400 464C394.4 464 388.9 463.3 383.7 461.9C380.7 490.1 356.9 512 328 512C297.1 512 272 486.9 272 456V56C272 25.07 297.1 0 328 0C356.9 0 380.7 21.86 383.7 49.93z" /></svg>
                                        Machine Learning
                                    </div>
                                    <p>Developing optimised Machine Learning and Deep learning algoritms to better solve the problems
                                        existing in real life. I use Python, Tensorflow, and Pytorch for the same. </p>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid spacing-12 item xs={12} sm={12} md={6}>
                            <Paper sx={{ border: "5px solid #783f8e", backgroundColor: "#bfacc8" }}>
                                <div className="card_de">
                                    <div className="card_heading">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 80C160 53.49 181.5 32 208 32H240C266.5 32 288 53.49 288 80V432C288 458.5 266.5 480 240 480H208C181.5 480 160 458.5 160 432V80zM0 272C0 245.5 21.49 224 48 224H80C106.5 224 128 245.5 128 272V432C128 458.5 106.5 480 80 480H48C21.49 480 0 458.5 0 432V272zM400 96C426.5 96 448 117.5 448 144V432C448 458.5 426.5 480 400 480H368C341.5 480 320 458.5 320 432V144C320 117.5 341.5 96 368 96H400z" /></svg>
                                        Data Science
                                    </div>
                                    <p>
                                        Analyze, process, and model data that can be used to building Machine Learning algorithms, or data visualizations.
                                        Able to convert the messy, unstructured data to processed Structured Data.
                                    </p>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
                <Container >
                    <Grid container className="tech" rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={gridStyles}>
                        <Grid spacing-12 item xs={6} sm={6} md={3}>
                            <paper sx={{ border: "5px solid #783f8e", backgroundColor: "#bfacc8" }}>
                                <div>
                                    <FontAwesomeIcon icon={faPython} size="7x" color="black"/>
                                </div>
                            </paper>
                        </Grid>
                        <Grid spacing-12 item sixs={6} sm={6} md={3}>
                            <paper sx={{ border: "5px solid #783f8e", backgroundColor: "#bfacc8" }}>
                                <div>
                                    <FontAwesomeIcon icon={faRProject} size="7x" color="black"/>

                                </div>
                            </paper>
                        </Grid>
                        <Grid spacing-12 item sixs={6} sm={6} md={3}>
                            <paper sx={{ border: "5px solid #783f8e", backgroundColor: "#bfacc8" }}>
                                <div>
                                    <FontAwesomeIcon icon={faHtml5} size="7x" color="black"/>
                                </div>
                            </paper>
                        </Grid>
                        <Grid spacing-12 item sixs={6} sm={6} md={3}>
                            <paper sx={{ border: "5px solid #783f8e", backgroundColor: "#bfacc8" }}>
                                <div>
                                    <FontAwesomeIcon icon={faCss3} size="7x" color="black"/>
                                </div>
                            </paper>
                        </Grid>
                        <Grid spacing-12 item sixs={6} sm={6} md={3}>
                            <paper sx={{ border: "5px solid #783f8e", backgroundColor: "#bfacc8" }}>
                                <div>
                                    <FontAwesomeIcon icon={faJs} size="7x" color="black"/>
                                </div>
                            </paper>
                        </Grid>
                        <Grid spacing-12 item sixs={6} sm={6} md={3}>
                            <paper sx={{ border: "5px solid #783f8e", backgroundColor: "#bfacc8" }}>
                                <div>
                                    <FontAwesomeIcon icon={faNodeJs} size="7x" color="black"/>
                                </div>
                            </paper>
                        </Grid>
                        <Grid spacing-12 item sixs={6} sm={6} md={3}>
                            <paper sx={{ border: "5px solid #783f8e", backgroundColor: "#bfacc8" }}>
                                <div>
                                    <FontAwesomeIcon icon={faReact} size="7x" color="black"/>
                                </div>
                            </paper>
                        </Grid>
                        <Grid spacing-12 item sixs={6} sm={6} md={3}>
                            <paper sx={{ border: "5px solid #783f8e", backgroundColor: "#bfacc8" }}>
                                <div>
                                    <FontAwesomeIcon icon={faJava} size="7x" color="black"/>
                                </div>
                            </paper>
                        </Grid>
                        <Grid spacing-12 item sixs={6} sm={6} md={3}>
                            <paper sx={{ border: "5px solid #783f8e", backgroundColor: "#bfacc8" }}>
                                <div>
                                 
                                </div>
                            </paper>
                        </Grid>
                    </Grid>
                </Container>
                <div className="about_contact">
                    <Link to="/resume" className="flat-button">
                        RESUME
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Card