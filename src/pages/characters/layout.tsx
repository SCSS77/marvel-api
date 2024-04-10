import React from 'react'
import '@fontsource/roboto-condensed'
import '@/app/globals.css'
import '@/app/detail-page.css'

interface CharacterLayoutProps {
    children: React.ReactNode;
}

const CharacterLayout: React.FC<CharacterLayoutProps> = ({ children }) => {
  return (
    <div className='character-detail-page'>
      {children}
    </div>
  )
}

export default CharacterLayout
