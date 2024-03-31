import getCharactersList from '@/services/getCharactersList'
import { useEffect, useState } from 'react'

import { setLocalStorageWithExpiry, getLocalStorageWithExpiry } from '@/utils/localStorage'

export default function useCharacters (searchQuery) {
  const [charactersResults, setCharactersResults] = useState(null)

  useEffect(() => {
    const cookieValue = getLocalStorageWithExpiry('marvelCharacters')
    const cookieParser = cookieValue !== null && JSON.parse(cookieValue)

    if (cookieValue !== null) {
      setCharactersResults(JSON.parse(cookieParser.value))
      return
    }

    async function fetchData () {
      try {
        const data = await getCharactersList(searchQuery)
        setCharactersResults(data.data.results)

        const dataParser = JSON.stringify(data.data.results)
        setLocalStorageWithExpiry('marvelCharacters', dataParser, 1)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [searchQuery])

  return {
    data: charactersResults,
    loading: !charactersResults
  }
}
