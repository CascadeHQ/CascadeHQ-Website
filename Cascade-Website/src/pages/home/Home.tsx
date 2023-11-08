import React, { Fragment } from 'react'
import HeroSection from './HeroSection'
import ServiceSection from './ServiceSection'
import CatelogueSection from './CatelogueSection'
import TestimoniesSection from './TestimoniesSection'
import FaQSection from './FaQSection'
import Seo from '../../components/seo/Seo'
import Banner from './Banner'

// interface Props = {}

const Home = () => {
  return (
    <Fragment>
    <Seo
        title="Cascade | Home Page"
        description="description for about page"
        type="Website"
        name="Cascade"
      />
    <HeroSection/>
    <ServiceSection/>
    <CatelogueSection/>
    <TestimoniesSection/>
    <Banner/>
    <FaQSection/>
    </Fragment>
  )
}

export default Home