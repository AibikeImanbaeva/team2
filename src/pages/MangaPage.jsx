import React from 'react';
import Navbar from '../components/HomePage__Components/Navbar';
import Saidbar from '../components/HomePage__Components/Saidbar'
import MangaNewEpisodes from '../components/MangaPage__Components/MangaNewEpisodes';
import MangaCatalog from '../components/MangaPage__Components/MangaCatalog';
import Fanfics from '../components/HomePage__Components/Fanfics';
import Animes from '../components/HomePage__Components/Animes'

import '../Styles/HomePage2.css'
import '../Styles/HomePage.css'


const MangaPage = () => {
    return (
        <>
            <img src="/chainsawman.png" alt="" className='MangaPageChainsawman' />
            <Navbar />
            <Saidbar />
            <MangaNewEpisodes />
            <MangaCatalog />
            <div className='FanficsAndAnime'>
                {/* <Fanfics /> */}
                <Animes />
            </div>
        </>
    );
};

export default MangaPage;