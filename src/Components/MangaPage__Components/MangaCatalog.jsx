
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import '../../Styles/MangaPage.css'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




const MangaCatalog = () => {
     const [janr, setJanr] = React.useState('');

  const handleChangeJanr = (event) => {
    setJanr(event.target.value);
  };
    return (
        <div className='Manga__catalogContainer'>

          <div className='Manga__TitleJanr'>
               <h2 className='Manga__catalogTitle'>Каталог</h2>

               <div className='SelectJanr'>
                 <FormControl sx={{ m: 1, minWidth: 80, backgroundColor: "#414141"}}>
                   <InputLabel id="demo-simple-select-autowidth-label"  className='Manga__ChooseJanr'>Жанр</InputLabel>
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


            <div className='Manga__CatalogCardContainer'>

                
               <div className='Manga__CatalogCard'>
                   <img src="/Catalog1.png" alt="" className='Manga__Catalog-cardImg' />

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



                <div className='Manga__CatalogCard'>
                   <img src="/Catalog1.png" alt="" className='Manga__Catalog-cardImg' />

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




                <div className='Manga__CatalogCard'>
                   <img src="/Catalog1.png" alt="" className='Manga__Catalog-cardImg' />

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



                <div className='Manga__CatalogCard'>
                   <img src="/Catalog1.png" alt="" className='Manga__Catalog-cardImg' />

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




                <div className='Manga__CatalogCard'>
                   <img src="/Catalog1.png" alt="" className='Manga__Catalog-cardImg' />

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





                <div className='Manga__CatalogCard'>
                   <img src="/Catalog1.png" alt="" className='Manga__Catalog-cardImg' />

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




                <div className='Manga__CatalogCard'>
                   <img src="/Catalog1.png" alt="" className='Manga__Catalog-cardImg' />

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



                <div className='Manga__CatalogCard'>
                   <img src="/Catalog1.png" alt="" className='Manga__Catalog-cardImg' />

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



                <div className='Manga__CatalogCard'>
                   <img src="/Catalog1.png" alt="" className='Manga__Catalog-cardImg' />

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



                <div className='Manga__CatalogCard'>
                   <img src="/Catalog1.png" alt="" className='Manga__Catalog-cardImg' />

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
            
        </div>
    )
}

export default MangaCatalog