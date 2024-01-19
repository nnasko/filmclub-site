import { Button, Input } from '@nextui-org/react'
import React from 'react'

const Emailinterest = () => {
  return (
    <div>
        <p className='text-primary font-bold text-xl pt-16'>INTERESTED?</p>
        <p>Register your interest by entering your email below!</p>
        <div className='flex justify-center'>
          <Input type='email' label='Email' placeholder='Enter your email' isRequired className='pt-4' />
          <Button variant='solid' startContent></Button>
        </div>
    </div>
  )
}

export default Emailinterest