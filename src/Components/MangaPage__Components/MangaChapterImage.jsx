import React, { useEffect, useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { mangaContext } from '../../contexts/MangaContextProvider';
import '../../Styles/MangaDetail.css'

const MangaChapterImage = ({ page }) => {
  const {mangaChapterImgs } = useContext(mangaContext);
console.log(mangaChapterImgs)
// console.log(page)

 
const [pages, setPages] = useState(1);
const itemsOnPage =4;

const count = Math.ceil(mangaChapterImgs.images.length / itemsOnPage);

const handlePage = (e,p) => {
  setPages(p)
};

function currentData(){
  const begin = (pages-1) * itemsOnPage;
  const end = begin + itemsOnPage;
  return mangaChapterImgs.images.slice(begin, end)
}

  return (
<>
<div className='mangaReadContainer'>
  {mangaChapterImgs.images? (
  currentData().map(el=> (
    <div className='mangaChapter-img'>
   <img src={el.url} alt="" />
 </div>))): (
  <h3>loading...</h3>
)}
</div>

      
      <div className='pagination'>

      <Stack spacing={2}>
      <Typography>Page: {pages}</Typography>
      <Pagination count={count} page={pages} onChange={handlePage} />
    </Stack>
      </div>

</>
  


  );
};

export default MangaChapterImage;