import React, { useContext } from 'react';
import { postContext } from '../../contexts/PostsContextProvider';
import FanficChapterCard from './FanficChapterCard';
import { useNavigate } from 'react-router-dom';
import FanficChapter from './FanficChapter';

const FanficChaptersList = () => {
  const { onePost } = useContext(postContext);
const navigate = useNavigate()
// console.log(onePost)

  return (
    <div>
      {
        onePost?.page.map(page => (
          
          <FanficChapterCard page={page} key={page.id}  />
         
        
        ))
      }
    </div>
  );
};

export default FanficChaptersList;