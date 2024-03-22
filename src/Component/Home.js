import { Container } from '@material-ui/core'
import React from 'react'
import Header from '../Layout/Header'
import Hero from './Hero'
import Feature from './Feature'
import CustomersSection from './CustomersSection'
import StrengthSection from './StrengthSection'
import FeatureSection from './FeaturesSection'
import PricingPlans from './PricingPlans'
import Footer from '../Layout/Footer'

function Home() {
  return (
    <div>
        {/* <Header/> */}
        <Hero/> 
        <Feature/>
        <CustomersSection/>
        <StrengthSection/>
        <FeatureSection/>
        <PricingPlans/>
         <Footer/>
    </div>
  )
}

export default Home
