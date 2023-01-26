import React, { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { fanficContext } from '../../contexts/FanficContextProvider';
import { useParams } from 'react-router-dom';

const CommentCard = ({ comment }) => {
  const { deleteComment } = useContext(fanficContext);
  const { id } = useParams()
  const handleDelete = () => {
    deleteComment(id);
  }
// console.log(comment)
  return (
    <div>
      <br />
      <div>
  
      </div>
      <div className='comments-div'>
       
        <div className='comments-text'>
        <p className='owner-title'>@{comment.owner_username}</p>
        {comment.text}
        </div>
        <DeleteIcon style={{ cursor: "pointer", marginLeft: "93%" }} onClick={handleDelete} />
      </div>
      <br />
    </div>
  );
};

export default CommentCard;