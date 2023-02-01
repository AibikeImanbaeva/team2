import React from 'react'
import Navbar from '../components/HomePage__Components/Navbar'
import PostList from '../components/PostList/PostList'
import Saidbar from '../components/HomePage__Components/Saidbar'

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