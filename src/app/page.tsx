'use client'

import React, { useState } from 'react'
import CharactersList from '@/components/charactersList'
import useCharacters from '@/hooks/useCharacters'
import Header from '@/components/Header'

export default function HomePage () {
  const [searchQuery, setSearchQuery] = useState('')
  const { data, loading } = useCharacters(searchQuery)

  const handleSearch = () => {
    setSearchQuery(searchQuery)
  }

  if (loading) return <span>Loading...</span>

  return (
    <div className='character-home-page'>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
      <main className='character-home-main'>
        <section className='character-home-container'>
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
