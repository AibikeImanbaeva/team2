import React from 'react';
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
    <PostList />
    

        
        </>
    );
};

export default ProfilePage;