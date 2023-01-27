import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fanficContext } from '../../contexts/FanficContextProvider';
import FanficChapterCard from './FanficChapterCard';

const FanficChapter = ({chapter}) => {
  const {getChapter} = useContext(fanficContext)
 const {id} = useParams()
// useEffect(()=>{
// getChapter(id)
// },[])



  return (
    <>


    
      
      <div>

      <p>




      </p>
      </div>
      
      
    </>
  );
};

export default FanficChapter;