import React from 'react';

import Navbar from '../Components/HomePage__Components/Navbar';
import Saidbar from '../Components/HomePage__Components/Saidbar'
import MangaNewEpisodes from '../Components/MangaPage__Components/MangaNewEpisodes';
import MangaCatalog from '../Components/MangaPage__Components/MangaCatalog';
import Fanfics from '../Components/HomePage__Components/Fanfics';
import Animes from '../Components/HomePage__Components/Animes'
import { motion } from 'framer-motion'


import '../Styles/HomePage2.css'
import '../Styles/HomePage.css'


const MangaPage = () => {
    return (
        <>

                <motion.div
                 initial={{ y: -700,}}
                 animate={{ y: 0,}}
                 transition={{ duration: 2.2}} >
                    <img src="/chainsawman.png" alt="" className='MangaPageChainsawman' />
                 </motion.div>



            <Navbar />


            <motion.div 
            initial={{ x: -200,}} 
            animate={{ x: 0,}} 
             transition={{ duration: 1}}>
                <Saidbar/>
            </motion.div>
            <MangaNewEpisodes />


            <motion.div
                 initial={{ y: 700,}}
                 animate={{ y: 0,}}
                 transition={{ duration: 2.2}} >
                    <MangaCatalog />
                 </motion.div>


            <div className='FanficsAndAnime'>
                {/* <Fanfics /> */}

                <Animes />
            </div>
        </>
    );
};

export default MangaPage;