import React from 'react';
import './Blog.css';

function Blog() {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog</h1>
      <div className="blog-post">
        <h2 className="blog-post-title">Post title</h2>
        <p className="blog-post-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat
          metus a urna bibendum malesuada...
        </p>
        <p className="blog-post-date">Published January 1, 2024</p>
      </div>
      <div className="blog-post">
        <h2 className="blog-post-title">Another Post Title</h2>
        <p className="blog-post-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat
          metus a urna bibendum malesuada...
        </p>
        <p className="blog-post-date">Published January 2, 2024</p>
      </div>
    </div>
  );
}

export {Blog}
