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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className='search-bar__input-container'>
      <input
        type='text'
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder='Search for a character...'
        className='search-bar__input'
      />
      <button className='search-bar__button' onClick={handleSearch}>Search</button>
      <span className='search-bar__counter'>{characterCount} Results</span>
    </div>
  )
}

export default SearchBar
