import React, { Component } from 'react';
import './App.css';
import Characters from './components/Characters';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentURL: 'https://swapi.co/api/people/',
      nextURL: '',
      prevURL: ''
    };
  }

  updatePageURL(next) {
    if (next && this.state.nextURL !== null) {
      this.setState({
        currentURL: this.state.nextURL
      });
    } else if (!next && this.state.prevURL !== null) {
      this.setState({
        currentURL: this.state.prevURL
      });
    }
    this.getCharacters(this.state.currentURL);
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
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
        <div className="button-container">
          <button className="button" onClick={() => this.updatePageURL()}>
            PREVIOUS
          </button>
          <button className="button" onClick={() => this.updatePageURL('next')}>
            NEXT
          </button>
        </div>
        <Characters starWarsData={this.state.starwarsChars} />
        <p>
          <span role="img" aria-label="stars">
            ✨
          </span>
        </p>
      </div>
    );
  }
}

export default App;
