import React from 'react';
import '../App.css';

const Projects = () => {
  return (
    <div className="projectsContainer">
      <h3>Projects</h3>

      <div className="projects">
        <div className="row">
          <div className="box">
            <a href="https://cslori-nc-news.netlify.com/">
              <h4>NC-News</h4>
            </a>
            <div className="imgBox">
              <img src="/img/nc-news.jpg" alt="nc-news" />
            </div>
            <div className="details">
              {/* <p>Nc-News</p> */}
            </div>
          </div>
          <div>
            <a href="https://cslori-nc-news.netlify.com/">
              <h4>TicTacToe Game</h4>
            </a>
            <div className="imgBox">
              <img src="/img/cowandchicken.jpg" alt="tictactoe" />
            </div>
            <div className="details">
              {/* <p>CowAndChicken</p> */}
            </div>
          </div>
          <div>
            <a href="https://cslori-nc-news.netlify.com/">
              <h4>Northcoders Final Project</h4>
            </a>
            <div className="imgBox">
              <img src="/img/ReactorGrowFinal2.jpg" alt="finalproject" />
            </div>
            <div className="details">
              {/* <p>Reator Grow</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
