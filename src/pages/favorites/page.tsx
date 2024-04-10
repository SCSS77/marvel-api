'use client'

import React, { useState } from 'react'
import CharactersList from '@/components/charactersList'
import useCharacters from '@/hooks/useCharacters'
import Header from '@/components/Header'
import SearchBar from '@/components/SeachBar'
import { useFavorites } from '@/hooks/useFavorites'
import FavoritesLayout from '@/pages/favorites/layout'
import Loader from '@/components/Loader'

export default function FavoritesPage () {
  const [searchQuery, setSearchQuery] = useState('')
  const { data, loading } = useCharacters(searchQuery)
  const [favorites] = useFavorites()

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  if (loading) return <Loader />

  const characterCount = data ? data.length : 0

  return (
    <FavoritesLayout>
      <Header favoritesCount={favorites.length} />
      <main className='character-home-main'>
        <section className='character-home-container'>
          <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearch} characterCount={characterCount} />
          <ul className='character-home-list'>
            {favorites.map((character) => (
              <li key={character.id} className='character-home-card'>
                <CharactersList items={character} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </FavoritesLayout>
  )
}
