"use client"
import React from 'react'
import CheckOut from './chekout'
import convertToSubcurrency from '@/lib/convertToSubcurrency'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

if(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined){
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined")
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)
 

const Payments = ({type, amount}: {type: number, amount: number}) => {
  return (
    <>
      <Elements 
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd"
        }}>
          <CheckOut amount={amount} type={type}></CheckOut>
      </Elements>
    </>
  )
}

export default Payments