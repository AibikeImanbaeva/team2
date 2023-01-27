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
import FanficText from '../FanficRead/FanficText';


const UserFanfic = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const { onePost, getPostDetails, post } = useContext(postContext);
  const { fanficDetails, setFanficDetails } = useState({})
  const { id } = useParams()

  const navigate = useNavigate();

  useEffect(() => {
    getPostDetails(id);
  }, [])
  // console.log(onePost)

  // function handleCom() {
  //   let newCom = new FormData()
  //   newCom.append("title", comment),
  //     addComment(newCom, id)
  // }

  // function isOwner (){
  //   const login = localStorage.getItem("username") 
  //   if (login == id) {
  //     return true
  //   }
  // }

  console.log(onePost)


  return (
    <>

        <div className='chapterTitle'>Начать писать главы<button onClick={() => navigate(`/fanficpage/${onePost.id}/create-fanfic`)} className="addChapter-btn"><AddIcon /></button>
        </div>
      {
        onePost ? (
          <>
            {/* <div className='fanficPage-fanficCard'>

              <img src={onePost.image} alt="" />
              <div className='fanficPage-fanficCard-desc'>
                <p className='data-created-fanficPost'>{onePost.date_created}
                </p>
                <p>{onePost.genre}</p>
                <p>{onePost.title}</p>
              </div>

            </div> */}
            <FanficText />

            {/* Chapters */}

            {/* <FanficChaptersList /> */}


            <div>
              <CommentList onePost={onePost} />
            </div>
            <CreateComment key={onePost.id} />
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