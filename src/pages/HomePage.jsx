import React from 'react'
import News from '../Components/HomePage__Components/News'
import AllNews from '../Components/HomePage__Components/AllNews'
import Fanfics from '../Components/HomePage__Components/Fanfics'
import Animes from '../Components/HomePage__Components/Animes'
import Saidbar from '../Components/HomePage__Components/Saidbar'
import Navbar from '../Components/HomePage__Components/Navbar'

import "../Styles/HomePage.css"


const HomePage = () => {
  return (
    <>
    <img src="/homePageBackImg.png" alt="" className='HomePage-BackgroundImg' />
      <Navbar/>
    <div className='homePage__container'>
      <News/>
      <div className='homePage__AllNews-FanfAnime'>
      <AllNews/>
        <div>
          <Fanfics/>
          <Animes/>
        </div>
      </div>
    </div>
    <Saidbar/>
    </>
  )
}

export default HomePage