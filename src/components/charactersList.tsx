import React from 'react'
import Image from 'next/image'
import { Results } from '@/characters'

interface Props {
  items: Results
}

function CharactersList ({ items }:Props) {
  return (
    <>
      <h2>{items.title}</h2>
      <p>ID: <span>{items.id}</span></p>
      <Image src={items.thumbnail} alt='Marvel character' />
    </>
  )
}

export default CharactersList
