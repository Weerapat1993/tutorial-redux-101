import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <h1>Home page</h1>
      <div><Link to="/about">Go to About page</Link></div>
      <div><Link to="/posts">Go to Post List</Link></div>  
    </div>
  )
}

export default Home;
