import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { bioContext } from '../../contexts/BioContextProvider';
import "../Profile/Profile.css"; 
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import logo from "../../assets/Лого.svg"
const BioEdit = () => {
    const {editBio, getBio, bio} = useContext(bioContext) 

console.log(bio)
    const [about_me, setBio] = useState()
    // const { id } = useParams();
// const id = 10ы
    function handleSave() {
        let newBio = new FormData()
        newBio.append("about_me", about_me)
        editBio( newBio, 10)
        console.log("baka")
 }
 const [open, setOpen] = useState(false); 
 const handleOpen = () => setOpen(true); 
 const handleClose = () => setOpen(false); 


    return (
        <div>
                <div className="profile-edit"> 
            <EditIcon

            onClick={handleOpen}/> 
       <Modal 
        open={open} 
        onClose={handleClose} 
        aria-labelledby="modal-modal-title" 
        aria-describedby="modal-modal-description" 
        className='modal1'
      > 
        <Box className="modal"> 
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {/* <img src={logo} className='bioLogo'></img> */}
            <p className='Title1'>Изменить БИО</p>
            <div>
              <p className='info1'>Bio</p>
<input type="text" name="" id="" placeholder='about me' value={about_me} onChange={(e) => setBio(e.target.value)} /> 
</div>
<div>
<input type='submit' onClick={handleSave} value="Отправить" className='button'></input> 
</div>
          </Typography> 

        </Box> 
      </Modal> 
          </div> 
        </div>
    );
};

export default BioEdit;