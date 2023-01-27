import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fanficContext } from '../../contexts/FanficContextProvider';
import FanficChapterCard from './FanficChapterCard';

const FanficChapter = ({chapter}) => {
  const {getChapter} = useContext(fanficContext)
 const {id} = useParams()
// useEffect(()=>{
// getChapter()
// },[])


console.log(chapter)

  return (
    <>


    
      
      <div>

      <p>




      </p>
      </div>
      {/* <h2 className='chapter-main'>
        {page.chapter}
      </h2>
        <div className='chapter-text'>

        {page.text}
        </div> */}
      
    </>
  );
};

export default FanficChapter;