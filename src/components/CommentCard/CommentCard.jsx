import React, { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { fanficContext } from '../../contexts/FanficContextProvider';
import { useParams } from 'react-router-dom';

const CommentCard = ({ comment }) => {
  const { deleteComment } = useContext(fanficContext);
  const { id } = useParams()
  const handleDelete = () => {

    deleteComment(comment.id, id, comment.text);
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