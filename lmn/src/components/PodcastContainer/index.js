import React from 'react';
import './style.css';

export default function PodcastContainer(props) {
  return (

<div className="card" id="podcast-card">
  <div className="content">
<div className="card-header">
<h6 className="card-title">{props.title}</h6>
  {/* <img id="podcast-img" className="card-img-top" src={props.image} alt={props.image}></img> */}
</div>
  <div className="card-body">

    <p className="card-text">{props.description}</p>
    <a href={props.link} className="btn btn-primary" id="podcast-btn">"{props.title}"</a>
    <a href={props.audio} className="btn btn-primary" id="podcast-btn">Audio Link</a>
  </div>
</div>
</div>


  )
}