"use client"
import React from 'react'
import Products from './Components/Products'
import Hero from './Components/Hero'


const page = () => {
  return (
    <>
      <Hero />
      <Products heading={"Best Sellers"} />
      <Products heading={"Sports Sneakers"} />
      <Products heading={"Watches"} />
    </>
  )
}

export default page
