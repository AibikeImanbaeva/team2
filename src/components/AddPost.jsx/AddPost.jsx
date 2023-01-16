import React, {useState, useContext, useEffect}from 'react';
import { useNavigate } from 'react-router-dom';
import { postContext } from '../../contexts/PostsContextProvider';
import { useSearchParams } from 'react-router-dom' ;


const AddPost = () => {
    const navigate = useNavigate();

    const { getPost, categories, getCategories,createPost} = useContext(postContext);
  const [id, setId] = useState('');
  const [owner, setOwner] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState('');
  const [dataCreated, setDataCreated] = useState('')
  const [searchParams , setSearchParams] = useSearchParams(); 
  
//   useEffect(()=>{
//   getCategories()
//   },[])
  
  function handleSave(){
    let newProduct = new FormData();
    newProduct.append("id", id);
    newProduct.append("owner", owner);
    newProduct.append("title", title);
    newProduct.append("image", image )
    newProduct.append("description", desc );
    newProduct.append("date_created",dataCreated );    
    createPost(newProduct, navigate)
  }
  useEffect(()=>{ 
    getPost() 
  },[]) 
 
  useEffect(()=>{ 
    getPost(); 
 
  },[searchParams]) 
 
//   useEffect(()=>{ 
//     setSearchParams({ 
//       page:currentPage 
//     }) 
//   },[currentPage]) 

  return (
  <>
  
  <div className="text-field">
        <input type="text" name="" id="" placeholder='Что у вас нового?'  value={title} onChange={(e)=> setTitle(e.target.value)} />
      <input type="file" name="photo"  id=''  multiple accept="image/*,image/jpeg"/>
        <input type='submit' value="Отправить"></input>
        
    </div>
  
  
  
  </>
  )
}

export default AddPost