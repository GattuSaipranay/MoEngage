import React, { useState } from 'react';
import api from '../services/api';
import BreweryList from './BreweryList';

const Search = () => {
    const [query, setQuery] = useState('');
    const [breweries, setBreweries] = useState([]);

    const handleSearch = async () => {
        const response = await api.get(`/breweries/search?query=${query}`);
        setBreweries(response.data);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search breweries by city, name, or type"
            />
            <button onClick={handleSearch}>Search</button>
            <BreweryList breweries={breweries} />
        </div>
    );
};

export default Search;
