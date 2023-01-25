import React from 'react';
import CommentCard from './CommentCard';
import "./Comments.css"

const CommentList = ({ onePost }) => {

  return (
    <div>
<div className='comments-title'>Комментарии</div>
      {
        onePost.commentaries?.map(comment => <CommentCard comment={comment} key={comment.id} />)
      }
    </div>
  );
};

export default CommentList;