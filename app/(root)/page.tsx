import React from 'react'
import NavBar from '@/components/home/navbar'
import Main from '@/components/home/main'

const page = () => {
  return (
    <>
      <div className='w-screen h-screen overflow-y-auto md:overflow-hidden'>
        <NavBar></NavBar>
        <Main></Main>
      </div>
    </>
  )
}

export default page