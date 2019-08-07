import React from 'react'

export default function PodcastContainer(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
        <li>
            {props.thumbnail}
          </li>
          <li>
            {props.audio}
          </li>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Link:</strong> {props.link}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
        </ul>
      </div>
    </div>
  )
}