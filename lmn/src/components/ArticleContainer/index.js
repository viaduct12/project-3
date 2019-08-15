import React from 'react'
import "./style.css";

export default function ArticleContainer(props) {
  return (
    <div className="card" id="article-card">
      <div className="content">
        <div className="card-header">  
        <h6 className="card-title">{props.title}</h6>
        </div>
        <div className="card-body">
      <p className="card-text">Summary: {props.summary}</p>
        <a href={props.link} id="article-btn" className="btn btn-primary">"{props.title}"</a>
          </div>
      
      </div>
    </div>
  )
}
