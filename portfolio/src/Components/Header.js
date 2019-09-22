import React, { Component } from 'react';
import Background from '../img/witheAndYellowWall.jpg';
import { Link } from '@reach/router';

const styles = {
  backgroundImage: `url(${Background})`,
  height: '50vh',
  backgroundSize: 'cover'
};

class Header extends Component {
  render() {
    return (
      <header style={styles}>
        <h1>{this.props.title}</h1>

        <Link to="/projects">
          <button>{this.props.button}</button>
        </Link>
      </header>
    );
  }
}

export default Header;
