import React from 'react'

const PostDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Post Title - {id}</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eum, sint consequatur ut non officiis expedita eveniet perferendis nostrum fugiat modi repudiandae fuga obcaecati alias quisquam est neque, optio quis!</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Nathan Gappy</div>
          <div>September 10th, 2019</div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails
