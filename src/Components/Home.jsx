import React from 'react'
import NavBar from './NavBar'

export default function Home() {
  return (
    <>
        
        <div className='mainHome'>
          <NavBar/>
          <div className="subHome">
            <div className='home_left_section'>
              <div className="home_para_name">
                <p >GROW WITH TECH</p>
              </div>
            </div>
            <div className="home_right_section">
              <div>
                <p>We are the team of GrowWithTech..Your Partner..The one who think like you, undestands you and help you to provide easy and responsible solutions to your requirement. We believe in people, and therefore come up with our best</p>
              </div>
            </div>
          </div>
          <div className='services'>
            <div className="services_heading">
              <p>Services</p>
            </div>
            <div className="services_content">
              <div id="serv1">
                <p>Use your mobile with voice commands</p>
              </div>
              <div id="serv2">
                <p>Present your feeling to your loved ones</p>
              </div>
              <div id="serv3">
                <p>Present your visuals to customers</p>
              </div>
              <div id="serv4">
                <p>Build your Model with us</p>
              </div>
              <div id="serv5">
                <p>Use your device as Theatre</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
