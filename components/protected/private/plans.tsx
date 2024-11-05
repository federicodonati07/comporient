import React from 'react';
import { Card, CardBody, CardHeader, Divider, Button } from '@nextui-org/react';
import { MdWorkspacePremium } from "react-icons/md";

const Plans = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-center h-full w-screen space-y-8 md:space-y-0 md:space-x-5 py-10 px-4 ">
      {/** Daily Plan */}
      <Card className="w-full max-w-sm md:max-w-xs cursor-pointer shadow-lg outline outline-amber-400 hover:outline-offset-4" isPressable isHoverable>
        <CardHeader>
          <span className="font-poppins font-bold text-4xl bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 inline-block text-transparent bg-clip-text">
            Daily
          </span>
        </CardHeader>
        <CardBody>
          <div className="font-poppins text-xl text-gray-300">COMPORIENT SUBSCRIPTION</div>
          <Divider className="my-4" />
          <div className="mt-8">
            <span className="font-poppins font-black text-5xl bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 inline-block text-transparent bg-clip-text">
              1,99€ <span className="text-sm text-gray-300">/daily</span>
            </span>
          </div>
          
          <div className='mt-10'>
            <Button className='bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 w-full'>
                <span className='font-poppins text-xl font-bold'>Subscribe Now</span>
            </Button>
          </div>
        </CardBody>
      </Card>

      {/** Monthly Plan */}
      <Card className="w-full max-w-sm md:max-w-xs cursor-pointer shadow-lg outline outline-sky-400 hover:outline-offset-4" isPressable isHoverable>
        <CardHeader>
          <span className="font-poppins font-bold text-4xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 inline-block text-transparent bg-clip-text">
            Monthly
          </span>
        </CardHeader>
        <CardBody>
          <div className="font-poppins text-xl text-gray-300">COMPORIENT SUBSCRIPTION</div>
          <Divider className="my-4" />
          <div className="mt-8">
            <span className="font-poppins font-black text-5xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 inline-block text-transparent bg-clip-text">
              9,99€ <span className="text-sm text-gray-300">/monthly</span>
            </span>
          </div>
          <div className='mt-10'>
            <Button className='bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 w-full'>
                <span className='font-poppins text-xl font-bold'>Subscribe Now</span>
            </Button>
          </div>
          <div className="mt-5 flex justify-center items-center space-x-2">
            <MdWorkspacePremium className="text-yellow-300" />
            <span className='text-yellow-300'>Best Seller</span>
          </div>
        </CardBody>
      </Card>

      {/** Annual Plan */}
      <Card className=" cursor-pointer w-full max-w-sm md:max-w-xs shadow-lg outline outline-purple-400 hover:outline-offset-4" isPressable isHoverable>
        <CardHeader>
          <span className="font-poppins font-bold text-4xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 inline-block text-transparent bg-clip-text">
            Annually
          </span>
        </CardHeader>
        <CardBody>
          <div className="font-poppins text-xl text-gray-300">COMPORIENT SUBSCRIPTION</div>
          <Divider className="my-4" />
          <div className="mt-8">
            <span className="font-poppins font-black text-5xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 inline-block text-transparent bg-clip-text">
              79,99€ <span className="text-sm text-gray-300">/annually</span>
            </span>
          </div>
          <div className='mt-10'>
            <Button className='bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 w-full'>
                <span className='font-poppins text-xl font-bold'>Subscribe Now</span>
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Plans;
