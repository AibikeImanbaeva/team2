import React from 'react';
import Navbar from '../components/HomePage__Components/Navbar';
import Saidbar from '../components/HomePage__Components/Saidbar';
import ProfileCard from '../components/Profile/ProfileCard';



const ProfilePage = () => {
    return (
        <>

        <Navbar />
        <ProfileCard />
        <Saidbar />

        
        </>
    );
};

export default ProfilePage;