import React from 'react';
import Comment from '../../components/Comment';
import './style.css';

export default function CommentList(props) {
  return (
    // <div className="container">
    <div className="commentList">
      <h5 className="text-muted mb-4">
        <span className="badge badge-success">{props.comments.length}</span> {" "} Comments{props.comments.length > 0 ? "s" : ""}
      </h5>

    {props.comments.length === 0 && !props.loading ? (
      <div className="alert text-center alert-info">
        Be the first to comment! 
      </div>
    ) : null 
    }

    {/* key props to optimize the performance of list and it helps react to know which element it needs to update on data change */}

    {props.comments.map((comment, index) => (
      <Comment key={index} comment={comment}/>
    ))}

    </div>
    //  </div>
  );
}