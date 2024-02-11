import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Products from './Products'
import Collection from './Collection'
import BestSeller from './BestSeller'
import Newletters from './Newletters'

const Home = () => {
  return (
    <div>
      <Banner />
      <Category/>
      <Products/>
      <Collection/>
      <BestSeller/>
      <Newletters/>
    </div>
  )
}

export default Home