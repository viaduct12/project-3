import React, { Component } from 'react';
import './style.css';
// import API from '../../utils/API';
import PostContainer from '../PostContainer';

class Discussions extends Component {



  render() {
    return (
    <div id="postCategory">
      {this.state.posts.map(postCategory => (
        <PostContainer
          key={postCategory.id}
          topic={postCategory.topic}
          username={postCategory.username}
          description={postCategory.description}
          createdAt={postCategory.createdAt}
      />
      ))}
</div>

  )

  }
  
}


export default Discussions;