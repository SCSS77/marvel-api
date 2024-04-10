import React from 'react'
import '@fontsource/roboto-condensed'
import '@/app/globals.css'
import '@/app/detail-page.css'

interface FavoritesLayoutProps {
    children: React.ReactNode;
}

const FavoritesLayout: React.FC<FavoritesLayoutProps> = ({ children }) => {
  return (
    <div className='character-home-page'>
      {children}
    </div>
  )
}

export default FavoritesLayout
