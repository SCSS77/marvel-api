import React from 'react'
import Image from 'next/image'
import { Results } from '@/characters'
import Link from 'next/link'

interface Props {
  items: Results
}

function CharactersList ({ items }:Props) {
  return (
    <>
      <Link href={`/characters/${items.id}`}>
        <div className='character-home-card__image-container'>
          <Image
            src={`${items.thumbnail.path}.${items.thumbnail.extension}`}
            alt={items.name}
            height={400}
            width={500}
            className='character-home-card__image'
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
