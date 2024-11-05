import React from 'react';
import { Button, Link } from '@nextui-org/react';
import Cards from './main/cards';
import { FaAnglesDown } from "react-icons/fa6";

const Main = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row overflow-y-auto md:overflow-hidden md:h-screen scroll-smooth'>
        {/* Div sinistro - centrato su schermi piccoli */}
        <div className='flex flex-col justify-center items-center text-center w-full md:w-1/2 h-screen md:h-auto -mt-6 md:mt-0 px-4 md:px-0'>
          <h1 className='font-black text-4xl text-balance font-poppins mb-1 md:mb-6'>
            Empowering 
            <span className='bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text'>
              &nbsp;All Identities&nbsp;
            </span>
            with 
            <span className='bg-gradient-to-b from-yellow-400 via-amber-400 to-orange-400 inline-block text-transparent bg-clip-text'>
              &nbsp;Personalized&nbsp;
            </span> ID Cards.
          </h1>
          <span className='font-roboto text-gray-400 mb-3 md:mb-8'>Your identity, your card, your way.</span>

          <div className='mt-1 md:mt-5 space-x-2'>
            <Link>
              <Button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold shadow-lg' variant='flat'>Get Started</Button>
            </Link>
            <span className='font-roboto'>or</span>

            <Link>
              <Button className='bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-white font-bold shadow-lg' variant='flat'>Shop Now</Button>
            </Link>
          </div>
          <a href="#cards" className='block md:hidden mt-3'>
            <FaAnglesDown className='font-bold font-poppins text-4xl'/>
          </a>
        </div>
        
        {/* Div destro - visibile solo su schermi grandi */}
        <div id="cards" className='flex flex-col justify-center items-center w-full md:w-1/2 md:h-screen -mt-4 space-y-2 md:space-y-8'>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Main;
