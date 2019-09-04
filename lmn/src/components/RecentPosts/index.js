import React from 'react';
import { Link } from "react-router-dom";
import './style.css';


export default function RecentPosts (props) {

  return (

//     <div className="col s6" id="discussion-container">
//     {/* z-depth-2 */}
//       {/* <h2>Recent Posts</h2> */}
//     <div className="divider"></div>
//       <div className="section">
//         <h5>{props.topic}</h5>
//         <p>{props.description}</p>
//       </div>
      
// </div>
    <div className={`section ${props.category}`}>
      <Link to={`/singleDiscussion/${props.category}/${props.id}`}>
        <h5>{props.topic}</h5>
      </Link><span>
        <Link to={`/forum/${props.category}`}>
        {props.category}
        </Link>
        </span>
      <h6><i class="material-icons">person_outline</i> {props.username}</h6>
      <p>{props.description}</p>
      <p><i class="material-icons">access_time</i> {props.createdAt}</p>
      <div className="divider"></div>
    </div>
  )

}