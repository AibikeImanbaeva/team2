import React from 'react'
import News from '../components/HomePage__Components/News'
import AllNews from '../components/HomePage__Components/AllNews'
import Fanfics from '../components/HomePage__Components/Fanfics'
import Animes from '../components/HomePage__Components/Animes'
import Saidbar from '../components/HomePage__Components/Saidbar'
import Navbar from '../components/HomePage__Components/Navbar'


import "../Styles/HomePage.css"



const HomePage = () => {
  const bodyColor = {
  backgroundColor: '#202020'

  }
  return (
    <>
    <img src="/homePageBackImg.png" alt="" className='HomePage-BackgroundImg' />
      <Navbar/>
    <div className='homePage__container'>
      <News/>
      <div className='homePage__AllNews-FanfAnime'>
      <AllNews/>
      </div>
    </div>
      <div className='FanficsAndAnime F-A_HomePage'>
          {/* <Fanfics/> */}
          <Animes/>
        </div>
    <Saidbar/>
    </>
  )
}

export default HomePage