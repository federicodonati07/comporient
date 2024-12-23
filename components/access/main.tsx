"use client";
import React from 'react';
import { Card, CardBody, Button, Link } from "@nextui-org/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import supabase from '@/src/supabase/clinet';

const Main = () => {

    const handleAccessWithOauth = async (provider: "google" | "github") => {
        const {} = await supabase.auth.signInWithOAuth({
            provider,
            options:{
                redirectTo:location.origin+"/protected/private"
            }
        });
    };

    return (
        <>
            <div className='flex flex-col items-center justify-center text-center w-full h-screen overflow-scroll sm:overflow-hidden'>
                <span className='font-poppins font-bold text-4xl m-20'>Join Our 
                    <span className='bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent inline-block bg-clip-text'>
                        &nbsp;Community&nbsp;
                    </span>
                    or Come Visit us<span className='bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 text-transparent inline-block bg-clip-text'>
                        &nbsp;Again
                    </span>.
                </span>
                <div className='flex flex-col-reverse sm:flex-col'>
                    <div>
                        <Card className='p-0 mx-5 mb-24 sm:m-0 sm:p-5'>
                            <CardBody>
                                <span className='font-roboto font-bold text-center'>login or register using the suggested methods</span>
                                <Button onClick={() => handleAccessWithOauth("github")} className='m-2 mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' variant="shadow">
                                    <FaGithub className='font-bold text-2xl' />
                                    Access with Github
                                </Button>
                                <span className='flex flex-col items-center justify-center text-center'>or</span>
                                <Button onClick={() => handleAccessWithOauth("google")} variant="shadow" className='m-2 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 '>
                                    <FaGoogle className='font-bold text-2xl' />
                                    Access with Google
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='flex flex-row justify-center items-center text-center m-5'>
                        <Link color="foreground" href="/">
                            <Button radius="full" variant="ghost">
                                <IoMdArrowRoundBack />
                                <span className='font-roboto font-bold'>Go Back</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
