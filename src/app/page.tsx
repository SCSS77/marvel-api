'use client'

import React, { useState } from 'react'
import CharactersList from '@/components/charactersList'
import useCharacters from '@/hooks/UseCharacters'
import Header from '@/components/Header'

export default function HomePage () {
  const [searchQuery, setSearchQuery] = useState('')
  const { data, loading } = useCharacters(searchQuery)

  const handleSearch = () => {
    setSearchQuery(searchQuery)
  }

  if (loading) return <span>Loading...</span>

  return (
    <div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
      <main className='flex flex-col items-center justify-between p-24'>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full container gap-2 mt-12 '>
          {data && data?.map((character) => (
            <div key={character.id} className='min-w-full p-6 bg-white dark:bg-slate-800 dark:text-white rounded-md  transition-all '>
              <CharactersList items={character} />
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
