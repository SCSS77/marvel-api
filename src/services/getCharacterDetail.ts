export default async function getCharacterDetail (characterId: number) {
  const url = new URL(`https://gateway.marvel.com/v1/public/characters/${characterId}`)
  url.searchParams.append('ts', '1000')
  url.searchParams.append('apikey', 'ae5a97fbf2bfbe2bdffb46f3e4d7e4ff')
  url.searchParams.append('hash', 'd00ea43188f57a602b0e181280e0746a')

  const response = await fetch(url.toString())
  if (!response.ok) {
    throw new Error('Failed to fetch character detail')
  }

  const data = await response.json()
  return data.data.results[0]
}
