import React from "react";
import UserFanfic from "../Components/UserFanfic/UserFanfic";
import Navbar from "../Components/HomePage__Components/Navbar";
import ProfileCard from "../Components/Profile/ProfileCard";
import Saidbar from "../Components/HomePage__Components/Saidbar";
import Animes from "../Components/HomePage__Components/Animes";
import bg from "../Components/UserFanfic/Rebekka.png"
import "../Components/UserFanfic/FanficRead.css"
import CommentList from "../Components/CommentCard/CommentList";
import CreateComment from "../Components/CommentCard/CreateComment";


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
      <div
        style={stylebg}>

      </div>
      <div className="fanfic-page-col">
        <UserFanfic />

        
        <CommentList />
        <CreateComment />

      </div>


    </>
  );
};

export default FanficPage;
