import React from 'react';

// Assets
import Background from '../../Assets/round-sign-upsplash.jpeg'

const Skills = () => {

  return (
    <>
      <div className='background-img' style={{backgroundImage: `url(${Background})`}}>
        <h1 id='skillstitle'>My Skills, Stacks, and frameworks</h1>
        <div className='skills'>
          <div id='languages'>
            <h3>Languages</h3>
            <table>
              <p>HTML</p>
              <p>CSS</p>
              <p>javaScript</p>
              <p>Python</p>
            </table>
          </div>
          <div className='skills' id='frameworks'>
            <h3>Frameworks/Stacks</h3>
            <table>
              <p>Django</p>
              <p>React</p>
              <p>MEN and MERN stacks</p>
            </table>
          </div>
          <div className='skills' id='otherTech'>
            <h3>Other Shenanigans and technologies</h3>
            <table>
              <p>MongoDB</p>
              <p>Express.JS</p>
              <p>Node.JS</p>
              <p>PostgreSQL</p>
              <p>Git</p>
              <p>GitHub</p>
              <p>BootStrap</p>
              <p>API wrangler Extroidinare</p>
            </table>
          </div>
        </div>
        {/* add in the img badges for individiual skills either through url or add them to assets later on */}
      </div>
    </>
  )
}

export default Skills