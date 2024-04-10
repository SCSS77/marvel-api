import { useEffect, useState } from 'react'
import getCharacterDetail from '@/services/getCharacterDetail'

export default function useCharacterDetail (characterId: number) {
  const [characterData, setCharacterData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      try {
        const data = await getCharacterDetail(characterId)
        setCharacterData(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching character detail:', error)
        setLoading(false)
      }
    }

    if (characterId) {
      fetchCharacterDetail()
    }
  }, [characterId])

  return {
    characterData,
    loading
  }
}
