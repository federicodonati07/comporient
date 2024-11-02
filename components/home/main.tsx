import React from 'react';
import { Button, Link } from '@nextui-org/react';
import Cards from './main/cards';

const Main = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row md:h-screen'>
        {/* Div sinistro - centrato su schermi piccoli */}
        <div className='flex flex-col justify-center items-center text-center w-full md:w-1/2 h-screen md:h-auto'>
          <h1 className='font-black text-4xl text-balance font-poppins'>
            Empowering 
            <span className='bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text'>
              &nbsp;All Identities&nbsp;
            </span>
            with 
            <span className='bg-gradient-to-b from-yellow-400 via-amber-400 to-orange-400 inline-block text-transparent bg-clip-text'>
              &nbsp;Personalized&nbsp;
            </span> ID Cards.
          </h1>
          <span className='font-roboto text-gray-400'>Your identity, your card, your way.</span>

          <div className='mt-5 space-x-2'>
            <Link>
                <Button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold shadow-lg' variant='flat'>Get Started</Button>
            </Link>
            <span className='font-roboto'>or</span>

            <Link>
                <Button className='bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-white font-bold shadow-lg' variant='flat'>Shop Now</Button>
            </Link>
          </div>
        </div>

        {/* Div destro - visibile solo su schermi grandi */}
        <div className='hidden md:flex md:flex-col justify-center items-center text-center w-full md:w-1/2 h-screen'>
          <div>
            <Cards></Cards>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
