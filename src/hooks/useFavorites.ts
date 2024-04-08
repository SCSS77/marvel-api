import { useState, useEffect } from 'react'

export function useFavorites () {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favouriteMarvelCharacters')

    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites)
      setFavorites(parsedFavorites)
    }
  }, [])

  const toggleFavorite = (character) => {
    const updatedFavorites = [...favorites]
    const index = updatedFavorites.findIndex((fav) => fav.id === character.id)
    if (index !== -1) {
      updatedFavorites.splice(index, 1)
      localStorage.setItem('favouriteMarvelCharacters', JSON.stringify(updatedFavorites))
    } else {
      updatedFavorites.push(character)
      localStorage.setItem('favouriteMarvelCharacters', JSON.stringify(updatedFavorites))
    }
    setFavorites(updatedFavorites)
  }

  return [favorites, toggleFavorite]
}
