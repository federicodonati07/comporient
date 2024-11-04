"use client"
import React from 'react'
import { Button } from '@nextui-org/react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import supabase from '@/src/supabase/clinet'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Main = () => {
  //  Check of session  //
  const router = useRouter()

    const [fullname, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [avatar_url, setAvatarUrl] = useState("")

  useEffect(()=>{
    const getSession = async ()=>{
      const {data: {session}} = await supabase.auth.getSession()

      if(session){
        setFullName(session?.user.user_metadata.full_name)
        setEmail(session?.user.user_metadata.email)
        setAvatarUrl(session?.user.user_metadata.avatar_url)
      }else{
        router.push("/access/")
      }
    }

    getSession()
  }, [setFullName, setEmail, setAvatarUrl, router])

  const handleHome = ()=>{
    router.push("/");
  }
  

  return (
    <>
        <div>
          <div className='md:absolute md:top-0 md:left-0 justify-cetner items-center text-center m-5'>
                  <Button radius="full" variant="ghost" onClick={handleHome}>
                      <IoMdArrowRoundBack />
                      <span className='font-roboto font-bold'>Go Back</span>
                  </Button>
          </div>
          <div className='flex flex-col justify-center items-center text-center mt-5'>
            <span className='font-bold text-4xl font-poppins'>Your 
              <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-transparent inline-block bg-clip-text'>
                &nbsp;Personal&nbsp;
              </span>Area</span>
            <span className='font-bold text-2xl font-roboto'>
              Hi,
              <span className='font-bold text-2xl font-roboto bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500  text-transparent inline-block bg-clip-text'>
                &nbsp;{fullname}&nbsp;
              </span>
            </span>
            
          </div>
          
        </div>
    </>
  )
}

export default Main