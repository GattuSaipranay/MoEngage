import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const BreweryDetail = () => {
    const { id } = useParams();
    const [brewery, setBrewery] = useState({});
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchBrewery = async () => {
            const response = await api.get(`/breweries/${id}`);
            setBrewery(response.data);
        };

        const fetchReviews = async () => {
            const response = await api.get(`/breweries/${id}/reviews`);
            setReviews(response.data);
        };

        fetchBrewery();
        fetchReviews();
    }, [id]);

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        await api.post(`/breweries/${id}/review`, { rating, description });
        setRating(0);
        setDescription('');
        const response = await api.get(`/breweries/${id}/reviews`);
        setReviews(response.data);
    };

    return (
        <div>
            <h1>{brewery.name}</h1>
            <p>{brewery.address}</p>
            <p>{brewery.phone}</p>
            <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">Website</a>
            <h2>Reviews</h2>
            {reviews.map((review) => (
                <div key={review.id}>
                    <p>Rating: {review.rating}</p>
                    <p>{review.description}</p>
                </div>
            ))}
            <form onSubmit={handleReviewSubmit}>
                <input
                    type="number"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    placeholder="Rating"
                    min="1"
                    max="5"
                    required
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                />
                <button type="submit">Add Review</button>
            </form>
        </div>
    );
};

export default BreweryDetail;
