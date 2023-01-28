import React, { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { fanficContext } from '../../contexts/FanficContextProvider';
import DeleteIcon from '@mui/icons-material/Delete';
import FanficChapter from './FanficChapter';


const FanficChapterCard = ({ page }) => {
  const navigate = useNavigate();

  // console.log(getChapter)
  console.log(page)
  const { id } = useParams()
  return (


    <>

      <div>




        
  <a onClick={() => navigate(`/readchapter/${id}/${page.id}/${page.chapter}`)} style={{ cursor: "pointer" }}> 
 
        <p>номер главы:{page.chapter}</p>
        {/* описание: {page.text} */}
         </a>

      </div>




    </>
 
  );
};

export default FanficChapterCard;