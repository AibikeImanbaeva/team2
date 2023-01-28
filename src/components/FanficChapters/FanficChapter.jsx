import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { fanficContext } from '../../contexts/FanficContextProvider';
import FanficChapterCard from './FanficChapterCard';
import { postContext } from '../../contexts/PostsContextProvider';

const FanficChapter = ({page}) => {
  
  const {getChapter, chapter} = useContext(fanficContext)
  const [searchParams, setSearchParams] = useSearchParams();

 const {id} = useParams()


 console.log(chapter)

useEffect(()=>{
getChapter(id)

},[])






// console.log(getChapter)

  return (
    <>


   

  
  

  
      
      
    </>
  )
};

export default FanficChapter;