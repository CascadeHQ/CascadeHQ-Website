import React, { Fragment } from 'react'
import HeroSection from './HeroSection'
import ServiceSection from './ServiceSection'
import CatelogueSection from './CatelogueSection'
import TestimoniesSection from './TestimoniesSection'
import FaQSection from './FaQSection'
import Seo from '../../components/seo/Seo'

// interface Props = {}

const Home = () => {
  return (
    <Fragment>
    {/* <Seo
        title="React SEO | About Page"
        description="description for about page"
        type="webapp"
        name="Sachin Chaurasiya"
      /> */}
    <HeroSection/>
    <ServiceSection/>
    <CatelogueSection/>
    <TestimoniesSection/>
    <FaQSection/>
    </Fragment>
  )
}

export default Home