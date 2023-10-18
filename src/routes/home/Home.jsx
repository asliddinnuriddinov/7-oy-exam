import React from 'react'
import Featured from '../../components/featured/Featured';
import "./Home.scss"
import AllCategories from '../../components/all-categories/AllCategories';

const Home = () => {
  return (
    <div className='home'>
        <Featured/>
        <AllCategories/>
    </div>
  )
}

export default Home