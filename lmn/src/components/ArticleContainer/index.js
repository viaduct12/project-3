import React from 'react'

export default function ArticleContainer(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Link:</strong> {props.link}
          </li>
          <li>
            <strong>Summary:</strong> {props.summary}
          </li>
        </ul>
      </div>
    </div>
  )
}
