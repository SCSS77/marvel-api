import getCharacterDetail from '@/services/getCharacterDetail'
import { useEffect, useState } from 'react'

export default function useCharacterDetail (characterId: number) {
  const [characterDetail, setCharacterDetail] = useState(null)

  useEffect(() => {
    async function fetchCharacterDetail () {
      try {
        const detail = await getCharacterDetail(characterId)
        setCharacterDetail(detail)
      } catch (error) {
        console.error('Error fetching character detail:', error)
      }
    }

    fetchCharacterDetail()
  }, [characterId])

  return {
    characterDetail,
    loading: !characterDetail
  }
}
