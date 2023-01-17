import React,{useEffect, useContext} from 'react';
import { postContext } from '../../contexts/PostsContextProvider';
import PostCard from '../PostCard/PostCard';

const PostList = () => {
    const {getPost, posts} = useContext(postContext)
    console.log(posts)
    

    useEffect(() => {
        getPost();
      }, [])


  return (
   <>
   
   {posts?.map(fanfic=>( 
        <PostCard key={fanfic.id} item={fanfic}></PostCard> 
      ))} 
   
   </>
  )
}

export default PostList