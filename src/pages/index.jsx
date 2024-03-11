import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Description from '../components/sandhaan_desc'
import Event from '../components/events'
import Footer from '../components/Footer'

const Landing = () => {
  return (
   <><Navbar/>
   <Hero/>
   <Description/>
   <Event/>
   <Footer/>
   </>
  )
}

export default Landing