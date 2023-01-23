import React from 'react';

function News() {
  return <>
      <div className="News__container">
        <div className='NewsTitle'>
        <h2 className="newsTitle">Новости</h2>
        <span className='newsLine'></span>
        </div>
        <div className='newsContent'>
                <img src="/hotEpisodesIcon.png" alt=""  className='newsFireIcon'/>
            <div className='newEpisodes'>
                <div className='hotNews'>
                <p className='episodes-title'>Новые Эпизоды</p>
                </div>
            </div>

            <div className='news__episode-card'>
               <img src="/img1.png" alt=""  className='newsImg'/>
             <div className='NewsContent__items'>
                <p className='news__episode-data'>23 июня 2022</p>
                <button className='news__episode-readButton'>Читать</button>
                <p className='news__episode-title'>Выход 3 сезона Моб Психо 100 уже скоро</p>
             </div>
                  <div className='news__episode-shadowTop'></div>
                   <div className='news__episode-shadowBottom'></div>
            </div>

            <div  className='news__episode-card'>
               <img src="/img2.png" alt=""  className='newsImg'/>
             <div className='NewsContent__items'>
                <p className='news__episode-data'>23 июня 2022</p>
                <button className='news__episode-readButton'>Читать</button>
                <p className='news__episode-title'>Последний сезон атаки титанов</p>
             </div>
                   <div className='news__episode-shadowTop'></div>
                   <div className='news__episode-shadowBottom'></div>
            </div>

            <div  className='news__episode-card'>
               <img src="/img3.png" alt=""  className='newsImg'/>
             <div className='NewsContent__items'>
                <p className='news__episode-data'>23 июня 2022</p>
                <button className='news__episode-readButton'>Читать</button>
                <p className='news__episode-title'>Что значит концовка Киберпанка?</p>
             </div>
                  <div className='news__episode-shadowTop'></div>
                   <div className='news__episode-shadowBottom'></div>
            </div>

        </div>
      </div>
  </>
}

export default News;