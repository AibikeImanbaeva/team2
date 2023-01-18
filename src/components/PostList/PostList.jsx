import React, { useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { postContext } from '../../contexts/PostsContextProvider';
import PostCard from '../PostCard/PostCard';

const PostList = () => {
  const { getPost, fanfic} = useContext(postContext)

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getPost();
    console.log(fanfic)
  }, [])

  // useEffect(()=>{
  //     getPost()
  //     console.log(posts)
  // })

  useEffect(() => {
    getPost();

  }, [searchParams])

  return (
   <>

{fanfic?.map(fanfic => (
        <PostCard key={fanfic.id} fanfic={fanfic}></PostCard>
      ))}

   </>
  )
}

export default PostList