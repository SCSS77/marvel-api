import React, { useState } from 'react'
import CharactersList from '@/components/charactersList'
import useCharacters from '@/hooks/useCharacters'
import SearchBar from '@/components/SeachBar'
import { useFavorites } from '@/hooks/useFavorites'
import FavoritesLayout from '@/pages/favorites/layout'
import Loader from '@/components/Loader'

export default function FavoritesPage () {
  const [searchQuery, setSearchQuery] = useState('')
  const { data, loading } = useCharacters(searchQuery)
  const [favorites] = useFavorites([])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  if (loading) return <Loader />

  const characterCount = data ? data.length : 0

  return (
    <FavoritesLayout>
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
    </FavoritesLayout>
  )
}
