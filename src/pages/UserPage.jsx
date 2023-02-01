import React from 'react'
import Navbar from '../components/HomePage__Components/Navbar'
import Saidbar from '../components/HomePage__Components/Saidbar'
// import AddPost from '../components/AddPost.jsx/AddPost'
import PostList from '../components/PostList/PostList'

const FanficMainPage = () => {
  return (
    <>
      {/* <AddPost /> */}
      <Navbar />
      <div className='homePage__container'>
        <PostList />
      </div>
      <Saidbar />

    </>
  )
}

export default FanficMainPage