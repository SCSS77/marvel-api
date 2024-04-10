import { useEffect, useState } from 'react'
import getCharactersList from '@/services/getCharactersList'
import { setLocalStorageWithExpiry } from '@/utils/localStorage'

interface Character {
  id: number;
  name: string;
}

interface CharactersResponse {
  data: {
    results: Character[];
  };
}

export default function useCharacters (searchQuery: string) {
  const [charactersResults, setCharactersResults] = useState<Character[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: CharactersResponse = await getCharactersList(searchQuery)
        setCharactersResults(data.data.results)

        const dataParser = JSON.stringify(data.data.results)
        setLocalStorageWithExpiry('marvelCharacters', dataParser, 1)
      } catch (error) {
        console.error('Error fetching characters:', error)
      }
    }

    fetchData()
  }, [searchQuery])

  return {
    data: charactersResults,
    loading: !charactersResults
  }
}
