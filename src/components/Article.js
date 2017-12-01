import React, { Component } from 'react';
import '../css/Article.css';

class Article extends Component {
  render() {
    return (
      <li className="list-group-item">
        <h3><a href={this.props.article.url} target="_blank">{this.props.article.title}</a></h3>
        <small className="text-muted">{this.props.article.date}</small>
      </li>
    );
  }
}

export default Article;