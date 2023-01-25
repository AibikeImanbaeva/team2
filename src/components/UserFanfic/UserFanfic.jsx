import { Box, CircularProgress } from '@mui/material';
import React, { useEffect, useContext, useState } from 'react';
import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { fanficContext } from '../../contexts/FanficContextProvider';
import { postContext } from '../../contexts/PostsContextProvider';
import CommentList from '../CommentCard/CommentList';
import CreateComment from '../CommentCard/CreateComment';
import FanficChapterCreate from '../FanficChapters/FanficChapterCreate';
import FanficChaptersList from '../FanficChapters/FanficChaptersList';
import AddIcon from '@mui/icons-material/Add';
import './FanficRead.css'

const UserFanfic = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const { onePost, getPostDetails } = useContext(postContext);
  const { fanficDetails, setFanficDetails } = useState({})
  const { id } = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    getPostDetails(id);
  }, [])

  // function handleCom() {
  //   let newCom = new FormData()
  //   newCom.append("title", comment),
  //     addComment(newCom, id)
  // }

  return (
    <>
      {/* 
      <div>

        <img src="  " alt="" />
        <p>{fanficDetails.genre}</p>
        <p>{fanficDetails.title}</p>

      </div> */}




      {
        onePost ? (
          <>
            <div className='fanficPage-fanficCard'>
              <img src={onePost.image} alt="" />
              <div className='fanficPage-fanficCard-desc'>
              <p>{onePost.genre}</p>
              <p>{onePost.title}</p>
              </div>
             
            </div>
            <hr />
            {/* Chapters */}
           <div className='chapterTitle'>Начать писать главы<button onClick={() => navigate(`/fanficpage/${onePost.id}/create-fanfic`)} className="addChapter-btn"><AddIcon/></button>
            </div> 
            {/* <FanficChaptersList /> */}
            <hr />

            <div className='comments'>
            
    
             
              {/* <CreateComment key={onePost.id} /> */}

              <div>
                <CommentList onePost={onePost} />
              </div>
              <CreateComment key={onePost.id} />
            </div>
          </>

        ) : (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
            {/* Прикольная фигня */}
          </Box>
        )
      }




    </>
  )
}

export default UserFanfic