"use client"
import React from 'react'
import Navigation from '../components/Navigation'
import { NextUIProvider } from '@nextui-org/react'

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