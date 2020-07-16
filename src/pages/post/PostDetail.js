import React from 'react'
import { Link } from 'react-router-dom';
import PostDetailContainer from '../../features/post/PostDetailContainer';

const PostDetail = () => {
  return (
    <div>
      <h1>Post Detail</h1>
      <Link to="/posts">Back to Post List</Link>
      <PostDetailContainer />
    </div>
  )
}

export default PostDetail
