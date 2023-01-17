import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


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

const ViewPost = () => {

  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState("");
  const [id, setId] = useState(null);

  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [genres, setGenres] = useState('');
  const [desc, setDesc] = useState('');


  function handleSave(e) {
    let edittedProduct = new FormData();

    edittedProduct.append("title", title);
    // edittedProduct.append("image", image )
    edittedProduct.append("description", desc);
    edittedProduct.append("genre", genres);
    pushEdittedForm(edittedProduct, e.id)
    console.log(title, image, desc, genres)
    console.log(e.id)
  }


  async function viewPost() {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const { data } = await axios(`http://34.125.224.223/fanfic/`, config);
      console.log(data);
      setProducts(data)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    viewPost()
  }, [])
  console.log(products)


  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    setOpen(true)
    getUserDetail(e);
    setId(e.target.id);
    setId()
  };
  const handleClose = () => setOpen(false);
  // Modal


  async function getUserDetail(e) {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const { data } = await axios(`http://34.125.224.223/fanfic/${id}/`, config);
      console.log(data.title);

    } catch (error) {
      console.log(error)
    }
  }

  async function pushEdittedForm(edittedProduct, id) {
    try {

      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const { data } = await axios.patch(`http://34.125.224.223/fanfic/${id}`, edittedProduct, config)

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>

      {/* Модалка */}
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
          <Typography id="modal-modal-description" sx={{ mt: 2 }} component="span">
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Outlined" value={title} onChange={(e) => setTitle(e.target.value)} variant="outlined" />
              <TextField id="outlined-basic" label="Outlined" value={desc} onChange={(e) => setDesc(e.target.value)} variant="outlined" />
              <TextField id="outlined-basic" label="Outlined" value={genres} onChange={(e) => setGenres(e.target.value)} variant="outlined" />
              <input type="file" name="photo" multiple accept="image/*" onChange={e => setImage(e.target.files[0])} />
              <Button size="small" onClick={(e) => handleSave(e)}>Save</Button>
            </Box>
          </Typography>
        </Box>
      </Modal>
      {/* Модалка */}


      {
        products ? (
          products.map(e => {
            return <Card sx={{ maxWidth: 345 }} key={e.id}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={e.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {e.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleOpen} id={e.id}>Edit</Button>
                <Button size="small" id={e.id}>Delete</Button>
              </CardActions>
            </Card>
          })
        ) : (console.log(false))
      }

    </div>
  );
};

export default ViewPost;