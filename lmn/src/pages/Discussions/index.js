import React, { Component } from 'react';
import './style.css';
import API from '../../utils/API';
import PostContainer from '../components/PostContainer';

class Discussions extends Component {

state = {
  category: this.props.match.params.category,
  posts: []
}

componentDidMount() {
  this.fetchPosts();
}

fetchPosts = () => {
  console.log("wake up!!");
  API.getPost(this.state.category).then(res =>
    this.setState({
        posts: res.data
    }))
.catch(err => console.log(err))
}


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