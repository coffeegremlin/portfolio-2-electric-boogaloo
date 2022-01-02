import React from "react";
import { Timeline, Tweet } from "react-twitter-widgets";

// Assets
import Background from '../../Assets/exit-upsplash.jpeg'
import GithubSquare from '../../Assets/font-awesome/github-brands.svg'
import Mail from '../../Assets/font-awesome/envelope-regular.svg'
import LinkedIn from '../../Assets/font-awesome/linkedin-brands.svg'


const Contact = () => {
  return (
    <>
      <div className='background-img' style={{ backgroundImage: `url(${Background})`}}>
        <div className='contact'>
          <h1>Contact:</h1>
          <h3>Drop a line sometime! Here's some ways to reach out to me. Thanks for stopping by!</h3>
          <h3>My links!</h3>

          <div className='contact-links'>
            <a className="neon-wrapper" id="gitIcon" href="https://github.com/coffeegremlin">GitHub<img src={GithubSquare} alt="github" /></a>
            <a className="neon-wrapper" id="mailIcon" href="mailto:natemausert@gmail.com">Mail<img src={Mail} alt='My email'/></a>
            <a className="neon-wrapper" id="linkedinIcon" href="https://www.linkedin.com/in/nathanmausert/">LinkedIn<img src={LinkedIn} alt='My Linkedin'/></a>
          </div>
          {/* <div className="tweets">
            <Timeline 
              dataSource={{
                sourceType: 'profile',
                screenName: 'NMausert',
              }}
              options={{
                height: '500',
                width: '300',
              }}
            />
          </div> */}
        </div>

            

      </div>
    </>
  )
}

export default Contact