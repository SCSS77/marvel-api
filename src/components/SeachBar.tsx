import React, { useState } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void;
  characterCount: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, characterCount }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSearch = () => {
    onSearch(searchQuery)
  }

  return (
    <div className='search-bar__input-container'>
      <input
        type='text'
        value={searchQuery}
        onChange={handleInputChange}
        placeholder='Search for a character...'
        className='search-bar__input'
      />
      <button onClick={handleSearch}>Search</button>
      <span className='search-bar__counter'>{characterCount} Results</span> {/* Display characterCount */}
    </div>
  )
}

export default SearchBar
