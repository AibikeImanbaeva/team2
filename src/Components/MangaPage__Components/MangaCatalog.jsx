
import * as React from 'react';
import '../../Styles/MangaPage.css';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { mangaContext } from '../../contexts/MangaContextProvider';
import { useEffect } from 'react';
import MangaList from './MangaList';




const MangaCatalog = () => {

     const { getManga, getGenres, mangaGenres } = React.useContext(mangaContext);

     useEffect(() => {
          getManga();
          getGenres();
     }, [])


     const [janr, setJanr] = React.useState('');

     const handleChangeJanr = (event) => {
          setJanr(event.target.value);
     };
     return (
          <div className='Manga__catalogContainer'>

               <div className='Manga__TitleJanr'>
                    <h2 className='Manga__catalogTitle'>Каталог</h2>

                    <div className='SelectJanr'>
                         <FormControl sx={{ m: 1, minWidth: 80, backgroundColor: "#414141" }}>
                              <InputLabel id="demo-simple-select-autowidth-label" className='Manga__ChooseJanr'>Жанр</InputLabel>
                              <Select
                                   labelId="demo-simple-select-autowidth-label"
                                   id="demo-simple-select-autowidth"
                                   value={janr}
                                   onChange={handleChangeJanr}
                                   autoWidth
                                   label="Жанр"
                              >
                                   <MenuItem value="">Жанры</MenuItem>
                                   {
                                        mangaGenres?.map(genre => <MenuItem value={genre.slug} key={genre.slug}>{genre.title}</MenuItem>)
                                   }

                              </Select>
                         </FormControl>
                    </div>
               </div>

               <div className='Manga__CatalogCardContainer'>
                    <MangaList />
               </div>







          </div>
     )
}

export default MangaCatalog