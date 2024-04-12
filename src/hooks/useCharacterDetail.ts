import { useEffect, useState } from 'react'
import getCharacterDetail from '@/services/getCharacterDetail'

interface CharacterData {
  character: any;
  comics: any;
}

export default function useCharacterDetail (characterId: number) {
  const [characterData, setCharacterData] = useState<CharacterData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      try {
        const data = await getCharacterDetail(characterId)
        const limitedComics = data.comics.slice(0, 20)
        setCharacterData({ ...data, comics: limitedComics })
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
