import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import 'bootstrap/dist/css/bootstrap.min.css';


// import { animeContext } from '../../../contexts/AnimeContextProveder';



const PostCard = ({ anime }) => {

  const [title, setTitle] = useState(anime.title || "");
  const [genre, setGenre] = useState(anime.genre || "");

  return (
    <>
    <Card style={{ width: '18rem', background:"white", borderRadius: "1rem", marginTop:"10px" }}>
      <Card.Img variant="top" src="/img7.png" />
      <Card.Body>
        <Card.Title>Название: {title}</Card.Title>
        <Card.Text>
          Жанр: {genre}
        </Card.Text>
        <Button variant="danger" style={{background: "red", borderRadius: "1rem", width: "40%", marginLeft: "5%"}}>Удалить</Button>
        <Button variant="success" style={{background: "yellow", borderRadius: "1rem", width: "40%", marginLeft: "5%"}} >Изменить</Button>
      </Card.Body>
    </Card>

    </>
  )
}

export default PostCard



