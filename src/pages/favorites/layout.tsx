import React from 'react'
import '@fontsource/roboto-condensed'
import '@/app/globals.css'
import '@/app/detail-page.css'
import Header from '@/components/Header'

interface FavoritesLayoutProps {
    children: React.ReactNode;
}

const FavoritesLayout: React.FC<FavoritesLayoutProps> = ({ children }) => {
  return (
    <div className='character-home-page'>
      <Header />
      <main className='character-home-main'>{children}</main>
    </div>
  )
}

export default FavoritesLayout
