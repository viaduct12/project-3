import React, { Component } from 'react';
import './style.css';
<<<<<<< HEAD:lmn/src/components/Discussions/index.js
import API from '../../utils/API';
=======
// import API from '../../utils/API';
>>>>>>> ed189a9eaed1b75c8407b3cd31302e25f2d00779:lmn/src/components/Discussions/index.js
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