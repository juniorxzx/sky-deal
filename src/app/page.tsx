import React from 'react';
import HeroSection from '@/components/Pages/Home/Hero';
import HowWork from '@/components/Pages/Home/HowWork';
import Advantages from '@/components/Pages/Home/Advantages';
import CallToAction from '@/components/Pages/Home/CallToAction';
import WhoWe from '@/components/Pages/Home/WhoWe';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowWork />
      <Advantages />
      <WhoWe />
      <CallToAction />
    </>
  );
}
