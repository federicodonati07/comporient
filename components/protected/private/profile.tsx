import React, { useState } from 'react';
import { Avatar, Card, CardBody, CardFooter, Divider, Popover, PopoverTrigger, PopoverContent, Button, Input } from '@nextui-org/react';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CiLogout } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import supabase from '@/src/supabase/clinet';
import supabaseAdmin from '@/src/supabase/adminClient';

interface ProfileProps {
    fullname: string;
    email: string;
    avatar_url: string;
    provider: string;
    uid: string;
}

const Profile: React.FC<ProfileProps> = ({ fullname, email, avatar_url, provider, uid }) => {
    const [confirmInput, setConfirmInput] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.reload();
    };

    const handleDeleteAccount = async () => {
        const confirmationText = `${email}/${fullname}`;
        if (confirmInput === confirmationText) {
            console.log("success");
            await supabase.auth.signOut();
            const { data } = await supabaseAdmin.auth.admin.deleteUser(uid);
            
            if (data) {
                window.location.reload();
            } else {
                setIsInvalid(true);
            }
            
            setIsInvalid(false); // Reset del messaggio di errore
        } else {
            console.log("error");
            setIsInvalid(true); // Imposta il messaggio di errore
        }
    };

    return (
        <Card>
            <CardBody>              
                <div className='flex flex-col justify-center items-center text-center'>
                    <div className='flex flex-row justify-center items-center text-center mt-5 space-x-4'>
                        <Avatar src={avatar_url} size="lg" name={fullname} className='outline outline-gray-400' />
                        <span className={`font-poppins font-bold text-xl ${provider === "google" ? "text-blue-600" : provider === "github" ? "text-purple-600" : ""}`}>. . .</span>
                        <Avatar
                            size="md"
                            icon={provider === "google" ? (<FcGoogle className='text-lg'/>) : provider === "github" ? (<FaGithub className='text-lg'/>) : undefined}
                            className={`${provider === "google" ? "outline outline-blue-600 bg-blue-600/25" : provider === "github" ? "outline outline-purple-600 bg-purple-600/25" : ""}`}
                        />
                    </div>
                    <div className='flex flex-row mx-2 my-5'>
                        <Card className='mx-2' isHoverable>
                            <CardBody>
                                <span className='font-poppins font-bold text-lg text-center'>{email}</span>
                            </CardBody>
                        </Card>
                        <Card className='mx-2' isHoverable>
                            <CardBody>
                                <span className='font-poppins font-bold text-lg text-center'>{fullname}</span>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='flex flex-row items-center justify-center mb-2'>
                        <Button radius="full" variant="ghost" onClick={handleLogout} className='mx-2'>
                            <CiLogout className='font-bold text-xl'/>
                            <span className='font-roboto font-bold'>Logout</span>
                        </Button>
                        <Popover offset={10} placement='top' backdrop='blur'>
                            <PopoverTrigger>
                                <Button 
                                    radius="full" 
                                    color="danger" 
                                    variant="ghost" 
                                    className='mx-2 hover:text-white hover:shadow-lg hover:bg-red-500 group'
                                >
                                    <MdDelete className='font-bold text-xl text-[#F31260] group-hover:text-white'/>
                                    <span className='font-roboto font-bold text-[#F31260] group-hover:text-white'>Delete Account</span>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <div className='flex flex-col justify-center items-center text-center p-4'>
                                    <div className='flex flex-col justify-start items-start text-left'>
                                        <span className='text-[#F31260] font-poppins font-bold text-xl text-center'>
                                            Do you really want to delete your account?
                                        </span>
                                        <span className='text-white font-roboto text-sm'>
                                            Warning: This action is irreversible!
                                        </span>
                                        <span className='mt-2 font-poppins font-bold'>Type <span className='text-[#F31260]'>{email}/{fullname}</span> to confirm</span>
                                    </div>
                                    
                                    <div className='flex flex-row items-center space-x-2 mt-3'>
                                        <Input 
                                            value={confirmInput}
                                            onChange={(e) => setConfirmInput(e.target.value)}
                                            placeholder="" 
                                            className='font-poppins' 
                                            onPaste={(e) => e.preventDefault()} 
                                            size="sm"
                                            type="text"
                                            isInvalid={isInvalid}
                                            errorMessage={isInvalid ? "Please enter the correct confirmation text." : ""}
                                        />
                                        <Button 
                                            color="danger" 
                                            variant="flat"  
                                            onClick={handleDeleteAccount} 
                                            className='font-poppins font-semibold'
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <Divider />
                <CardFooter className='flex flex-col justify-center items-center'>
                    <span className='font-roboto text-gray-400/40 text-center'>{uid}</span>
                </CardFooter>
            </CardBody>
        </Card>
    );
};

export default Profile;
