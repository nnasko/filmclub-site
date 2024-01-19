import React from 'react'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='footer border mt-8 border-b-transparent mb-24 border-t-secondary border-l-transparent border-r-transparent text-white w-full h-full'>
      <div className='container p-12  flex justify-between'>
        <Logo />
        <p className='text-slate-400'>All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer