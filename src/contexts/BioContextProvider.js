import React, { createContext, useContext, useReducer } from "react"; 
import axios from "axios"; 
import { useNavigate } from "react-router-dom";


export const bioContext = createContext(); 
// export const useBio = () => useContext(bioContext); 
const INIT_STATE = { 
  bio: [], 
//   pages: 0, 
  onePost: null, 
}; 

function reducer(state = INIT_STATE, action) { 
  switch (action.type) { 
    case "GET_BIO": 
      return { 
        ...state, 
        bio: action.payload, 
        // pages: Math.ceil(action.payload.count / 5), 
      }; 
 
  } 
} 

const API = "http://34.125.224.223"; 
// const navigate = useNavigate()

const BioContextProvider = ({ children }) => { 
  const [state, dispatch] = useReducer(reducer, INIT_STATE); 

  async function getBio() { 
    try { 
      const tokens = JSON.parse(localStorage.getItem("token")); 
      const Authorization = `Bearer ${tokens.access}`; 
      const config = { 
        headers: { 
          Authorization, 
        }, 
      }; 

      const res = await axios( 
       ` ${API}/biography/${window.location.search}`, config 
      ); 
//  console.log(res.data)
      dispatch({ 
        type: "GET_BIO", 
        payload: res.data, 
      }); 
    } catch (err) { 
      console.log(err); 
    } 

  } 

  async function createBio(newBio, navigate) { 
    try { 
      const tokens = JSON.parse(localStorage.getItem("token")); 
      const Authorization =`Bearer ${tokens.access}`; 
      const config = { 
        headers: { 
          Authorization, 
        }, 
      }; 
      const res = await axios.post(`${API}/biography/`, newBio, config); 
      console.log(res); 
      navigate("/"); 
      getBio(); 
    } catch (err) { 
      console.log(err); 
    } 
  } 
  async function editBio(newBio , id){ 
    try{ 
        const tokens = JSON.parse(localStorage.getItem('token')); 
        const Authorization = `Bearer ${tokens.access}`; 
        const config = { 
            headers: { 
                Authorization 
            }, 
        }; 
        const res = await axios.put(`${API}/biography/${id}`,newBio, config) 
        console.log(res) 
        getBio() 
    }catch (err){ 
        console.log(err) 
    } 
  } 

   async function deleteBio(id) { 
    try{ 

     const tokens = JSON.parse(localStorage.getItem('token')); 
     const Authorization = `Bearer ${tokens.access}`; 
     const config = { 
        headers: { 
            Authorization 
        } 
     } 
     const res = await axios.delete(`${API}/biography/${id}`, config) 
     console.log(res) 
    }catch(err){ 
        console.log(err) 
    } 
   } 

 











  return ( 
    <bioContext.Provider 
    value={{ 
        bio: state.bio, 
        getBio, 
        createBio, 
        editBio, 
        deleteBio 



    }} 
    > 
      {children} 
    </bioContext.Provider> 
  ); 
}; 

export default BioContextProvider;