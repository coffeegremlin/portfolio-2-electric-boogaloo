import React from 'react';
import '../../Styles/App.css'

// Assets
import Background from '../../Assets/round-sign-upsplash.jpeg'

const Skills = () => {

  return (
    <>
      <div className='background-img' style={{backgroundImage: `url(${Background})`}}>
        <h1 className='neon-text' id='skillstitle'>Skills and Tech</h1>
        <div className='skills'>

          <div className='neon-wrapper' id='languages'>
            <h3>Languages</h3>
            <p>HTML, CSS, javaScript, Python</p>
            <h3>Frameworks/Stacks</h3>
            <p>Django, React, MEN and MERN stacks</p>
            <h3>Other Shenanigans and technologies</h3>
            <p>MongoDB, Express.JS, Node.JS, PostgreSQL, Git, GitHub, BootStrap, API wrangling</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills