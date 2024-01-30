"use client"
import React from 'react'
import AdminPage from '../components/admin/AdminPage'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

const page = () => {
  return (
    <div className='dark'>
        <Navigation />
        <div className='h-screen w-screen'>
        <AdminPage />
        </div>
        <Footer />
    </div>
  )
}

export default page