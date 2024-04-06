import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <header className='character-home-header'>
      <div className='character-home-header--content'>
        <Link href='/'>
          <Image width={100} height={100} src='logo.svg' alt='Marvel' className='character-home-header--logo' />
        </Link>
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
      </div>
    </header>
  )
}

export default Header
