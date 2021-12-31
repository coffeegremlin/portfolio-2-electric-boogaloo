import React from 'react';

// Assets
import Background from '../../Assets/background.jpg'

const Home = (props) => {
  return (
    <>
      <div className='background-img' style={{ backgroundImage: `url(${Background})`}}>
        {/* add in my face in a round border, pixel, or neon frame. */}
        <h1 id='splash-logo'>Welcome to my portfolio site! </h1>
        <p>I'm Nathan Mausert, and I'm a full-stack software engineer with a focus on web development.</p>
      </div>
    </>
  )
}

export default Home