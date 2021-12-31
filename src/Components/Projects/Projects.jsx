import React from "react";

// Assets
import Background from '../../Assets/background.jpg'
import Git from '../../Assets/font-awesome/git-alt-brands.svg'

const Projects = () => {
  return (
    <>
      <div className='background-img' style={{backgroundImage: `url(${Background})`}}>
        <h1>My Projects</h1>
        <div className='project-card'>

          <section className="card" id="coding-cooler">
            <img src={Git} alt="github icon" />
            <span>
              <p>Coding Cooler</p>
              <p>Full Stack app made w/ Django</p>
            </span>
            <footer>
              <button>
                <a href="https://github.com/coffeegremlin/codingcooler">GitHub Repo</a>
              </button>
              <button>
                <a href="https://codingcooler.herokuapp.com/">Deployed Demo</a>
              </button>
            </footer>
          </section>

          <section className="card" id="lfg-card">
          <img src={Git} alt="github icon" />
            <span>
              <p>Looking For Group</p>
              <p>Full Stack collaborative app made w/ React</p>
            </span>
            <footer>
              <button>
                <a href="https://github.com/coffeegremlin/lfg">GitHub Repo</a>
              </button>
              <button>
                <a href="https://lfgpls.herokuapp.com/">Deployed Demo</a>
              </button>
            </footer>
          </section>

          <section className="card" id="mh-lists-card">
          <img src={Git} alt="github icon" />
            <span>
              <p>Monster Hunter Lists</p>
              <p>Full Stack app made with the MEN stack using 3rd party API</p>
            </span>
            <footer>
              <button>
                <a href="https://github.com/coffeegremlin/Monster-Hunter-Lists">GitHub Repo</a>
              </button>
              <button>
                <a href="https://monster-hunter-lists.herokuapp.com/">Deployed Demo</a>
              </button>
            </footer>
          </section>

          <section className="card" id="dim-wood-card">
          <img src={Git} alt="github icon" />
            <span>
              <p>Dim Wood Adventure</p>
              <p>Text adventure javaScript based game w/ multiple endings.</p>
            </span>
            <footer>
              <button>
                <a href="https://github.com/coffeegremlin/Dim-Wood-Adventure">GitHub Repo</a>
              </button>
              <button>
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