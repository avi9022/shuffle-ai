import { FunctionComponent } from 'react'
import { Hero } from '../../components/Hero/Hero'
import { Services } from '../../components/Services/Services'

import './Home.css'

export const Home: FunctionComponent = () => {
  return (
    <>
      <Hero />
      <Services />
    </>
  )
}
