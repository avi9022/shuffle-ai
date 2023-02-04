import { FunctionComponent } from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Hero } from '../../components/Hero/Hero'
import { Services } from '../../components/Services/Services'

export const Home: FunctionComponent = () => {
  return (
    <>
      <Hero />
      <Services />
      <Footer />
    </>
  )
}
