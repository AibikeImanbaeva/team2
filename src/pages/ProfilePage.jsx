import React from 'react';
import CommentCard from '../Components/CommentCard/CommentCard';
import CommentList from '../Components/CommentCard/CommentList';
import CreateComment from '../Components/CommentCard/CreateComment';
import Navbar from '../Components/HomePage__Components/Navbar';
import Saidbar from '../Components/HomePage__Components/Saidbar';
import PostList from '../Components/PostList/PostList';
import ProfileCard from '../Components/Profile/ProfileCard';
import Animes from '../Components/HomePage__Components/Animes';
import UserFanfic from '../Components/UserFanfic/UserFanfic';
// import PostCard from '../Components/PostCard/PostCard';


const ProfilePage = () => {
    return (
        <>

        <Navbar />
        <ProfileCard />
        <Saidbar />
        <div className='FanficsAndAnime F-A_HomePage profilePage-top'>

    <Animes/>
        </div>

    <PostList />
    

      


  

        
        </>
    );
};

export default ProfilePage;