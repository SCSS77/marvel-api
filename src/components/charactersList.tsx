import React from 'react'
import Image from 'next/image'
import { Results } from '@/characters'
import Link from 'next/link'

interface Props {
  items: Results;
  isFavorite: boolean;
  toggleFavorite: () => void;
}

function CharactersList ({ items }:Props) {
  const imageUrl = `${items.thumbnail.path}/portrait_uncanny.${items.thumbnail.extension}`
  const imageUrlLarge = `${items.thumbnail.path}/standard_fantastic.${items.thumbnail.extension}`

  return (
    <>
      <Link href={`/characters/${items.id}`}>
        <div className='character-home-card__image-container'>
          <Image
            src={imageUrl}
            alt={items.name}
            height={400}
            width={500}
            className='character-home-card__image character-home-card__image--mobile'
          />
          <Image
            src={imageUrlLarge}
            alt={items.name}
            height={400}
            width={500}
            className='character-home-card__image character-home-card__image--desktop'
          />
        </div>
        <div className='character-home-card__info'>
          <h2 className='character-home-card__title'>{items.name}</h2>
        </div>
      </Link>
    </>
  )
}

export default CharactersList
