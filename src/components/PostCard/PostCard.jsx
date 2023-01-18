import React, { useContext, useState } from 'react';
import { postContext } from '../../contexts/PostsContextProvider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// Modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
// Modal

const PostCard = ({ fanfic }) => {
  const { editFanficPost } = useContext(postContext)

  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Modal

  // Edit
  // Edit states
  const [title, setTitle] = useState(fanfic.title || "");
  const [desc, setDesc] = useState(fanfic.description || "");
  const [genre, setGenre] = useState(fanfic.genre || "");
  const [image, setImage] = useState(null);



  const handleEditInp = () => {
    let edittedFanficPost = new FormData();

    edittedFanficPost.append("title", title);
    edittedFanficPost.append("image", image);
    edittedFanficPost.append("description", desc);
    edittedFanficPost.append("genre", genre);

    editFanficPost(edittedFanficPost, fanfic.id)
  }


const handeLike = ()=>{
  let likePost = new FormData()
  likePost.append("title", title);
  likePost.append("image", image);
  likePost.append("description", desc);
  likePost.append("genre", genre);

   toggleLike(likePost,fanfic.id)
}
 
  // Edit

  const { deletePost, toggleLike } = useContext(postContext)
  return (
    <>
      <div className="card mb-3">
        <img src={fanfic.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{fanfic.title}</h5>
          <h5 className="card-title">{fanfic.genre}</h5>
          <p className="card-text">{fanfic.description}</p>
          <Button>Details</Button>
          <Button onClick={() => toggleLike(fanfic.id)}>Like</Button>
          {/* {fanfic.is_author ? ( */}
          <>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                  <input type="text" placeholder='desc' value={desc} onChange={(e) => setDesc(e.target.value)} />
                  <input type="text" placeholder='genre' value={genre} onChange={(e) => setGenre(e.target.value)} />
                  <input type="file" name="photo" id='' multiple accept=".jpg" onChange={e => setImage(e.target.files[0])} />
                  Like: {fanfic.likes}
                  <button onClick={handleEditInp}>Сохранить</button>
                </Typography>
              </Box>
            </Modal>
            <button onClick={() => deletePost(fanfic.id)}>Delete</button>
          </>
          {/* ) : (
        null
      )} */}
        </div>
      </div>

    </>
  )
}

export default PostCard