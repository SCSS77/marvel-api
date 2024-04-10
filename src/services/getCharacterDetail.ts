export default async function getCharacterDetail (characterId: number) {
  const characterUrl = new URL(`https://gateway.marvel.com/v1/public/characters/${characterId}`)
  characterUrl.searchParams.append('ts', '1000')
  characterUrl.searchParams.append('apikey', 'ae5a97fbf2bfbe2bdffb46f3e4d7e4ff')
  characterUrl.searchParams.append('hash', 'd00ea43188f57a602b0e181280e0746a')

  const comicsUrl = new URL(`https://gateway.marvel.com/v1/public/characters/${characterId}/comics`)
  comicsUrl.searchParams.append('ts', '1000')
  comicsUrl.searchParams.append('apikey', 'ae5a97fbf2bfbe2bdffb46f3e4d7e4ff')
  comicsUrl.searchParams.append('hash', 'd00ea43188f57a602b0e181280e0746a')

  const [characterResponse, comicsResponse] = await Promise.all([
    fetch(characterUrl.toString()),
    fetch(comicsUrl.toString())
  ])

  if (!characterResponse.ok || !comicsResponse.ok) {
    throw new Error('Failed to fetch character or comics detail')
  }

  const characterData = await characterResponse.json()
  const comicsData = await comicsResponse.json()

  return {
    character: characterData.data.results[0],
    comics: comicsData.data.results
  }
}
