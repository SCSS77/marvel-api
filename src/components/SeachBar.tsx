import React from 'react'

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  characterCount: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, characterCount }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className='search-bar__input-container'>
      <input
        type='text'
        value={searchQuery}
        onChange={handleSearch}
        placeholder='Search a character...'
        className='search-bar__input'
      />
      <span className='search-bar__counter'>
        {characterCount} Results
      </span>
    </div>
  )
}

export default SearchBar
