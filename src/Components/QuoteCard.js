import React from 'react';
import './Component.css';
import axios from 'axios';

const sampleQuote = [{
    quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
    character: "Nelson Muntz",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
}]

class QuoteCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quotes: sampleQuote,
        }
        this.getQuote = this.getQuote.bind(this);
    }


    getQuote = () => {
        axios.get('https://thesimpsonsquoteapi.glitch.me/')
            .then(response => response.data)
            .then(data => {
                this.setState({
                    quotes: data.results[0],
                });
            });
    }


    render() {

        return (
            <figure className="QuoteCard">
                <img src={this.state.quotes.image} alt="quotation" />
                <figcaption>
                    <blockquote>{this.state.quotes.quote}</blockquote>
                    <cite>{this.state.quotes.character}</cite>
                </figcaption>
                <button onClick={this.getQuote}>New quote</button>
            </figure>
        )
    }
};


export default QuoteCard;