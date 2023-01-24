
import * as React from 'react';
import '../../Styles/MangaPage.css';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MangaCard from './MangaCard';
import { mangaContext } from '../../contexts/MangaContextProvider';
import { useEffect } from 'react';




const MangaCatalog = () => {

     const { getManga } = React.useContext(mangaContext);

     useEffect(() => {
          getManga();
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
                                   <MenuItem value={"Романтика"}>Романтика</MenuItem>
                                   <MenuItem value={"Комедии"}>Комедии</MenuItem>
                                   <MenuItem value={"Фантастика"}>Фантастика</MenuItem>
                                   <MenuItem value={"История"}>История</MenuItem>
                                   <MenuItem value={"Ужасы"}>Ужасы</MenuItem>
                                   <MenuItem value={"Психология"}>Психология</MenuItem>
                                   <MenuItem value={"Трагедия"}>Трагедия</MenuItem>
                                   <MenuItem value={"Мистика"}>Мистика</MenuItem>
                                   <MenuItem value={"Бои Искусств"}>Бои Искусств</MenuItem>
                                   <MenuItem value={"Приключения"}>Приключения</MenuItem>

                              </Select>
                         </FormControl>
                    </div>
               </div>


               <MangaCard />




          </div>
     )
}

export default MangaCatalog