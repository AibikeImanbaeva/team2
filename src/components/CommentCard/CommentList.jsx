import React from 'react';
import CommentCard from './CommentCard';

const CommentList = ({ onePost }) => {

  return (
    <div>
      Комментарии
      {
        onePost.commentaries?.map(comment => <CommentCard comment={comment} key={comment.id} />)
      }
    </div>
  );
};

export default CommentList;