import { Avatar, Button, Divider, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import React from 'react'
import Logo from './Logo'

const Navigation = () => {
  return (
    <div>
        <Navbar className='pt-2 pb-2 flex justify-start bg-black border-secondary border-b-2' isBordered>
          <NavbarBrand>
            <Logo />
            <Divider orientation='vertical' className='h-12 bg-white m-2'/>
            <p className='text-lg font-light'>Film Club</p>
          </NavbarBrand>
          <NavbarContent justify='start' className='hidden sm:flex w-full gap-12 pl-32 pt-4 text-xl font-bold'>
            <NavbarItem>
              <Button variant='light'>
              <Link href='/' className='font-bold text-2xl'>HOME</Link>  
              </Button> 
            </NavbarItem>
            <NavbarItem>
            <Button variant='light'>
              <Link href='/vote' className='font-bold text-2xl'>VOTING</Link> 
              </Button> 
            </NavbarItem>
            <NavbarItem>
              <Button variant='light'>
              <Link href='/photos' className='font-bold text-2xl'>GALLERY</Link>   
              </Button> 
            </NavbarItem>
          </NavbarContent>
          <NavbarContent className='hidden sm:grid justify-end'>
          </NavbarContent>
        </Navbar>
    </div>
  )
}

export default Navigation
