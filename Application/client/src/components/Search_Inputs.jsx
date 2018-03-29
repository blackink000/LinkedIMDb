import React, { Component } from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Search_Inputs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm1: props.firstname ? props.firstname + ' ' + props.lastname : '',
      searchTerm2: '',
      connectionResults: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    const target = event.target;
    console.log(target);
  
    this.setState( {
     [event.target.name]: event.target.value
    });
  }
  // Submit Search
  handleSubmit(event) {
    event.preventDefault();  
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <form action='#' onSubmit={this.handleSubmit}>
          <label>
            Name 1
              <input 
                type="text" 
                id="searchTerm1" 
                value={this.state.searchTerm1} 
                name="searchTerm1" 
                onChange={this.handleChange}
              />
          </label>
          <label>
            Name 2
              <input 
                type="text" 
                id="searchTerm2" 
                value={this.state.searchTerm2} 
                name="searchTerm2"
                onChange={this.handleChange}
              />
          </label>
          <div className="button-line">
            <RaisedButton type="submit" label="Make Connections" primary />
          </div>
        </form>
      </div>
    )
  }  
}

export default Search_Inputs