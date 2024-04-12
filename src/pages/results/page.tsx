'use client'

import React, { useState, useEffect } from 'react'
import CharactersList from '@/components/charactersList'
import useCharacters from '@/hooks/useCharacters'
import Header from '@/components/Header'
import SearchBar from '@/components/SeachBar'
import { useFavorites } from '@/hooks/useFavorites'
import ResultsLayout from './layout'
import Loader from '@/components/Loader'
import { useRouter } from 'next/router'

const ResultsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { data, loading } = useCharacters(searchQuery)
  const [favorites, toggleFavorite] = useFavorites()
  const characterCount = data ? data.length : 0
  const router = useRouter()
  const { query } = router.query || {}
  const [searchResults, setSearchResults] = useState<any[]>([])

  const handleSearch = (searchQuery: string) => {
    setSearchQuery(searchQuery)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1000&apikey=ae5a97fbf2bfbe2bdffb46f3e4d7e4ff&hash=d00ea43188f57a602b0e181280e0746a`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setSearchResults(data.data.results)
      } catch (error) {
        console.error('Error fetching search results:', error)
      }
    }

    if (query) {
      fetchData()
    }
  }, [query])

  if (loading) return <Loader />

  return (
    <ResultsLayout>
      <Header favoritesCount={favorites.length} />
      <main className='character-home-main'>
        <section className='character-home-container'>
          <SearchBar onSearch={handleSearch} characterCount={characterCount} />
          <ul className='character-home-list'>
            {searchResults.map((result: any) => (
              <li key={result.id} className='character-home-card'>
                <CharactersList
                  items={result}
                  isFavorite={favorites.some((fav) => fav.id === result.id)}
                  toggleFavorite={() => toggleFavorite(result)}
                />
                <div className='character-home-card__favorites'>
                  {favorites.some((fav) => fav.id === result.id)
                    ? (
                      <img src='/heart-full.svg' alt='Remove from Favorites' onClick={() => toggleFavorite(result)} />
                      )
                    : (
                      <img src='/heart-empty.svg' alt='Add to Favorites' onClick={() => toggleFavorite(result)} />
                      )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </ResultsLayout>
  )
}

export default ResultsPage
