import React from 'react';

// Assets
import Background from '../../Assets/arcade-upsplash.jpeg'
import natesprite from '../../Assets/natesprite.png'
import frame from '../../Assets/neogeo.png'

const Home = (props) => {
  return (
    <>
      <div className='background-img' style={{ backgroundImage: `url(${Background})`}}>
        <div id='myframe'>
          <img className='neon-wrapper' id='frame' src={frame} alt="If you love neo geo, I love you" />
          <img id='nateimg' src={natesprite} alt="Hey, that's me! Nate!" />
        </div>
        <h1 className='neon-text' id='myname'>Nathan Mausert</h1>
        <div id='myinfo'>
          <h3 id='splash-logo'>Hey there, welcome to my portfolio!</h3>
          <p>I'm Nathan Mausert, and I'm a full-stack software engineer with a focus on web development.</p>
        </div>
        <p>© Nathan Mausert 2022</p>
      </div>
    </>
  )
}

export default Home