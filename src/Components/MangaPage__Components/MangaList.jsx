import React, { useState } from 'react';
import { mangaContext } from '../../contexts/MangaContextProvider';
import MangaCard from './MangaCard';

const  MangaList = () => {

  const { mangas } = React.useContext(mangaContext);


  return (
    <>
      {
        mangas?.map(manga => (
          <MangaCard manga={manga} key={manga.id} 
     
          />
        ))
      }

    </>
  );
};

export default MangaList;