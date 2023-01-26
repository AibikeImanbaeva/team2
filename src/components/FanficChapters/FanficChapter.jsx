import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fanficContext } from '../../contexts/FanficContextProvider';
import FanficChapterCard from './FanficChapterCard';

const FanficChapter = () => {

  const { chapter } = useContext(fanficContext);
console.log(chapter)
  return (
    <>
      
      <div className='chapter'>
      <h2 className='chapter-main'>
        {chapter.chapter}
      </h2>
        <div className='chapter-text'>

        {chapter.text}
        </div>
      </div>
    </>
  );
};

export default FanficChapter;