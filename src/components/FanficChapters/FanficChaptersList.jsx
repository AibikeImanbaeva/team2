import React, { useContext } from 'react';
import { postContext } from '../../contexts/PostsContextProvider';
import FanficChapterCard from './FanficChapterCard';

const FanficChaptersList = () => {
  const { onePost } = useContext(postContext);

  return (
    <div>
      {
        onePost.page?.map(page => (
          <FanficChapterCard page={page} key={page.id} />
        ))
      }
    </div>
  );
};

export default FanficChaptersList;