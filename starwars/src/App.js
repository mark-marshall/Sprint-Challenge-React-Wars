import React, { Component } from 'react';
import './App.css';
import Characters from './components/Characters';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [], initialURL: "https://swapi.co/api/people/", nextURL: '', prevURL: '',
    };
  }

  updatePageURLS() {
    
  }

  componentDidMount() {
    this.getCharacters(this.state.initialURL);
  }

  getCharacters = (URL) => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results });
        this.setState({ nextURL: data.next });
        this.setState({ prevURL: data.previous });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Characters starWarsData =  {this.state.starwarsChars}/>
        <button key="previous">PREVIOUS</button>
        <button key="next">NEXT</button>
        <p><span role="img" aria-label="stars">✨</span></p>
      </div>
    );
  }
}

export default App;
