import React from "react";
import { Timeline, Tweet } from "react-twitter-widgets";

// Assets
import Background from '../../Assets/background.jpg'
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
        </div>
        <div className='contact-links'>
          <h3>My links!</h3>
            <a href="https://github.com/coffeegremlin">
              <img src={GithubSquare} alt="github" />
            </a>
            <a href="mailto:natemausert@gmail.com">
              <img src={Mail} alt='My email'/>
            </a>
            <a href="https://www.linkedin.com/in/nathanmausert/">
              <img src={LinkedIn} alt='My Linkedin' />
            </a>
        </div>
          <div className="tweets">
            <Timeline 
              className='tweets'
              dataSource={{
                sourceType: 'profile',
                screenName: 'NMausert',
              }}
              options={{
                height: '400',
                width: '800',
              }}
            />
          </div>
      </div>
    </>
  )
}

export default Contact