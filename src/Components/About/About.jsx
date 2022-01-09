import React from "react";
import '../../Styles/App.css'

// Assets
import Background from '../../Assets/mistake-upsplash.jpeg'

const About = () => {
  return(
    <>
      <div className='background-img' style={{ backgroundImage: `url(${Background})`}}>
        <div className='about-info'>
          <h1 className="neon-text">About Me:</h1>
          <p> I'm based in New York, with a planned move to Los Angeles soon. I have an interest in projects that improve users lives. I aim to solve problems on both interpersonal and logistical levels. I'm driven by a passion for providing tangible, meaningful results I can be proud of. When it comes to my work, I offer well thought out and expertly crafted solutions to complex problems with intention and strong communication skills.</p>
        </div>
      </div>
    </>
  )
}

export default About