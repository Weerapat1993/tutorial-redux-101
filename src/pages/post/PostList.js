import React from 'react'
import { Link } from 'react-router-dom';
import PostListContainer from '../../features/post/PostListContainer';

const PostList = () => {
  return (
    <div>
      <h1>Post List</h1>
      <Link to="/">Back to Home</Link>
      <PostListContainer />
    </div>
  )
}

export default PostList
