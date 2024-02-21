import React from 'react'
import './Home.scss'
import Banner from '../../components/screens/home/Banner/Banner'
import AllCollections from '../../components/screens/home/AllCollections/AllCollections'
import AllBrands from '../../components/screens/home/AllBrands/AllBrands'
import SellingItems from '../../components/screens/home/SellingItems/SellingItems'

function Home(){
  return (
    <div className='home-container'>
      <Banner />
      <AllCollections />
      <SellingItems />
      <AllBrands />
    </div>
  )
}

export default Home