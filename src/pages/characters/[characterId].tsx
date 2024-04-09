'use client'

import React from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import useCharacterDetail from '@/hooks/useCharacterDetail'
import { useFavorites } from '@/hooks/useFavorites'
import CharacterLayout from '@/pages/characters/layout'
import Loader from '@/components/Loader'

const CharacterDetailPage = () => {
  const router = useRouter()
  const { characterId } = router.query
  const { characterDetail, loading } = useCharacterDetail(Number(characterId))
  const [favorites] = useFavorites([])

  if (loading) return <Loader />

  return (
    <CharacterLayout>
      <Header favoritesCount={favorites.length} />
      <main className='character-detail-main'>
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
      </main>
    </CharacterLayout>
  )
}

export default CharacterDetailPage
