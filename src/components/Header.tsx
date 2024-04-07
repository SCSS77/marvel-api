import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface HeaderProps {
  favoritesCount: number;
}

const Header: React.FC<HeaderProps> = ({ favoritesCount }) => {
  return (
    <header className='header'>
      <div className='header__content'>
        <Link href='/'>
          <Image width={100} height={100} src='/logo.svg' alt='Marvel' className='header__logo' />
        </Link>
        <Link href='/favorites'>
          <div className='header__favorites' onClick={() => console.log('Navigate to favorites page')}>
            {favoritesCount === 0
              ? (
                <Image src='/heart-empty.svg' class='header__favorites-image' alt='Empty Favorites' width={24} height={24} />
                )
              : (
                <Image src='/heart-full.svg' class='header__favorites-image' alt='Favorites' width={24} height={24} />
                )}
            <span>{favoritesCount}</span>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
