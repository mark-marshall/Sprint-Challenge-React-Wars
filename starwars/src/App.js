import React, { Component } from 'react';
import './App.css';
import Characters from './components/Characters';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [], currentURL: "https://swapi.co/api/people/", nextURL: '', prevURL: '',
    };
  }

  updatePageURL(button) {
    if (button){
      this.setState({
        currentURL: this.state.nextURL,
      })
    } else {
      this.setState({
      currentURL: this.state.prevURL,
    })
    }
    this.getCharacters(this.state.currentURL);
  }

  componentDidMount() {
    this.getCharacters(this.state.currentURL);
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
        <button className="button" onClick={() => this.updatePageURL()}>PREVIOUS</button>
        <button className="button" onClick={() => this.updatePageURL('next')}>NEXT</button>
        <p><span role="img" aria-label="stars">✨</span></p>
      </div>
    );
  }
}

export default App;
