import React, { useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import  {newsContext} from "../../contexts/NewsContextProvider"  
import NewsCard from '../NewsCard/NewsCard';
const NewsList = () => {
  const { getNews, news} = useContext(newsContext)

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getNews();
    console.log(news)
  }, [])

  useEffect(() => {
    getNews();

  }, [searchParams])

  return (
   <>

{news?.map(news => (
  <NewsCard key={news.id} news={news}></NewsCard>
 


      ))}

   </>
  )
}

export default NewsList