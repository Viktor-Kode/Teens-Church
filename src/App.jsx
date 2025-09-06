import React from 'react'
import Header from './Component/Header'
import About from './Component/About'
import Resources from './Component/Resources'
import Events from './Component/Events'
import Gallery from './Component/Gallery'
import Contact from './Component/Contact'
import New from './Component/New'
import Faq from './Component/Faq'
import Directors from './Component/Directors'
import Footer from './Component/Footer'

const App = () => {
  return (
    <>
    <Header />
    <About />
    <Resources />
    <section className='bg-black text-center py-10'>
      <h1 className='text-white text-4xl'>Events</h1>
      <p className='text-gray-400 text-xl'>Stay updated on our latest events, meetings, and outreach programs designed for teens at Living Faith Church.</p>
      <Events />
    
    </section>
      <Gallery />
      <Contact />
      <Directors />
      <New />
      <Faq />
      <Footer />
      
    </>
  )
}

export default App