import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import Animals from './components/Animals'
import Toys from './components/Toys'
import Story from './components/Story'
import About from './components/About'
import NewsLetter from './components/NewsLetter'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Category />
        <Animals />
        <Toys />
        <Story />
        <About />
        <NewsLetter />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App