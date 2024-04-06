import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header () {
  return (
    <header className='header'>
      <div className='header__content'>
        <Link href='/'>
          <Image width={100} height={100} src='/logo.svg' alt='Marvel' className='header__logo' />
        </Link>
      </div>
    </header>
  )
}
