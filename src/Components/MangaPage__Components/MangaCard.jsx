import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import '../../Styles/MangaPage.css';

const MangaCard = () => {
  return (
    <div className='Manga__CatalogCardContainer'>

      <div className='Manga__CatalogCard'>
        <img src="/Catalog1.png" alt="" className='Manga__Catalog-cardImg' />
        <div className='Hover-readCont'>
          <button className='Hover-readButton'>Читать</button>
        </div>

        <div className='Manga__Catalog-DataTitleRange'>
          <div className='Manga__Catalog-cardTitleCont'>
            <h2 className='Manga__Catalog-cardTitle'>Ван Пиc </h2>
          </div>
          <Stack spacing={1} className="Manga__Catalog-rating" >
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
          </Stack>
        </div>

        <div className='Manga__Catalog-shadowTop'></div>
        <div className='Manga__Catalog-shadowBottom'></div>

        <div className='Manga__Catalog-ChaptersCont'>
          <div className='Manga__Catalog-OneChapter'>
            <h3 className='Manga__CatalogsChaptersTitle'> Глава 45  </h3>
            <p className='Manga__CatalogChaptersData'> 23.12.2018</p>
          </div>

          <div className='Manga__Catalog-OneChapter'>
            <h3 className='Manga__CatalogsChaptersTitle'> Глава 45  </h3>
            <p className='Manga__CatalogChaptersData'> 23.12.2018</p>
          </div>

          <div className='Manga__Catalog-OneChapter'>
            <h3 className='Manga__CatalogsChaptersTitle'> Глава 45  </h3>
            <p className='Manga__CatalogChaptersData'> 23.12.2018</p>
          </div>
        </div>

      </div>
    </div>


  );
};

export default MangaCard;