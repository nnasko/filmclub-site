"use client"
import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import Navigation from '../components/Navigation'

const page = () => {
  return (
    <NextUIProvider>
      <main className='dark'>
        <Navigation />
      </main>
    </NextUIProvider>
  )
}

export default page