import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Nav from './Components/Nav'
import Card from './Components/Card'
import Bests from './Components/Bests'
import Product from './Components/Product'
import Growth from './Components/Growth'
import Disclaimers from './Components/Disclaimers'
import Footer from './Components/Footer'
import Pricecard from './Components/Pricecard'
import Contents from './Components/Contents'
import LottieAnimation from './Components/LottieAnimation'

function App() {
 

  return (
    <>
      <Header/>
      <Nav/>
      <Hero/>
      <Card/>
      <Bests/>
      <Product/>
      <Pricecard/>
      <LottieAnimation/>
      <Contents/>
      <Growth/>
      <Disclaimers/>
      <Footer/>
      
    </>
  )
}

export default App
