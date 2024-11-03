'use client'
import React from 'react'
import { useState } from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, Link, Button} from "@nextui-org/react";
import { BsStars } from "react-icons/bs";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <Navbar onMenuOpenChange={setIsMenuOpen} className='border-b border-white'>
                <NavbarContent> 
                    <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                    />
                    <NavbarBrand>
                        <Link color='foreground' href="/">
                            <h1 className="font-bold text-inherit font-poppins text-large">COMPORIENT</h1>
                        </Link>
                        
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center"> {/* big width screen */}
                    <NavbarItem className='space-x-2'>
                        <Link color="foreground" href="#" className='font-lora'>
                            <span className='font-roboto flex flex-row text-amber-300'>Shop <BsStars className='text-amber-300'/></span>
                        </Link>
                        
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#" className='font-lora'>
                            <span className='font-roboto'>Who are we?</span>
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link color="foreground" href="/access" className='font-lora underline'>
                            Login
                        </Link>
                        
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/access" className='font-lora'>
                            <Button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                Signup
                            </Button>
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu className='border-t border-white'> {/* small width screen */}
                    <NavbarItem className='space-x-2'>
                        
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#" className='font-lora'>
                            <span className='font-roboto'>Who are we?</span>
                        </Link>
                    </NavbarItem>
                </NavbarMenu>
                </Navbar>
        </>
  )
}

export default NavBar