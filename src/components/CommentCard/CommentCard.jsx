import React, { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { fanficContext } from '../../contexts/FanficContextProvider';
import { useParams } from 'react-router-dom';
import "./Comments.css"

const CommentCard = ({ comment }) => {
  const { deleteComment } = useContext(fanficContext);
  const { id } = useParams()
  const handleDelete = () => {
    let text = new FormData()
    text.append("text", comment.text)
    deleteComment(id, text);
  }
  console.log(comment)
  return (
    <div className='comment-item'>
      <div className="comment-avatar">
        <img src="https://avatarfiles.alphacoders.com/318/318927.jpg" alt="" />
      </div>
      <div className='comment-div'>
        <div className="comment-config">
          <div className='owner-title'>@{comment.owner_username}</div>
          <div className="comment-date">
            {comment.date_created}
          </div>
        </div>
        <div className='comment-text'>
          {comment.text}
        </div>
        {/* <DeleteIcon style={{ cursor: "pointer", marginLeft: "93%" }} onClick={handleDelete} /> */}
      </div>
    </div>
  );
};

export default CommentCard;