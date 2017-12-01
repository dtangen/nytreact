import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return (
      <div>
        <h2>Search</h2>
        <form className="form-inline">
          <label className="sr-only" htmlFor="search-term">Search terms</label>
          <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0"
            id="search-term" placeholder="Headline keywords"
            value={this.props.filterText}
            onChange={this.handleFilterTextInputChange}
          />

          <label className="sr-only" htmlFor="start-year">Start Year</label>
          <div className="input-group mb-2 mr-sm-2 mb-sm-0">
            <input type="number" className="form-control" id="start-year" placeholder="1977" />
          </div>

          <label className="sr-only" htmlFor="end-year">End Year</label>
          <div className="input-group mb-2 mr-sm-2 mb-sm-0">
            <input type="number" className="form-control" id="end-year" placeholder="2017" />
          </div>

          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;