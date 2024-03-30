import getCharactersList from '@/services/getCharactersList'
import { useEffect, useState } from 'react'

export default function useCharacters (searchQuery) {
  const [charactersResults, setCharactersResults] = useState(null)

  useEffect(() => {
    async function fetchData () {
      try {
        const data = await getCharactersList(searchQuery)
        setCharactersResults(data.data.results)
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
