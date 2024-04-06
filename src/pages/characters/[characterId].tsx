'use client'

import React from 'react'
import { useRouter } from 'next/router'
import useCharacterDetail from '@/hooks/useCharacterDetail'
import CharacterLayout from '@/pages/characters/layout'

const CharacterDetailPage = () => {
  const router = useRouter()
  const { characterId } = router.query
  const { characterDetail, loading } = useCharacterDetail(Number(characterId))

  if (loading) return <span>Loading...</span>

  return (
    <CharacterLayout>
      <section className='character-detail-top-card'>
        {characterDetail
          ? (
            <div className='character-detail-top-card__content'>
              <div className='character-detail-top-card__image-content'>
                <img
                  src={`${characterDetail.thumbnail.path}.${characterDetail.thumbnail.extension}`}
                  alt={characterDetail.name}
                  height={320}
                  width={320}
                  className='character-detail-top-card__image'
                />
              </div>
              <div className='character-detail-top-card__info'>
                <h1 className='character-detail-top-card__title'>{characterDetail.name}</h1>
                <p className='character-detail-top-card__description'>
                  {characterDetail.description || 'Without description.'}
                </p>
              </div>
            </div>
            )
          : (
            <div>No character details found.</div>
            )}
      </section>
      <section className='character-detail-container' />
    </CharacterLayout>
  )
}

export default CharacterDetailPage
