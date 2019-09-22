import React from 'react';
import '../App.css';

const Projects = () => {
  return (
    <div className="projectsContainer">
      <h3>Projects</h3>

      <div className="projects">
        <div className="row">
          <div>
            <a href="https://cslori-nc-news.netlify.com/">
              <h4>NC-News</h4>
            </a>
            <img src="/img/nc-news.jpg" alt="nc-news" />
            <p></p>
          </div>
          <div>
            <a href="https://cslori-nc-news.netlify.com/">
              <h4>TicTacToe Game</h4>
            </a>
            <img src="/img/cowandchicken.jpg" alt="tictactoe" />
            <p></p>
          </div>
          <div>
            <a href="https://cslori-nc-news.netlify.com/">
              <h4>Northcoders Final Project</h4>
            </a>
            <img src="/img/ReactorGrowFinal2.jpg" alt="finalproject" />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
