import React from 'react';
import { Link } from 'react-router-dom';

const BreweryList = ({ breweries }) => {
    return (
        <div>
            {breweries.map((brewery) => (
                <div key={brewery.id}>
                    <h2>{brewery.name}</h2>
                    <p>{brewery.address}</p>
                    <p>{brewery.phone}</p>
                    <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">Website</a>
                    <p>Rating: {brewery.rating}</p>
                    <Link to={`/brewery/${brewery.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default BreweryList;
