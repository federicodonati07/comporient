import React from 'react'
import NavBar from '@/components/home/navbar'
import Main from '@/components/access/main'

const page = () => {
  return (
    <>
        <div className='w-screen h-screen overflow-hidden'>
            <NavBar></NavBar>
            <Main></Main>
        </div>
    </>
  )
}

export default page