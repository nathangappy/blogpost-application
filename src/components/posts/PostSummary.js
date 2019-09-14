import React from 'react';

const PostSummary = ({ post }) => {
  return (
    <div className="card z-depth-0 post-summary">
      <div className="card-content grey-text-darken-3">
        <span className="card-title">{post.title}</span>
        <p>Posted by Nathan Gappy</p>
        <p className="grey-text">September 4th, 5pm</p>
      </div>
    </div>
  )
}

export default PostSummary;
