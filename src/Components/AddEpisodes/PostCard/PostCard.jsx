import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





const PostCard = ({ anime }) => {

  const [title, setTitle] = useState(anime.title || "");
  const [genre, setGenre] = useState(anime.genre || "");

  return (
    <>
    <Card style={{ width: '18rem', background:"white", borderRadius: "1rem", marginTop:"10px" }}>
      <Card.Img variant="top" src="/img7.png" />
      <Card.Body>
        <Card.Title>Название: {anime.title}</Card.Title>
        <Card.Text>
          Жанр: {anime.genre}
        </Card.Text>
        <Button variant="danger" style={{background: "red", borderRadius: "1rem", width: "40%", marginLeft: "5%"}}>Удалить</Button>
        <Button variant="success" style={{background: "yellow", borderRadius: "1rem", width: "40%", marginLeft: "5%"}} >Изменить</Button>
      </Card.Body>
    </Card>

    </>
  )
}

export default PostCard



