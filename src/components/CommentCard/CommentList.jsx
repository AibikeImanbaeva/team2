import React from 'react';
import CommentCard from './CommentCard';
import "./Comments.css"

const CommentList = ({ onePost }) => {

  return (
    <div className='comments'>
      <div className='comments-title'>Комментарии</div>
      <div className="comment-list">
        <div className="comment-list__blur blur-top"></div>
        {
          onePost.commentaries?.map(comment =>
            <CommentCard comment={comment} key={comment.id} />)
        }
        <div className="comment-list__blur blur-bottom"></div>
      </div>
    </div>
  );
};

export default CommentList;