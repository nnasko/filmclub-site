"use client"
import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import Navigation from '../components/Navigation'
import VoteMain from '../components/vote/VoteMain'
import Footer from '../components/Footer'

const page = () => {
  return (
    <NextUIProvider>
      <main className='dark'>
        <Navigation />
        <VoteMain />
        <Footer />
      </main>
    </NextUIProvider>
  )
}

export default page