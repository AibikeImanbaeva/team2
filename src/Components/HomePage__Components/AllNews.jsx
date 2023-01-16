import React from 'react';

function AllNews() {
  return <>
  <div>
    <h2 className='AllNewsMainTitle'>Лента новостей</h2>
    <div className='allNewsContainer'>

      <div className='allnewsData'>
        <p className='newsdata'>19 апреля</p>
        <span className='allnewsDataLine'></span>
      </div>

      <div className='allnewsContentCard'>
        <img src="/img4.png" alt="" />

        <div className='newsCardDesc'>
          <h2 className='AllnewsTitle'>
          Луфи и его друзья снова вернулись!
          </h2>
          <p className='allnewsDesc'>
          Не упустите новые эпизоды Ван Пис! Команда Луфи снова отправляется в интересные путешествия.
          </p>
          <div className='AllnewsCardBottom'>
            <button className='AllnewsReadButton'>
              Читать
            </button>
            <div className='allnewsLikeComments'>
              <p className='allNewsLikeCount'>10к</p>
              <img src="/LikeIcon.png" alt="" className='Allnewslikeicon'/>
              <p className='AllnewsCommentCount'>25</p>
              <img src="CommentsIcon.png" alt="" 
              className='allnewsCommentIcon'/>
            </div>
          </div>
          </div>
        </div>

        <div className='allnewsContentCard'>
        <img src="/img5.png" alt="" />

        <div className='newsCardDesc'>
          <h2 className='AllnewsTitle'>
          Не издевайся, Наготоро! уже набрал 1 млрд просмотров
          </h2>
          <p className='allnewsDesc'>
          Уже больше 1 млрд раз посмотрели знаменитое аниме Не издевайся, Наготоро! и возможно мы знаем почему!
          </p>
          <div className='AllnewsCardBottom'>
            <button className='AllnewsReadButton'>
              Читать
            </button>
            <div className='allnewsLikeComments'>
              <p className='allNewsLikeCount'>10к</p>
              <img src="/LikeIcon.png" alt="" className='Allnewslikeicon'/>
              <p className='AllnewsCommentCount'>25</p>
              <img src="CommentsIcon.png" alt="" 
              className='allnewsCommentIcon'/>
            </div>
          </div>
          </div>
        </div>


        <div className='allnewsData'>
        <p className='newsdata'>19 апреля</p>
        <span className='allnewsDataLine'></span>
      </div>

      <div className='allnewsContentCard'>
        <img src="/img6.png" alt="" />

        <div className='newsCardDesc'>
          <h2 className='AllnewsTitle'>
          Наруто что-то что-то важное!
          </h2>
          <p className='allnewsDesc'>
          Извините, я не смотрел еще Наруто поэтому не знаю что там важное но вот вам текст! Ура!
          </p>
          <div className='AllnewsCardBottom'>
            <button className='AllnewsReadButton'>
              Читать
            </button>
            <div className='allnewsLikeComments'>
              <p className='allNewsLikeCount'>10к</p>
              <img src="/LikeIcon.png" alt="" className='Allnewslikeicon'/>
              <p className='AllnewsCommentCount'>25</p>
              <img src="CommentsIcon.png" alt="" 
              className='allnewsCommentIcon'/>
            </div>
          </div>
          </div>
        </div>

        <div className='allnewsContentCard'>
        <img src="/img7.png" alt="" />

        <div className='newsCardDesc'>
          <h2 className='AllnewsTitle'>
          Лысый плащ готовится к 3 сезону!
          </h2>
          <p className='allnewsDesc'>
          Появились новости о том, какая компания будет анимировать Лысого плаща! И вас это может удивить.
          </p>
          <div className='AllnewsCardBottom'>
            <button className='AllnewsReadButton'>
              Читать
            </button>
            <div className='allnewsLikeComments'>
              <p className='allNewsLikeCount'>10к</p>
              <img src="/LikeIcon.png" alt="" className='Allnewslikeicon'/>
              <p className='AllnewsCommentCount'>25</p>
              <img src="CommentsIcon.png" alt="" 
              className='allnewsCommentIcon'/>
            </div>
          </div>
          </div>
        </div>    
  </div>


    </div>
  </>
}

export default AllNews;