import React from 'react'
import { motion } from 'framer-motion'
import News from '../Components/HomePage__Components/News'
import Fanfics from '../Components/HomePage__Components/Fanfics'
import Animes from '../Components/HomePage__Components/Animes'
import Saidbar from '../Components/HomePage__Components/Saidbar'
import Navbar from '../Components/HomePage__Components/Navbar'
import NewsListHP from '../Components/HomePage__Components/NewsListHP'


import "../Styles/HomePage.css"



const HomePage = () => {
  const bodyColor = {
  backgroundColor: '#202020'

  }
  return (
    <>
    <motion.div
    initial={{ y: -700,}}
    animate={{ y: 0,}}
    transition={{ duration: 1.4}}
    >
    <img src="/homePageBackImg.png" alt="" className='HomePage-BackgroundImg' />
    </motion.div>


      <Navbar/>
    <div className='homePage__container'>

    <motion.div
    initial={{ y: -700}}
    animate={{ y: 0,}}
    transition={{ duration: 1}}
    >
      <News/>
    </motion.div>


      {/* <div className='homePage__AllNews-FanfAnime'> */}

          <motion.div
    initial={{ y: 700,}}
    animate={{ y: 0,}}
    transition={{ duration: 1.7}}
    >
       <div className='homePage_news-card'>
        <h2 className='homePage_NewsMainTitle'>Лента новостей</h2>
           <NewsListHP/>
        </div>
    </motion.div>
    
      </div>


    {/* </div> */}
      <div className='FanficsAndAnime F-A_HomePage'>
          {/* <Fanfics/> */}
          

          <motion.div
    initial={{ x: 700,}}
    animate={{ x: 0,}}
    transition={{ duration: 2}}
    >
      <Animes/>
    </motion.div>


        </div>
    <motion.div 
    initial={{ x: -500,}} 
    animate={{ x: 0,}} 
    transition={{ duration: 1}}
    >
         <Saidbar/>
    </motion.div>
 
    </>
  )
}

export default HomePage