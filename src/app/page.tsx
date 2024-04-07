'use client'

import React, { useState, useEffect } from 'react'
import CharactersList from '@/components/charactersList'
import useCharacters from '@/hooks/useCharacters'
import Header from '@/components/Header'
import SearchBar from '@/components/SeachBar'

import { setLocalStorageWithExpiry, getLocalStorageWithExpiry } from '@/utils/localStorage'

export default function HomePage () {
  const [searchQuery, setSearchQuery] = useState('')
  const { data, loading } = useCharacters(searchQuery)
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavorites = getLocalStorageWithExpiry('favorites')
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites)
      setFavorites(Array.isArray(parsedFavorites) ? parsedFavorites : [])
    }
  }, [])

  useEffect(() => {
    setLocalStorageWithExpiry('favorites', JSON.stringify(favorites), 1)
  }, [favorites])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const toggleFavorite = (character) => {
    const updatedFavorites = [...favorites]
    const index = updatedFavorites.findIndex((fav) => fav.id === character.id)
    if (index !== -1) {
      updatedFavorites.splice(index, 1)
    } else {
      updatedFavorites.push(character)
    }
    setFavorites(updatedFavorites)
  }

  if (loading) return <span>Loading...</span>

  const characterCount = data ? data.length : 0

  return (
    <div className='character-home-page'>
      <Header favoritesCount={favorites.length} />
      <main className='character-home-main'>
        <section className='character-home-container'>
          <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearch} characterCount={characterCount} />
          <ul className='character-home-list'>
            {data &&
              data.map((character) => (
                <li key={character.id} className='character-home-card'>
                  <CharactersList
                    items={character}
                    isFavorite={favorites.some((fav) => fav.id === character.id)}
                    toggleFavorite={() => toggleFavorite(character)}
                  />
                  <div className='character-home-card__favorites'>
                    {favorites.some((fav) => fav.id === character.id)
                      ? (
                        <img src='/heart-full.svg' alt='Remove from Favorites' onClick={() => toggleFavorite(character)} />
                        )
                      : (
                        <img src='/heart-empty.svg' alt='Add to Favorites' onClick={() => toggleFavorite(character)} />
                        )}
                  </div>
                </li>
              ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
