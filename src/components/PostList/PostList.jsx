import React, { useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { postContext } from '../../contexts/PostsContextProvider';
import PostCard from '../PostCard/PostCard';

const PostList = () => {
  const { getPost, post} = useContext(postContext)

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getPost();
    console.log(post)
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

{post?.map(post => (
        <PostCard key={post.id} post={post}></PostCard>
      ))}

   </>
  )
}

export default PostList