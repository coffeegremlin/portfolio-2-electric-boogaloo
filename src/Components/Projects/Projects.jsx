import React from "react";

// Assets
import Background from '../../Assets/neon-upsplash.jpeg'
import Git from '../../Assets/font-awesome/git-alt-brands.svg'

const Projects = () => {
  return (
    <>
      <div className='background-img' style={{backgroundImage: `url(${Background})`}}>
        <h1>My Projects</h1>
        <div className='project-card'>

          <section className="card" id="coding-cooler">
          <a href="https://github.com/coffeegremlin/codingcooler">
            <img src={Git} alt="github repo for coding cooler"/>
          </a>
            <span>
              <p>Coding Cooler</p>
              <p>Full Stack app made w/ Django</p>
            </span>
            <footer>
              <button className="neon-button">
                <a href="https://codingcooler.herokuapp.com/">Deployed Demo</a>
              </button>
            </footer>
          </section>

          <section className="card" id="lfg-card">
          <a href="https://github.com/coffeegremlin/lfg">
            <img src={Git} alt="github repo for lfg"/>
          </a>
            <span>
              <p>Looking For Group</p>
              <p>Full Stack collaborative app made w/ React</p>
            </span>
            <footer>
              <button className="neon-button">
                <a href="https://lfgpls.herokuapp.com/">Deployed Demo</a>
              </button>
            </footer>
          </section>

          <section className="card" id="mh-lists-card">
          <a href="https://github.com/coffeegremlin/Monster-Hunter-Lists">
            <img src={Git} alt="github repo for monster hunter lists" />
          </a>
            <span>
              <p>Monster Hunter Lists</p>
              <p>Full Stack app made with the MEN stack using 3rd party API</p>
            </span>
            <footer>
              <button className="neon-button">
                <a href="https://monster-hunter-lists.herokuapp.com/">Deployed Demo</a>
              </button>
            </footer>
          </section>

          <section className="card" id="dim-wood-card">
          <a href="https://github.com/coffeegremlin/Dim-Wood-Adventure">
            <img src={Git} alt="github repo for Dim Wood" />
          </a>
            <span>
              <p>Dim Wood Adventure</p>
              <p>Text adventure javaScript based game w/ multiple endings.</p>
            </span>
            <footer>
              <button className="neon-button">
                <a href="https://dimwoodadventure.netlify.app/">Deployed Demo</a>
              </button>
            </footer>
          </section>

        </div>
      </div>
    </>
  )
}

export default Projects