'use client'

import React from 'react'
import { useRouter } from 'next/router'
import CharacterLayout from '@/pages/characters/layout'
import Header from '@/components/Header'
import Loader from '@/components/Loader'
import useCharacterDetail from '@/hooks/useCharacterDetail'
import { useFavorites } from '@/hooks/useFavorites'

const CharacterDetailPage = () => {
  const router = useRouter()
  const { characterId } = router.query
  const { characterData, loading } = useCharacterDetail(Number(characterId))
  const [favorites] = useFavorites()

  if (loading) return <Loader />

  return (
    <CharacterLayout>
      <Header favoritesCount={favorites.length} />
      <main className='character-detail-main'>
        {characterData && (
          <section className='character-detail-top-card'>
            <div className='character-detail-top-card__content'>
              <div className='character-detail-top-card__image-content'>
                <img
                  src={`${characterData.character.thumbnail.path}.${characterData.character.thumbnail.extension}`}
                  alt={characterData.character.name}
                  height={320}
                  width={320}
                  className='character-detail-top-card__image'
                />
              </div>
              <div className='character-detail-top-card__info'>
                <h1 className='character-detail-top-card__title'>{characterData.character.name}</h1>
                <p className='character-detail-top-card__description'>
                  {characterData.character.description || 'Without description.'}
                </p>
              </div>
            </div>
          </section>
        )}

        <section className='character-detail-comics'>
          <h2 className='character-detail-comics__title'>Comics</h2>
          <div className='character-detail-comics__container'>
            <ul className='character-detail-comics__list'>
              {characterData && characterData.comics && characterData.comics.map(comic => (
                <div key={comic.id} className='character-detail-comics__card'>
                  <img className='character-detail-comics__card-image' src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
                  <p className='character-detail-comics__card-title'>{comic.title}</p>
                </div>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </CharacterLayout>
  )
}

export default CharacterDetailPage
