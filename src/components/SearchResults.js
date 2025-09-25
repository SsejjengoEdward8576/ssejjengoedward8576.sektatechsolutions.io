import React from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const SearchResults = ({ items = [] }) => {
    const query = useQuery();
    const searchTerm = query.get('query') || '';

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="search-results">
            <h2>Search Results for "{searchTerm}"</h2>
            {filteredItems.length > 0 ? (
                <ul>
                    {filteredItems.map(item => (
                        <li key={item.id}>
                            <strong>{item.name}</strong> - {item.description}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </section>
    );
}

export default SearchResults;