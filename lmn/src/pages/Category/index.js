import React, { Component } from 'react';
import './style.css';
import Modal from '../../components/Modal';
import Categories from '../../components/Categories';
import PostContainer from "../../components/PostContainer";
import API from "../../utils/API";


class Category extends Component {

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


render () {
  return (
  <div className="container">
  {/* <!-- Page Layout here --> */}
  <div className="row">
    <div className="col s12">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
        <h2>{this.state.category} forum</h2>
    {/* This div is 12-columns wide on all screen sizes */}      
      {/* <a className="waves-effect waves-light btn right" id="new-topic-btn">Create a new topic</a> */}
      <Modal category={this.state.category}/>
      </div>
      </div>
      </div>
      

        {this.state.posts.map(postCategory => (
          <PostContainer
            key={postCategory.id}
            topic={postCategory.topic}
            username={postCategory.username}
            description={postCategory.description}
            createdAt={postCategory.createdAt}
          />
        ))}
  {/* <Discussions/> */}
    {/* <ul className="pagination">
  <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
  <li className="active"><a href="#!">1</a></li>
  <li className="waves-effect"><a href="#!">2</a></li>
  <li className="waves-effect"><a href="#!">3</a></li>
  <li className="waves-effect"><a href="#!">4</a></li>
  <li className="waves-effect"><a href="#!">5</a></li>
  <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
</ul> */}
  
    {/* <div className="col s6"> </div> */}
    {/* Categories Colum */}
  <Categories/>
      </div>
      {/* ending container div */}
    </div>

  )

}

}

export default Category;