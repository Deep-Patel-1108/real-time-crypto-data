import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex py-4 px-4 fixed top-0 left-0 bg-white w-full border z-10 h-[60px] items-center border-b border-[#ccc]">
      <div className="flex gap-10 max-w-[1440px] w-full mx-auto justify-between items-center">
        <div className='flex justify-between items-center gap-3'>
          <Image src={'/cryptocurrency.png'} height={'50'} width={'50'} alt="logo" />
          <p className='mt-2 text-xl font-semibold'>Coin Stream</p>
        </div>
        <nav className="flex gap-6">
          <Link
            href={'/'}
            className="hover:font-bold min-w-14 text-center text-md"
          >
            Home
          </Link>
          <Link
            href={'/prices'}
            className="hover:font-bold min-w-14 text-center text-md"
          >
            Prices
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
