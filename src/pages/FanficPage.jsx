import React from "react";
import UserFanfic from "../components/UserFanfic/UserFanfic";
import Navbar from "../components/HomePage__Components/Navbar";
import ProfileCard from "../components/Profile/ProfileCard";
import Saidbar from "../components/HomePage__Components/Saidbar";
import Animes from "../components/HomePage__Components/Animes";
import  bg from "../components/UserFanfic/Rebekka.png"
import "../components/UserFanfic/FanficRead.css"
const FanficPage = () => {
  const stylebg = {
    zIndex: '-1',
    position: 'absolute',
    left: '76%',
    top: '300px',
  }
  return (
    
    <>
      <Navbar />
      <ProfileCard />
      <Saidbar />
      <div className="bg-rebekka" style={stylebg}>

      <img src={bg} alt=""  />
      </div>
      <div className="fanfic-page-col">
        <UserFanfic />
      </div>
    
    </>
  );
};

export default FanficPage;
