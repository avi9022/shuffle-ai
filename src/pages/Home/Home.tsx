import { FunctionComponent } from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Hero } from '../../components/Hero/Hero'
import { Navbar } from '../../components/NavBar/Navbar'
import { Services } from '../../components/Services/Services'

export const Home: FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </>
  )
}
