import React from 'react'
import Carouseel from '../components/Carouseel'
import HeadingTitle from '../components/HeadingTitle'
import Serveses from '../components/Serveses'
import Slidee from '../components/Slidee'

export default function Home() {
  return (
    <>
       <Carouseel />
      <Serveses />
      <HeadingTitle title='Most Gifted' />
      <Slidee />
      <HeadingTitle title='Best Seller' />
      <Slidee />
      <HeadingTitle title='Most Wished for' />
      <Slidee />
    </>
  )
}
