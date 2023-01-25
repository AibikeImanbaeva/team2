import React, { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { fanficContext } from '../../contexts/FanficContextProvider';
import { useParams } from 'react-router-dom';

const CommentCard = ({ comment }) => {
  const { deleteComment } = useContext(fanficContext);
  const { id } = useParams()
  const handleDelete = () => {
    let text = new FormData()
    text.append("text",comment.text)
    deleteComment(id,text);
  }

  return (
    <div>
      <br />
      <div>
        {comment.text}
        <DeleteIcon style={{ cursor: "pointer" }} onClick={handleDelete} />
      </div>
      <br />
    </div>
  );
};

export default CommentCard;