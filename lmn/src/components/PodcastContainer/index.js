import React from 'react'

export default function PodcastContainer(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
        {/* <li>
            <img src={props.image} alt={props.image}></img>
          </li> */}
          {/* <li>
            <strong>Title:</strong> {props.title}
          </li> */}
          <li>
            <a href={props.link}>{props.title}</a>
          </li>
          <li>
            <a href={props.audio}>Audio Link</a>
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
        </ul>
      </div>
    </div>
  )
}