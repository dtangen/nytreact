import React, { Component } from 'react';

class ArticleNav extends Component {
  render() {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="">Results</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Saved</a>
        </li>
      </ul>
    );
  }
}

export default ArticleNav;