import { gsap } from 'gsap-trial'
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'
import { useEffect, useRef } from 'react'
import LogoM from '../../../assets/images/logo-m.png'
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
      <img ref={solidLogoRef} src={LogoM} alt="M" className="solid-logo" />
      <svg
        width="650"
        height="477"
        viewBox="0 0 650 477"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={outlineLogoRef}
      >
        <line
          x1="80.4839"
          y1="1.12589"
          x2="48.4839"
          y2="124.126"
          stroke="#FC180A"
        />
        <line x1="48" y1="123.5" x2="80" y2="123.5" stroke="#FC180A" />
        <line
          x1="80.4822"
          y1="124.132"
          x2="0.482235"
          y2="416.132"
          stroke="#FC180A"
        />
        <line y1="415.5" x2="154" y2="415.5" stroke="#FC180A" />
        <line
          x1="153.517"
          y1="415.869"
          x2="207.517"
          y2="216.869"
          stroke="#FC180A"
        />
        <line
          x1="208.453"
          y1="216.787"
          x2="262.453"
          y2="331.787"
          stroke="#FC180A"
        />
        <line
          x1="261.651"
          y1="331.642"
          x2="374.651"
          y2="221.642"
          stroke="#FC180A"
        />
        <line
          x1="375.482"
          y1="222.132"
          x2="322.482"
          y2="416.132"
          stroke="#FC180A"
        />
        <line x1="322" y1="415.5" x2="478" y2="415.5" stroke="#FC180A" />
        <line
          x1="477.517"
          y1="415.87"
          x2="589.517"
          y2="0.869719"
          stroke="#FC180A"
        />
        <line x1="80" y1="0.5" x2="262" y2="0.5" stroke="#FC180A" />
        <line x1="437" y1="0.5" x2="590" y2="0.5" stroke="#FC180A" />
        <line
          x1="262.451"
          y1="0.784136"
          x2="318.451"
          y2="117.784"
          stroke="#FC180A"
        />
        <line
          x1="317.649"
          y1="117.643"
          x2="436.649"
          y2="0.643458"
          stroke="#FC180A"
        />
        <line
          x1="0.371344"
          y1="415.665"
          x2="55.3713"
          y2="476.665"
          stroke="#FC180A"
        />
        <line x1="55" y1="476.5" x2="213" y2="476.5" stroke="#FC180A" />
        <line
          x1="212.517"
          y1="476.87"
          x2="255.517"
          y2="316.87"
          stroke="#FC180A"
        />
        <line
          x1="262.354"
          y1="331.646"
          x2="327.354"
          y2="396.646"
          stroke="#FC180A"
        />
        <line
          x1="322.368"
          y1="415.662"
          x2="378.368"
          y2="476.662"
          stroke="#FC180A"
        />
        <line x1="378" y1="476.5" x2="534" y2="476.5" stroke="#FC180A" />
        <line
          x1="533.517"
          y1="476.871"
          x2="645.517"
          y2="58.8706"
          stroke="#FC180A"
        />
        <line
          x1="645.64"
          y1="59.3473"
          x2="589.64"
          y2="1.3473"
          stroke="#FC180A"
        />
        <line
          x1="84.4839"
          y1="1.12589"
          x2="52.4839"
          y2="124.126"
          stroke="#FC180A"
        />
        <line x1="52" y1="123.5" x2="84" y2="123.5" stroke="#FC180A" />
        <line
          x1="84.4822"
          y1="124.132"
          x2="4.48223"
          y2="416.132"
          stroke="#FC180A"
        />
        <line x1="4" y1="415.5" x2="158" y2="415.5" stroke="#FC180A" />
        <line
          x1="157.517"
          y1="415.869"
          x2="211.517"
          y2="216.869"
          stroke="#FC180A"
        />
        <line
          x1="212.453"
          y1="216.787"
          x2="266.453"
          y2="331.788"
          stroke="#FC180A"
        />
        <line
          x1="265.651"
          y1="331.642"
          x2="378.651"
          y2="221.642"
          stroke="#FC180A"
        />
        <line
          x1="379.482"
          y1="222.132"
          x2="326.482"
          y2="416.132"
          stroke="#FC180A"
        />
        <line x1="326" y1="415.5" x2="482" y2="415.5" stroke="#FC180A" />
        <line
          x1="481.517"
          y1="415.87"
          x2="593.517"
          y2="0.869719"
          stroke="#FC180A"
        />
        <line x1="84" y1="0.5" x2="266" y2="0.5" stroke="#FC180A" />
        <line x1="441" y1="0.5" x2="594" y2="0.5" stroke="#FC180A" />
        <line
          x1="266.451"
          y1="0.784136"
          x2="322.451"
          y2="117.784"
          stroke="#FC180A"
        />
        <line
          x1="321.649"
          y1="117.643"
          x2="440.649"
          y2="0.643458"
          stroke="#FC180A"
        />
        <line
          x1="4.37134"
          y1="415.665"
          x2="59.3713"
          y2="476.665"
          stroke="#FC180A"
        />
        <line x1="59" y1="476.5" x2="217" y2="476.5" stroke="#FC180A" />
        <line
          x1="216.517"
          y1="476.87"
          x2="259.517"
          y2="316.87"
          stroke="#FC180A"
        />
        <line
          x1="266.354"
          y1="331.646"
          x2="331.354"
          y2="396.646"
          stroke="#FC180A"
        />
        <line
          x1="326.368"
          y1="415.662"
          x2="382.368"
          y2="476.662"
          stroke="#FC180A"
        />
        <line x1="382" y1="476.5" x2="538" y2="476.5" stroke="#FC180A" />
        <line
          x1="537.517"
          y1="476.871"
          x2="649.517"
          y2="58.8706"
          stroke="#FC180A"
        />
        <line
          x1="649.64"
          y1="59.3473"
          x2="593.64"
          y2="1.3473"
          stroke="#FC180A"
        />
      </svg>
    </div>
  )
}

export default Logo
