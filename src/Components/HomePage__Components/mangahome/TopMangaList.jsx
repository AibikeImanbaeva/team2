import React, { useContext } from 'react';
import { mangaContext } from '../../../contexts/MangaContextProvider';
import TopMangaCard from "./TopMangaCard"
import '../../../Styles/TopManga.css'
const MangaList = () => {

  const { mangas } = useContext(mangaContext);

  return (
    <>
    <h3 className='top'>Топ манги</h3>
      {
        mangas?.slice(0,2).map(manga => (
          <TopMangaCard manga={manga} key={manga.id} />
        ))
      }

    </>
  );
};

export default MangaList;