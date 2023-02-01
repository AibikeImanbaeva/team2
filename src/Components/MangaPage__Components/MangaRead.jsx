import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mangaContext } from '../../contexts/MangaContextProvider';
import MangaChapterImage from './MangaChapterImage';

const MangaRead = () => {
  const { setMangaToRead, mangaChapterImgs } = useContext(mangaContext);
  const { page } = useParams()

  useEffect(() => {
    setMangaToRead(page);
  }, [])

  return (
    <div className='mangaReadContainer'>
      {
        mangaChapterImgs.images? (<MangaChapterImage page={page} key={page.id}/>) : ("")
      }
    </div>
  );
};

export default MangaRead;