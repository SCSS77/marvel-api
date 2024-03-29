'use client'

import CharactersList from '@/components/charactersList'
import useCharacters from '@/hook/useCharacters'

export default function HomePage () {
  const { data, loading } = useCharacters()

  if (loading) return <span>Loading...</span>

  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <h1>Marvel</h1>
      <section className=' grid gap-4'>
        {data && data?.map(characters => (
          <div key={characters.id} className='border-solid border-1 p20 shadow-lg shadow-gray'>
            <CharactersList items={characters} />
          </div>
        ))}

      </section>
    </main>
  )
}
