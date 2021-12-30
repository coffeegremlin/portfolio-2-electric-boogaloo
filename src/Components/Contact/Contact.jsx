import React from "react";
import { Tweet } from "react-twitter-widgets";

// Assets
import Background from '../../Assets/background.jpg'

const Contact = () => {
  return (
    <>
      <div className='contact' style={{ backgroundImage: `url(${Background})`}}>
        <h1>Contact:</h1>
        <h3>Drop a line sometime! Here's some ways to reach out to me. Thanks for stopping by!</h3>
        {/* Add image with links to my personal contact information */}
        {/* use fontawesome icons */}
        <Tweet tweetId='1471669858727342086' />
      </div>
    </>
  )
}

export default Contact