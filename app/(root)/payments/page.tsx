"use client"
import React from 'react'
import Payments from '@/components/payments/payments'
import { useSearchParams } from 'next/navigation'

const Page = () => {
  const searchParams = useSearchParams();
  
  const typeString = searchParams.get('type');
  const typeParsed = typeString ? parseInt(typeString, 10) : 0;

  const amount = typeParsed === 0 ? 1.99 : typeParsed === 1 ? 9.99 : typeParsed === 2 ? 79.99 : 0;

  return (
    <Payments type={typeParsed} amount={amount} />
  );
};

export default Page;
