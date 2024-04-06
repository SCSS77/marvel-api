'use client'

import React, { useState } from 'react'
import CharactersList from '@/components/charactersList'
import useCharacters from '@/hooks/useCharacters'
import Header from '@/components/Header'
import SearchBar from '@/components/SeachBar'

export default function HomePage () {
  const [searchQuery, setSearchQuery] = useState('')
  const { data, loading } = useCharacters(searchQuery)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  if (loading) return <span>Loading...</span>

  const characterCount = data ? data.length : 0

  return (
    <div className='character-home-page'>
      <Header />
      <main className='character-home-main'>
        <section className='character-home-container'>
          <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearch} characterCount={characterCount} />
          <ul className='character-home-list'>
            {data && data?.map((character) => (
              <li key={character.id} className='character-home-card'>
                <CharactersList items={character} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
