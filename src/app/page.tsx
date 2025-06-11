'use client'

import React from 'react';
import HeroSection from '@/components/Pages/Home/Hero';
import HowWork from '@/components/Pages/Home/HowWork';
import Advantages from '@/components/Pages/Home/Advantages';
import CallToAction from '@/components/Pages/Home/CallToAction';
import WhoWe from '@/components/Pages/Home/WhoWe';
import { useGetToken } from '@/hooks/useGetToken';
import Loading from '@/components/Loading';


export default function Home() {
  const token = useGetToken()
  const [isLoading, setIsLoading] = React.useState(false);
  if (!token) {
    return <Loading />
  }
  if(isLoading){
     <Loading message='Estamos buscando suas dívidas'/>
  }
  return (
      <>
        <HeroSection setIsLoading={setIsLoading } />
        <HowWork />
        <Advantages />
        <WhoWe />
        <CallToAction />
      </>
    );
}
