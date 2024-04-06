import React from 'react'
import '@fontsource/roboto-condensed'
import '@/app/globals.css'
import '@/app/detail-page.css'
import Header from '@/components/Header'

interface CharacterLayoutProps {
    children: React.ReactNode;
}

const CharacterLayout: React.FC<CharacterLayoutProps> = ({ children }) => {
  return (
    <div className='character-detail-page'>
      <Header />
      <main className='character-detail-main'>{children}</main>
    </div>
  )
}

export default CharacterLayout
