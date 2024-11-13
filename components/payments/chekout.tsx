"use client"
import React, {useEffect, useState} from 'react'
import {useStripe, useElements,  PaymentElement} from '@stripe/react-stripe-js';
import convertToSubcurrency from '@/lib/convertToSubcurrency';
import { Button, Spinner } from '@nextui-org/react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useRouter } from 'next/navigation';

const CheckOut = ({amount, type}: {amount: number, type:number}) => {
  const router = useRouter();
  const handleBack = ()=>{
    router.push("/protected/private")
  }

  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrormessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({amount: convertToSubcurrency(amount)})
    })
    .then((res) => res.json())
    .then((data) => setClientSecret(data.clientSecret))
  }, [amount])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    setLoading(true)

    if(!stripe || !elements){
      return
    }

    const {error: submitError} = await elements.submit()

    if(submitError){
      setErrormessage(submitError.message)
      setLoading(false)
      return
    }

    const {error} = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://localhost:3000/payments/payments-success?type=${type}&amount=${amount}`
      }
    })

    if(error){
      setErrormessage(error.message)
    }else{
      setErrormessage("");
    }

    setLoading(false)

  }

  if(!clientSecret || !stripe || !elements){
    return(
      <>
        <div className={`flex flex-col items-center justify-center text-center w-full h-screen overflow-scroll sm:overflow-hidden ${type === 0 ? "bg-gradient-to-tl from-yellow-400 via-amber-400 to-orange-400" : type === 1 ? "bg-gradient-to-tl from-cyan-400 via-sky-400 to-blue-400" : type === 2 ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400" : ""}`}>
          <form className='bg-white p-5 border rounded-md text-black'>
            <div className='flex flex-col justify-center items-center text-center p-5'>
              <Spinner label="" color="primary" labelColor="foreground"/>
              <Button radius="full" variant="bordered" onClick={handleBack} className='mt-5'>
                <IoMdArrowRoundBack className='font-bold text-xl text-black'/>
                <span className='font-roboto font-bold text-black'>Back</span>
              </Button>
            </div>
            
          </form>
        </div>
      </>
    )
  }

  return(
    <>
      <div className={`flex flex-col items-center justify-center text-center w-full h-screen overflow-scroll sm:overflow-hidden ${type === 0 ? "bg-gradient-to-tl from-yellow-400 via-amber-400 to-orange-400" : type === 1 ? "bg-gradient-to-tl from-cyan-400 via-sky-400 to-blue-400" : type === 2 ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400" : ""}`}>
        <form onSubmit={handleSubmit} className='bg-white p-5 border rounded-md text-black'>
          <span className='font-bold font-poppins text-4xl m-2 text-black'>Checkout Page</span>
          {clientSecret && <PaymentElement className='mt-10'/>}
          {errorMessage && <div>{errorMessage}</div>}
          <div className='flex flex-col'>
            <button disabled={!stripe || !elements} className="text-white w-full p-5 shadow-xl bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse">
              {!loading ? `Pay $${amount}` : "Processing..."}
            </button>
              <span className='m-2 text-black'>or</span>
            <Button radius="full" variant="bordered" onClick={handleBack}>
              <IoMdArrowRoundBack className='font-bold text-xl text-black'/>
              <span className='font-roboto font-bold text-black'>Back</span>
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CheckOut