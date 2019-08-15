import React from 'react';
import './style.css';


export default function RecentPosts (props) {

  return (

    <div className="col s6" id="discussion-container">
    {/* z-depth-2 */}
      <h2>Recent Posts</h2>
    <div className="divider"></div>
      <div className="section">
        <h5>{props.title}</h5>
        <p>{props.description}</p>
      </div>
      
</div>
  )

}