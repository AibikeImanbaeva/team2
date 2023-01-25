import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fanficContext } from '../../contexts/FanficContextProvider';

const FanficChapter = () => {

  const { chapter } = useContext(fanficContext);

  return (
    <>
      <h2>
        {chapter.chapter}
      </h2>
      <div>
        {chapter.text}
      </div>
    </>
  );
};

export default FanficChapter;