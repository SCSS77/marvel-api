import React from 'react'
import { useRouter } from 'next/router'
import useCharacterDetail from '@/hooks/useCharacterDetail'

const CharacterDetailPage = () => {
  const router = useRouter()
  const { characterId } = router.query
  const { characterDetail, loading } = useCharacterDetail(Number(characterId))

  if (loading) return <span>Loading...</span>

  return (
    <div>
      {characterDetail
        ? (
          <div>
            <h1>{characterDetail.name}</h1>
            <p>{characterDetail.description}</p>
            <img
              src={`${characterDetail.thumbnail.path}.${characterDetail.thumbnail.extension}`}
              alt={characterDetail.name}
              height={400}
              width={500}
            />
          </div>
          )
        : (
          <div>No character details found.</div>
          )}
    </div>
  )
}

export default CharacterDetailPage
