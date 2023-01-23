import React from 'react'
import "../Profile/Profile.css"

const ProfileCard = () => {
  return (
   <>
   
   <div className="profile-container">
   <div className='NewsTitle'>
        <h2 className="newsTitle">Профиль</h2>
        <span className='newsLine'></span>
        </div>
   <div className="profile-card">
   <div className="photo-upload">

    <input type="file" accept='image/*' className='photo-upload-inp'/>
   </div>
    <div className="profile-edit">
        <img src="./Profile/ProfileImg/vector.svg" alt="" />
    </div>



   </div>
   </div>
   
  
   
   
   </>
  )
}

export default ProfileCard