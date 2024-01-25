"use client"
import React from 'react'
import Navigation from '../components/Navigation'
import { NextUIProvider } from '@nextui-org/react'
import Gallery from '../components/gallery/Gallery'
import Footer from '../components/Footer'

const page = () => {
  return (
    <NextUIProvider>
      <main className='dark'>
        <Navigation />
        <Gallery />
        <Footer />
      </main>
    </NextUIProvider>
  )
}

export default page