import getCharacterDetail from '@/services/getCharacterDetail'
import { useEffect, useState } from 'react'

import { setLocalStorageWithExpiry, getLocalStorageWithExpiry } from '@/utils/localStorage'

export default function useCharacterDetail (characterId: number) {
  const [characterDetail, setCharacterDetail] = useState(null)

  useEffect(() => {
    const cookieMarvelCharacterDetail = getLocalStorageWithExpiry('marvelCharacterDetail')
    const cookieParser = cookieMarvelCharacterDetail !== null && JSON.parse(cookieMarvelCharacterDetail)

    if (cookieMarvelCharacterDetail !== null) {
      setCharacterDetail(JSON.parse(cookieParser.value))
      return
    }

    async function fetchCharacterDetail () {
      try {
        const detail = await getCharacterDetail(characterId)
        setCharacterDetail(detail)

        const dataParser = JSON.stringify(detail)
        setLocalStorageWithExpiry('marvelCharacterDetail', dataParser, 1)
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
