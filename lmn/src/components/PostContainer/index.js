import React from 'react';
import './style.css';

export default function PostsContainer(props) {
  return (
    
    <div className="col s6" id="discussion-container">
    {/* z-depth-2 */}
      <h2>Discussions</h2>
    <div className="divider"></div>
      <div className="section">
        <h5>{props.topic}</h5>
        <h6>{props.username}</h6>
        <p>{props.description}</p>
        <p>{props.createdAt}</p>
      </div>
      </div>

  )
}