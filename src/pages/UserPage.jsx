import React from 'react'
import Navbar from '../Components/HomePage__Components/Navbar'
import PostList from '../Components/PostList/PostList'
import Saidbar from '../Components/HomePage__Components/Saidbar'

const FanficMainPage = () => {
  return (
<>
{/* <AddPost /> */}
<Navbar />
<Saidbar />

<PostList/>



</>
  )
}

export default FanficMainPage