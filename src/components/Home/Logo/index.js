import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import './index.scss'


const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    gsap.timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0.5,
        duration: 1,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <svg width="236" height="408" viewBox="0 0 236 408" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path ref={outlineLogoRef} fill-rule="evenodd" clip-rule="evenodd" d="M0.752533 1.70351L122.07 0.867271C184.066 0.439927 234.825 50.514 235.255 112.905C235.682 174.896 185.613 225.66 123.622 226.087L71.5499 226.446L60.5778 172.205L123.248 171.773C155.214 171.553 181.161 145.246 180.941 113.279C180.721 81.3125 154.413 55.3656 122.447 55.586L55.4023 56.0481L51.3494 406.729L3.54666 407.059L0.752533 1.70351ZM5.28344 6.17239L8.01554 402.528L46.9007 402.26L50.9536 51.5787L122.416 51.0861C156.868 50.8486 185.203 78.7963 185.441 113.248C185.678 147.7 157.731 176.036 123.279 176.273L66.0716 176.667L75.2256 221.92L123.591 221.587C183.097 221.177 231.165 172.442 230.755 112.936C230.342 53.0195 181.601 4.95702 122.101 5.36716L5.28344 6.17239Z" fill="#FFF1A3"/>
      </svg>

    </div>
  )
}

export default Logo
