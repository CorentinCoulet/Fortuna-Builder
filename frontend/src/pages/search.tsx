import React, { useState } from 'react';
import SearchItems from "../components/Searching/SearchItems.tsx";
import ItemsListSearch from "../components/Searching/ItemsListSearch.tsx";
import '../styles/pages/Search.scss';

interface Filters {
    itemName: string;
    levelRange: [number, number];
    selectedRarities: string[];
    selectedEquipmentTags: string[];
}

const Search: React.FC = () => {
    const [searchTriggered, setSearchTriggered] = useState<boolean>(false);
    const [filters, setFilters] = useState<Filters | null>(null);

    const handleSearch = (appliedFilters: Filters) => {
        setFilters(appliedFilters);
        setSearchTriggered(true);
    };

    return (
        <div className='searching'>
            <SearchItems onSearch={handleSearch} />
            {searchTriggered && filters ? (
                <ItemsListSearch searchTriggered={searchTriggered} filters={filters} />
            ) : (
                <div className="placeholder-container">
                    <p>Aucune recherche effectuée pour le moment.</p>
                </div>
            )}
        </div>
    );
};

export default Search;
