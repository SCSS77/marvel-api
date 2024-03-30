export default async function getCharactersList (searchQuery = '') {
  const url = new URL('https://gateway.marvel.com/v1/public/characters')
  url.searchParams.append('ts', '1000')
  url.searchParams.append('apikey', 'ae5a97fbf2bfbe2bdffb46f3e4d7e4ff')
  url.searchParams.append('hash', 'd00ea43188f57a602b0e181280e0746a')
  if (searchQuery) {
    url.searchParams.append('nameStartsWith', searchQuery)
  }

  const res = await fetch(url.toString())

  if (!res.ok) throw new Error('Fetch failed')

  return res.json()
}
