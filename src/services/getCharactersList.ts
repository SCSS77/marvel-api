export default async function getCharactersList () {
  const res = await fetch('https://gateway.marvel.com/v1/public/comics?ts=1000&apikey=ae5a97fbf2bfbe2bdffb46f3e4d7e4ff&hash=d00ea43188f57a602b0e181280e0746a')

  if (!res.ok) throw new Error('Fetch failed')

  return res.json()
}
