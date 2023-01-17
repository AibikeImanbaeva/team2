import React,{useContext} from 'react';
import { postContext } from '../../contexts/PostsContextProvider';

const PostCard = ({fanfic}) => {
    console.log(fanfic);
    
    const {deleteProduct, toggleLike}  = useContext(postContext)
  return (
    <>
    <div class="card mb-3">
  <img src={fanfic.image} className="card-img-top" alt="..." />
  <div class="card-body">
        <h5 class="card-title">{fanfic.title}</h5>
        <h5 class="card-title">{fanfic.genre}</h5>
    <p class="card-text">{fanfic.description}</p>
    <button>Details</button>
      <button onClick={()=> toggleLike(fanfic.id)}>Like</button>
      {/* {fanfic.is_author ? (
        <>
          <button>Edit</button>
          <button onClick={() => deleteProduct(fanfic.id)}>Delete</button>
        </>
      ) : (
        null
      )} */}
  </div>
</div>

    </>
  )
}

export default PostCard