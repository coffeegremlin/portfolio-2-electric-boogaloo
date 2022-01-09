import React from "react";
import '../../Styles/App.css'

// Assets
import Background from '../../Assets/neon-upsplash.jpeg'
import Git from '../../Assets/font-awesome/git-alt-brands.svg'

const Projects = () => {
  return (
    <>
    <body>
      <div className='background-img' style={{backgroundImage: `url(${Background})`}}>
        <h1 className="neon-text" id="projectstitle">My Projects</h1>
        <div className='projects-card'>
          <section className="card" id="coding-cooler">
            <span className="projdesc">
              <a href="https://github.com/coffeegremlin/codingcooler">
                <img src={Git} alt="github repo for coding cooler"/>
              </a>
              <p>Coding Cooler</p>
              <p>Django</p>
              <a href="https://codingcooler.herokuapp.com/" className="neon-button">Deployed Demo</a>
            </span>
          </section>

          <section className="card" id="lfg-card">
            <span className="projdesc">
              <a href="https://github.com/coffeegremlin/lfg">
                <img src={Git} alt="github repo for lfg"/>
              </a>
              <p>Looking For Group</p>
              <p>React.js</p>
              <a href="https://lfgpls.herokuapp.com/" className="neon-button">Deployed Demo</a>
            </span>
          </section>

          <section className="card" id="mh-lists-card">
            <span className="projdesc">
              <a href="https://github.com/coffeegremlin/Monster-Hunter-Lists">
                <img src={Git} alt="github repo for monster hunter lists" />
              </a>
              <p>Monster Hunter Lists</p>
              <p>Express.js</p>
              <p>Node.js</p>
              <a href="https://monster-hunter-lists.herokuapp.com/" className="neon-button">Deployed Demo</a>
            </span>
          </section>

          <section className="card" id="dim-wood-card">
            <span className="projdesc">
              <a href="https://github.com/coffeegremlin/Dim-Wood-Adventure">
                <img src={Git} alt="github repo for Dim Wood" />
              </a>
              <p>Dim Wood Adventure</p>
              <p>javaScript</p>
              <a href="https://dimwoodadventure.netlify.app/" className="neon-button">Deployed Demo</a>
            </span>
          </section>

        </div>
      </div>
      </body>
    </>
  )
}

export default Projects