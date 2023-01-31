import React, { createContext, useContext, useReducer } from "react"; 
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
 
 
export const bioContext = createContext(); 
export const useBio = () => useContext(bioContext); 
const INIT_STATE = { 
  bio: [], 
  pages: 0, 
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
    case "GET_CATEGORIES": 
      return { 
        ...state, 
        categories: action.payload, 
      }; 
    case "GET_ONE_POST": 
      return { ...state, onePost: action.payload }; 
    default: 
      return state; 
  } 
} 
 
const API = "http://34.125.224.223"; 
// const navigate = useNavigate()
 
const AnimeContextProvider = ({ children }) => { 
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
 
  async function createBio(newBiography, navigate) { 
    try { 
      const tokens = JSON.parse(localStorage.getItem("token")); 
      const Authorization =`Bearer ${tokens.access}`; 
      const config = { 
        headers: { 
          Authorization, 
        }, 
      }; 
      const res = await axios.post(`${API}/biography/`, newBiography, config); 
      console.log(res); 
      navigate("/"); 
      getBio(); 
    } catch (err) { 
      console.log(err); 
    } 
  } 
  async function editBio(id, editBio){ 
    try{ 
        const tokens = JSON.parse(localStorage.getItem('token')); 
        const Authorization = `Bearer ${tokens.access}`; 
        const config = { 
            headers: { 
                Authorization 
            }, 
        }; 
        const res = await axios.patch(`${API}/biography/${id}`,editBio, config) 
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
 
  // async function getCategories() { 
  //   try { 
  //     const tokens = JSON.parse(localStorage.getItem("token")); 
  //     const Authorization = Bearer ${tokens.access}; 
  //     const config = { 
  //       headers: { 
  //         Authorization, 
  //       }, 
  //     }; 
  //     const res = await axios(`${API}/category/list/`, config);  //RAUF 
  //     dispatch({ 
  //       type: "GET_CATEGORIES", 
  //       payload: res.data.results, 
  //     }); 
  //   } catch (err) { 
  //     console.log(err); 
  //   } 
  // } 
 
 
 
//   async function deletePost(id) { 
//     try { 
//       const tokens = JSON.parse(localStorage.getItem("token")); 
//       const Authorization = Bearer ${tokens.access}; 
//       const config = { 
//         headers: { 
//           Authorization, 
//         }, 
//       }; 
//       await axios.delete(`${API}/fanfic/${id}/`, config); //RAUF 
//       getPost(); 
//     } catch (err) { 
//       console.log(err); 
//     } 
//   } 
 
 
 
   
//   async function editFanficPost(edittedProduct, id) { 
//     try { 
//       const tokens = JSON.parse(localStorage.getItem("token")); 
//       const Authorization = Bearer ${tokens.access}; 
//       const config = { 
//         headers: { 
//           Authorization, 
//         }, 
//       }; 
       
//       await axios.patch(`${API}/fanfic/${id}/`,

// edittedProduct, config); 
//       getPost(); 
//     } catch (error) { 
//       console.log(error) 
//     } 
//   } 
   
 
 
 
 
 
 
 
 
 
 
  return ( 
    <bioContext.Provider 
    value={{ 
        bio: state.bio, 
        pages: state.pages, 
        onePost: state.onePost, 
 
 
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
 
export default AnimeContextProvider;

