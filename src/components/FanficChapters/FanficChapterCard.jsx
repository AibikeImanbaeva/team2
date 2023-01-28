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




        
  <a onClick={() => navigate(`/readchapter/${page.id}/`)} style={{ cursor: "pointer" }}> 
{/* <FanficChapter page={page} key={page.id} /> */}
        <p>номер главы:{page.chapter}</p>
        {/* описание: {page.text} */}
         </a>

      </div>




    </>
 
  );
};

export default FanficChapterCard;