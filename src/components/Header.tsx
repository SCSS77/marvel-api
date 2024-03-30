import Link from 'next/link'
import React from 'react'

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <header className='flex justify-between items-center p-4 bg-gray-200'>
      <h1><Link href='/'>Marvel Characters</Link></h1>
      <div className='flex'>
        <input
          type='text'
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder='Search characters...'
          className='px-2 py-1 mr-2 border rounded-md'
        />
        <button onClick={handleSearch} className='px-4 py-1 bg-blue-500 text-white rounded-md'>
          Search
        </button>
      </div>
    </header>
  )
}

export default Header
