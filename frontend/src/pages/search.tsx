import React, {useState} from 'react';
import SearchItems from "../components/SearchItems.tsx";
import ListSearchItems from "../components/ListSearchItems.tsx";
import '../styles/pages/Search.scss';

interface Filters {
    itemName: string;
    levelRange: [number, number];
    selectedRarities: number[];
    selectedEquipmentTypes: number[];
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
        {!searchTriggered ? (
            <div className="placeholder-container">
                <p>Aucune recherche effectuée pour le moment.</p>
            </div>
        ) : (
            <ListSearchItems filters={filters} />
        )}
    </div>
  );
};

export default Search;
