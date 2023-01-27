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
  const { getChapter } = useContext(fanficContext);
// console.log(getChapter)
const chapter = page.chapter
const {id} = useParams()
  return (


    <>
    <div>

    <p  onClick={()=> navigate(`/readchapter/${page.id}`)}>{page.chapter}</p>
  
    <FanficChapter key={page.id} chapter={chapter} />
   
    </div>
    
    
    
    
    </>
    // <Card sx={{ maxWidth: 345 }}>
    //   {/* <CardActionArea onClick={() => {
    //     navigate(`/fanfic/chapter/${page.chapter}`);
    //     getChapter(page);
    //   }}> */}
    //     {/* <CardContent> */}
    //       <Typography gutterBottom variant="h5" component="div">
    //         {page.chapter}
    //       </Typography>
    //     {/* </CardContent> */}
    //   </CardActionArea>
    //   {/* <DeleteIcon style={{ cursor: "pointer" }} /> */}
    // </Card>
  );
};

export default FanficChapterCard;