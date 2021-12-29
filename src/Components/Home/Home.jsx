 import React from 'react';

// Assets
import Background from '../../Assets/background.jpg'

const Home = (props) => {
  return (
    <>
      <div className='home' style={{ backgroundImage: `url(${Background})`}}>
      </div>
        <img src={Background} alt="Portfolio background" />
        <h1 id='splash-logo'>Welcome to my portfolio site!</h1>
    </>
  )
}

export default Home