import Loader from 'react-loaders'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

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
          <h1><br/>
          <AnimatedLetters
            
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't']}
              idx={15}
            />
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
           Maecenas sodales pellentesque libero id consequat. <br></br>
           In vel magna dignissim, lobortis turpis in, pretium urna.<br></br>
            Sed blandit ac lorem vitae blandit. A
          </p>
        </div>
        
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
