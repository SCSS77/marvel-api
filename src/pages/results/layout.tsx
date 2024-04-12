import React from 'react'
import '@fontsource/roboto-condensed'
import '@/app/globals.css'
import '@/app/detail-page.css'

interface ResultsLayoutProps {
    children: React.ReactNode;
}

const ResultsLayout: React.FC<ResultsLayoutProps> = ({ children }) => {
  return (
    <div className='character-home-page'>
      {children}
    </div>
  )
}

export default ResultsLayout
