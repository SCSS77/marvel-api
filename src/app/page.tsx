'use client'

import React, { useState } from 'react'
import CharactersList from '@/components/charactersList'
import useCharacters from '@/hooks/UseCharacters'

export default function HomePage () {
  const [searchQuery, setSearchQuery] = useState('')
  const { data, loading } = useCharacters(searchQuery)

  const handleSearch = () => {
    setSearchQuery(searchQuery)
  }

  if (loading) return <span>Loading...</span>

  return (
    <div>
      <header className='flex justify-between items-center p-4 bg-gray-200'>
        <h1 className='text-2xl font-bold'>Marvel Characters</h1>
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
      <main className='flex flex-col items-center justify-between p-24'>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full container gap-2 mt-12 '>
          {data && data?.map((character) => (
            <div key={character.id} className='min-w-full p-6 bg-white dark:bg-slate-800 dark:text-white rounded-md  transition-all '>
              <CharactersList items={character} />
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
