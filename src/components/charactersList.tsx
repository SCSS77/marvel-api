import React from 'react'
import Image from 'next/image'
import { Results } from '@/characters'

interface Props {
  items: Results
}

function CharactersList ({ items }:Props) {
  return (
    <>
      <h2>{items.name}</h2>
      <Image
        src={`${items.thumbnail.path}.${items.thumbnail.extension}`}
        alt={items.name}
        height={400}
        width={500}
      />
    </>
  )
}

export default CharactersList
