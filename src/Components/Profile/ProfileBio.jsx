import React, { useContext, useState } from 'react'; 
import "../Profile/Profile.css"; 
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { bioContext } from '../../contexts/BiocontextProvider';
import BioCreate from "./BioCreate"
import BioEdit from './BioEdit';
 
const ProfileBio = () => { 
  const {getBio} = useContext(bioContext) 
    
 

    const [open, setOpen] = useState(false); 
    const handleOpen = () => setOpen(true); 
    const handleClose = () => setOpen(false); 
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      
 
    return ( 
             <div>
            <div className="profile-container"> 
        <div className="NewsTitle"> 
          <h2 className="newsTitle">Профиль</h2> 
          <span className="newsLine"></span> 
        </div> 
        <div className="profile-card"> 
          <div className="photo"> 
     <BioCreate/>
          </div> 
 
          <div className="profile-username"> 
            {localStorage.getItem("username")} 
          </div>
          <BioEdit/>
 
        </div> 
        <div className='bio_container'> 
<span>About us {getBio.bio}<p></p></span> 
 
 
          </div> 
        </div> 
        </div>
    ); 
}; 
 
export default ProfileBio;