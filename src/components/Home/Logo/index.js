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
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
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
      <svg width="310" height="426" viewBox="0 0 310 426" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_14_14)">
          <path d="M177.725 27.7631L59.6775 12.1931L7.25908 409.616L34.0273 413.147L50.2319 415.284L102.498 68.4959L171.158 77.5519C204.083 81.8946 227.437 112.345 223.094 145.27C218.751 178.195 188.301 201.548 155.376 197.206L95.951 189.368L99.0736 240.026L148.862 246.593C209.091 254.537 264.538 212.012 272.481 151.784C280.478 91.1538 237.954 35.707 177.725 27.7631Z" stroke="#FFF1A3" stroke-width="4.5" />
        </g>
        <defs>
          <filter id="filter0_d_14_14" x="-1.71686" y="0.652092" width="315.434" height="425.152" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_14" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14_14" result="shape" />
          </filter>
        </defs>
      </svg>


    </div>
  )
}

export default Logo
