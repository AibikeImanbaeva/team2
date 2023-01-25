import React from 'react';
import Navbar from '../Components/HomePage__Components/Navbar';
import Saidbar from '../Components/HomePage__Components/Saidbar';
import PostList from '../Components/PostList/PostList';
import ProfileCard from '../Components/Profile/ProfileCard';
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