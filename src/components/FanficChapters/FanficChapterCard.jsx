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
  console.log(page)
  const { id } = useParams()
  return (


    <>


      {

        // page?.map(chapter=> <FanficChapter chapter={chapter} key={chapter.id}   />)


      }
      <div>




        {/* 
  <a onClick={() => navigate(`/readchapter/${id}/${page.owner_id}/${page.fanfic_id}`)} style={{ cursor: "pointer" }}> */}
        <p>номер главы:{page.chapter}</p>
        описание: {page.text}
        {/* </a> */}

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