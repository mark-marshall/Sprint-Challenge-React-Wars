import React, { Component } from 'react';
import './App.css';
import Characters from './components/Characters';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [], starwars2: 'sbdkb', getNext: this.getCharacters("https://swapi.co/api/people/?page=7&page2="),
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/?page=3&page2=");
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
        console.log(data.next);
        console.log(data.prev);
        this.setState({ starwarsChars: data.results });
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
        <p><span role="img" aria-label="stars">✨</span></p>
      </div>
    );
  }
}

export default App;
