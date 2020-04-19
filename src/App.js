import React from 'react';
import './Components/Component.css';
import QuoteCard from './Components/QuoteCard';
import axios from 'axios';


const sampleQuote =   {
    quote:
      "Shoplifting is a victimless crime, like punching someone in the dark.",
    character: "Nelson Muntz",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
  };

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: sampleQuote,
    }
    this.getQuote = this.getQuote.bind(this)
  }

  getQuote() {
    axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.data)
      .then(data => {
        this.setState({
          quotes: data[0]
        });
      });
      
  };

  render() {

    return (
      <div className="App">
        <QuoteCard quotes={this.state.quotes} />
        <button type="button" onClick={this.getQuote}>Get new quote</button>
      </div>
    );
  }
}

export default App;
