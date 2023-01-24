import React from 'react';
import CommentCard from '../components/CommentCard/CommentCard';
import CommentList from '../components/CommentCard/CommentList';
import CreateComment from '../components/CommentCard/CreateComment';
import Navbar from '../components/HomePage__Components/Navbar';
import Saidbar from '../components/HomePage__Components/Saidbar';
import PostList from '../components/PostList/PostList';
import ProfileCard from '../components/Profile/ProfileCard';
// import PostCard from '../components/PostCard/PostCard';


const ProfilePage = () => {
    return (
        <>

        <Navbar />
        <ProfileCard />
        <Saidbar />
        <div className="profile-fanfics-card"> 
    <PostList />
        </div>
  

        
        </>
    );
};

export default ProfilePage;