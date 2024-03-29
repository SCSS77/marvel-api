import getCharactersList from '@/services/getCharactersList'
import { Results, Characters } from '@/characters'
import { useEffect, useState } from 'react'

export default function useCharacters () {
  const [charactersResults, setCharactersResults] = useState<Results[]| null>(null)

  useEffect(() => {
    async function fetchData () {
      try {
        const data: Characters = await getCharactersList()
        setCharactersResults(data.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return {
    data: charactersResults
  }
}
