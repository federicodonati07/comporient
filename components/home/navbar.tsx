'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, Link, Button, Avatar, Tooltip} from "@nextui-org/react";
import { BsStars } from "react-icons/bs";
import supabase from '@/src/supabase/clinet';
import { useRouter } from 'next/navigation';
import { CiLogout } from 'react-icons/ci';


const NavBar = () => {

    const router = useRouter()

    const [session, setSession] = useState(false)
    const [fullname, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [avatar_url, setAvatarUrl] = useState("")
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = async()=>{
        const {} = await supabase.auth.signOut();
        window.location.reload();
    }

    const handleAccount = ()=>{
        router.push("/protected/private");
    }

    useEffect(()=>{
        const getSession = async ()=>{
        const {data: {session}} = await supabase.auth.getSession()

            if(session == null){
                setSession(false)
            }else{
                setAvatarUrl(session?.user.user_metadata.avatar_url)
                setEmail(session?.user.user_metadata.email)
                setFullName(session?.user.user_metadata.full_name)
                setSession(true)
            }

            
        }
        getSession()
    }, [setAvatarUrl, setFullName, setEmail])

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
                    {session ? (
                        <>
                            <NavbarItem className='hidden sm:flex'>
                                <Button radius="full" variant="ghost" onClick={handleLogout}>
                                    <CiLogout className='font-bold text-xl'/>
                                    <span className='font-roboto font-bold'>Logout</span>
                                </Button>
                            </NavbarItem>
                            <NavbarItem className='hidde lg:flex'>
                                <Tooltip showArrow={true} content={
                                    <>
                                        <span className='font-poppins font-bold'>{fullname}</span>
                                        <span className='font-poppins font-roboto text-sm'>{email}</span>
                                    </>
                                }>
                                    <Avatar src={avatar_url} size="md" className="cursor-pointer hover:border hover:border-gray-400" onClick={handleAccount}/>
                                </Tooltip>
                            </NavbarItem>
                        </>
                    ) : (
                        <>
                            <NavbarItem className="hidden sm:flex">
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
                        </>
                    )}
                    
                </NavbarContent>

                <NavbarMenu className='border-t border-white'> {/* small width screen */}
                    {session ? (
                        <>
                            <NavbarItem className='space-x-2 block sm:hidden' onClick={handleLogout}>
                                <span className='font-roboto text-lg text-red-400'>Logout</span>
                            </NavbarItem>
                        </>
                    ):(
                        ""
                    )}
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