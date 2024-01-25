import React from 'react'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='footer border mt-8 border-b-transparent border-t-secondary border-l-transparent border-r-transparent text-white w-full h-full'>
      <div className='container p-12  flex justify-between'>
        <Logo />
        <p className='text-white translate-y-4'>All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer