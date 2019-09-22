import React, { Component } from 'react';
import { Link } from '@reach/router';
class Navbar extends Component {
  render() {
    const Sections = [
      { name: 'Home', uri: '/' },
      { name: 'Projects', uri: '/projects' },
      { name: 'About', uri: '/about' }
    ];
    const navbarLinks = Sections.map(section => {
      return (
        <li>
          <Link to={`${section.uri}`}>{section.name}</Link>
        </li>
      );
    });
    return (
      <nav>
        <h2 className="logo">{this.props.logoTitle}</h2>
        <ul>{navbarLinks}</ul>
      </nav>
    );
  }
}

export default Navbar;
