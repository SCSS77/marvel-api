import { useState, useEffect } from 'react'
import { setLocalStorageWithExpiry, getLocalStorageWithExpiry } from '@/utils/localStorage'

export function useFavorites (initialFavorites) {
  const [favorites, setFavorites] = useState(initialFavorites)

  useEffect(() => {
    const storedFavorites = getLocalStorageWithExpiry('favorites')
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites)
      setFavorites(Array.isArray(parsedFavorites) ? parsedFavorites : [])
    }
  }, [])

  useEffect(() => {
    setLocalStorageWithExpiry('favorites', JSON.stringify(favorites), 1) // Store favorites with 1 day expiry
  }, [favorites])

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

  return [favorites, toggleFavorite]
}
