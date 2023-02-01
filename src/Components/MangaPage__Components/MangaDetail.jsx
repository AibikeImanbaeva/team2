import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { mangaContext } from '../../contexts/MangaContextProvider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MangaCommentCard from './MangaCommentCard';
import MangaChaptersList from './MangaChaptersList';
import { motion } from 'framer-motion'

import '../../Styles/MangaDetail.css'

const MangaDetail = () => {

  const [like, setLike] = useState(false);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  const {
    setMangaDetail,
    mangaDetail,
    deleteLikeAtManga,
    addLikeToManga,
    addComment,
    getMangaChapters,
    mangaChapters
  } = useContext(mangaContext);
  const { id } = useParams();

  function handleLike() {
    if (!like) {
      let likedManga = new FormData();
      likedManga.append("title", title);

      addLikeToManga(likedManga, mangaDetail.id);
      setLike(true)
    } else {
      deleteLikeAtManga(mangaDetail.id)
      setLike(false)
    }
  }

  function handleComment() {
    if(comment==""){
      return
    }else{
          let newComment = new FormData();
    newComment.append("text", comment);

    addComment(newComment, id)
    setComment("")
    }

  }

  useEffect(() => {
    setMangaDetail(id);
    setTitle(mangaDetail.title);
    getMangaChapters(id)
  }, []);

  return (
    <>
    <div className='mangaDetailContainer'>

      <div className='mangaDetailContent'>
        <motion.img
    initial={{ x: -700}}
    animate={{ x: 0,}}
    transition={{ duration: 1}}
    className='mangaDetailImage mangaDetailImageBox' src={mangaDetail.image} alt="" />

      <motion.div 
          initial={{ x: 700}}
          animate={{ x: 0,}}
          transition={{ duration: 1}}
          className="mangaDetailMainInfo">
        <p className='mangaDetailTitle'>
        {mangaDetail.title}
      </p>
      <div className='sldf'></div>

      <p className='mangaDetailsGenre'>
        Жанр: {mangaDetail.genre}
      </p>
  
      <hr />
      <p className='mangaDetailsVolTitle'>Главы:</p>
      <div className="volumes">
        {
          mangaChapters?.map(volume => <MangaChaptersList key={volume.slug} volume={volume} />)
        }
      </div> 
      <button onClick={() => handleLike()} className="mangaDetailsLikeButton">
        Нравится:
        <FavoriteIcon />
      </button>
      </motion.div>
      </div>


      <div className='mangaDetailCommentsContainer'>
      <p className='mangaDetailCommentTitle' >Комментарии:</p>
      <br />

      {
        mangaDetail.commentaries?.map(comments => <MangaCommentCard key={comments.id} comments={comments} />)
      }
      <div className='mangaDetailsInpBut'>
        <input type="text"  className='mangaDetalsComInp' placeholder='Оставить комментарий...' value={comment} onChange={(e) => setComment(e.target.value)} />
        <button onClick={() => handleComment()} className="mangaDetalsComButton" >Отправить</button>
      </div>
      </div>

    </div>

    </>
  );
};

export default MangaDetail;