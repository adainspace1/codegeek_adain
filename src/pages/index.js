import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Services from '@/components/hero2'
import Hero3 from '@/components/hero3'
import AdainNavBar from '@/components/navbar'
import React from 'react'

export default function Home() {
  return (
    <>
      <AdainNavBar/>
      <Hero/>
      <Services/>
      <Hero3/>

      <Footer/>
    </>
  
  )
}
