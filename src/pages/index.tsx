import React from 'react';
import Head from 'next/head'
import { useSelector } from 'react-redux';
import Suggestion from '@/components/pages/suggestion'
import { RootState } from '@/types/types';
export default function Home() {
  const display = useSelector((state: RootState) => state.display);

  return (
    <>
      <Head>
        <title>Invoice App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Suggestion />
      
    </>
  )
}
