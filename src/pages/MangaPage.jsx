import React from 'react';
import Navbar from '../Components/HomePage__Components/Navbar';
import Saidbar from '../Components/HomePage__Components/Saidbar'
import MangaNewEpisodes from '../Components/MangaPage__Components/MangaNewEpisodes';
import MangaCatalog from '../Components/MangaPage__Components/MangaCatalog';
import Fanfics from '../Components/HomePage__Components/Fanfics';
import Animes from '../Components/HomePage__Components/Animes'

import '../Styles/HomePage2.css'
import '../Styles/HomePage.css'


const MangaPage = () => {
    return (
        <>
        <img src="/chainsawman.png" alt="" className='MangaPageChainsawman' />
        <Navbar/>
        <Saidbar/>
        <MangaNewEpisodes/>
        <MangaCatalog/>
        <div className='FanficsAndAnime'>
        <Fanfics/>
        <Animes/>
        </div>
        </>
    );
};

export default MangaPage;