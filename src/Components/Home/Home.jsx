import React from 'react';

// Assets
import Background from '../../Assets/arcade-upsplash.jpeg'
import natesprite from '../../Assets/natesprite.png'

const Home = (props) => {
  return (
    <>
      <div className='background-img' style={{ backgroundImage: `url(${Background})`}}>
        <img id='nateimg' src={natesprite} alt="Hey, that's me! Nate!" />
        <h1 id='myname'>Nathan Mausert</h1>
        <div id='myinfo'>
        <h3 id='splash-logo'>Hey there, welcome to my portfolio!</h3>
        <p>I'm Nathan Mausert, and I'm a full-stack software engineer with a focus on web development.</p>
        </div>
      </div>
    </>
  )
}

export default Home