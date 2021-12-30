import React from "react";

// Assets
import Background from '../../Assets/background.jpg'

const Projects = () => {
  return (
    <>
    <div className='projects' style={{backgroundImage: `url(${Background})`}}>
      <h1>My Projects</h1>
      {/* Add in cards with deployment links to projects here. Use the infinite side scoll depenedcy maybe? */}
    </div>
    </>
  )
}

export default Projects