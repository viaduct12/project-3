import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

export default function PostContainer(props) {
  return (
    
    // <div className="col s6" id="discussion-container">
    // {/* z-depth-2 */}
    //   <h2>Discussions</h2>
    // <div className="divider"></div>
      <div className={`section ${props.category}`}>
      <Link to={`/singleDiscussion/${props.category}/${props.id}`}>
        <h5>{props.topic}</h5>
        </Link>
        <h6>{props.username}</h6>
        <p>{props.description}</p>
        <p>{props.createdAt}</p>
      </div>
      // </div>

  )
}