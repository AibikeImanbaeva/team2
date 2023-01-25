import React, { useContext } from 'react';
import { mangaContext } from '../../../contexts/MangaContextProvider';
import MangaCardHome from "./MangaCardHome"
const MangaList = () => {

  const { mangas } = useContext(mangaContext);

  return (
    <>
      {
        mangas?.slice(0,3).map(manga => (
          <MangaCardHome manga={manga} key={manga.id} />
        ))
      }

    </>
  );
};

export default MangaList;