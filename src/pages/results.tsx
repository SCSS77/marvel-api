import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const ResultsPage: React.FC = () => {
  const router = useRouter()
  const { query } = router.query || {}
  const [searchResults, setSearchResults] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1000&apikey=ae5a97fbf2bfbe2bdffb46f3e4d7e4ff&hash=d00ea43188f57a602b0e181280e0746a`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setSearchResults(data.data.results)
      } catch (error) {
        console.error('Error fetching search results:', error)
      }
    }

    if (query) {
      fetchData()
    }
  }, [query])

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      {searchResults.map((result: any) => (
        <div key={result.id}>{result.name}</div>
      ))}
    </div>
  )
}

export default ResultsPage
