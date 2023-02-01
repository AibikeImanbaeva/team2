import React from 'react'
import Navbar from '../Components/HomePage__Components/Navbar'
import PostList from '../Components/PostList/PostList'
import Saidbar from '../Components/HomePage__Components/Saidbar'

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