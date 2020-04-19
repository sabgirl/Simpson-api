import React from 'react';
import './Component.css';




function QuoteCard({ quotes }) {

    return (
        <figure className="QuoteCard">
            <img src={quotes.image} alt="quotation" />
            <figcaption>
                <blockquote>{quotes.quote}</blockquote>
                <cite>{quotes.character}</cite>
            </figcaption>
        </figure>
    )
}

export default QuoteCard;