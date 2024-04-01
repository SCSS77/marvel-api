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
        <h2>{items.name}</h2>
        <Image
          src={`${items.thumbnail.path}.${items.thumbnail.extension}`}
          alt={items.name}
          height={400}
          width={500}
        />
      </Link>
    </>
  )
}

export default CharactersList
