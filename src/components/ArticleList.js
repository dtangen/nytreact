import React, { Component } from 'react';
import ArticleNav from './ArticleNav';
import Article from './Article';

class ArticleList extends Component {

  renderList() {
    
    let searchTerm = this.props.filterText.toLowerCase();
    
    let rows = [];
    
    this.props.articles.forEach((article) => {
      let title = article.title.toLowerCase();
      
      if (title.indexOf(searchTerm) === -1 ) {
        
        return;
      }
      
      rows.push(<Article key={article.title} article={article} />);
    });
    
    return rows;
  } 

  render() {
    return (
      <div>
        <div><ArticleNav /></div>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default ArticleList;