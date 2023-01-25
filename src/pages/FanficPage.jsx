import React from 'react';
import UserFanfic from '../components/UserFanfic/UserFanfic';
import Navbar from '../components/HomePage__Components/Navbar';
import ProfileCard from '../components/Profile/ProfileCard';
import Saidbar from '../components/HomePage__Components/Saidbar';
import Animes from '../components/HomePage__Components/Animes';
const FanficPage = () => {
  return (
    <>
    <Navbar />
        <ProfileCard />
        {/* <img src="/homePageBackImg.png" alt="" className='HomePage-BackgroundImg' /> */}
        <Saidbar />
        <div className="fanfic-page-col"> 
      <UserFanfic />
      <div className='FanficsAndAnime F-A_HomePage fanficPage-top'>

    <Animes/>
        </div>
      {/* <Animes/> */}
      </div>
    </>
  )
}

export default FanficPage


