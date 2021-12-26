import React from 'react';

// Assets
import Background from '../../Assets/background.jpg'

const Home = () => {
  return (
    <div className='home' style={{ backgroundImage: `url(${Background})`}}>
      <h1 id='splash-logo'>Welcome to my portfolio site!</h1>
    </div>
  )
}

export default Home