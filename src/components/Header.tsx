import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface HeaderProps {
  favoritesCount: number
}

const Header: React.FC<HeaderProps> = ({ favoritesCount }) => {
  return (
    <header className='header'>
      <div className='header__content'>
        <Link href='/'>
          <Image width={100} height={100} src='/logo.svg' alt='Marvel' className='header__logo' />
        </Link>
        <Link href='/favorites' className='favorites-link'>
          <div className='header__favorites flex'>
            <div>
              <h3>Favorites</h3>
              <span>{favoritesCount}</span>
            </div>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
