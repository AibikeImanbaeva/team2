import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mangaContext } from '../../contexts/MangaContextProvider';
import MangaChapterImage from './MangaChapterImage';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const MangaRead = () => {
  const { setMangaToRead, mangaChapterImgs } = useContext(mangaContext);
  const { page } = useParams()

  useEffect(() => {
    setMangaToRead(page);
  }, [])


// console.log(mangaChapterImgs)

// const [pages, setPages] = useState(1);
// const itemsOnPage =4;

// const count = Math.ceil(mangaChapterImgs.images.length / itemsOnPage);

// const handlePage = (e,p) => {
//   setPages(p)
// };

// function currentData(){
//   const begin = (pages-1) * itemsOnPage;
//   const end = begin + itemsOnPage;
//   return mangaChapterImgs.images.slice(begin, end)
// }



  return (
    <>
      <div>
     <MangaChapterImage page={page} key={page.id}/>
    </div>


   
    </>
  
  );
};

export default MangaRead;