export function setLocalStorageWithExpiry (key: string, value: string, expiryInDays: number): void {
  const now = new Date()
  const expiryDate = new Date(now.getTime() + expiryInDays * 24 * 60 * 60 * 1000)
  const item = {
    value,
    expiry: expiryDate.getTime()
  }
  localStorage.setItem(key, JSON.stringify(item))
}

export function getLocalStorageWithExpiry (key: string): string | null {
  const item = localStorage.getItem(key)
  if (!item) {
    return null
  }
  const parsedItem = JSON.parse(item)
  const now = new Date().getTime()

  if (now > parsedItem.expiry) {
    localStorage.removeItem(key)
    return null
  }
  return item
}
