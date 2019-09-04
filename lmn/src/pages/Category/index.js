import React, { Component } from 'react';
import './style.css';
import Modal from '../../components/Modal';
import Categories from '../../components/Categories';

// import Discussions from '../../components/Discussions';

import PostContainer from "../../components/PostContainer";

import API from "../../utils/API";
// import { DiffieHellman } from 'crypto';


class Category extends Component {

  state = {
    category: this.props.match.params.category,
    posts: [],
    modalChanged: ''
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    // console.log(this.state.category, "category stuff");
    API.getPost(this.props.match.params.category).then(res =>
      this.setState({
        posts: res.data
      }))
      .catch(err => console.log(err))
  }

  changeCategory = () => {
    this.setState({
      category: this.props.match.params.category
    });

  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.changeCategory();
      this.fetchPosts();
    }
  }

  checkModal = () => {
    if(this.state.modalChanged === true){
      this.fetchPosts();
      this.changeCategory();
      this.setState({ modalChanged : false });
    }
  }

  modalUpdate = difference => {
    // (difference === "successful" ? this.setState({ modalChanged: true }) : this.setState({ modalChanged: false }))
    if (difference === "successful"){
      this.setState({modalChanged : true});
      this.checkModal();
    }
  }
  render() {
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
                <Modal category={this.state.category} path={this.props.location.pathname} history={this.props.history} modalUpdate={this.modalUpdate}/>
              </div>
            </div>
          </div>

          <div className="col s6" id="discussion-container">
            {/* z-depth-2 */}
            <h2>Discussions</h2>
            <div className="divider"></div>
            {this.state.posts.map(postCategory => (
              <PostContainer
                key={postCategory.id}
                id={postCategory.id}
                topic={postCategory.topic}
                username={postCategory.username}
                description={postCategory.description}
                createdAt={postCategory.createdAt}
                category={postCategory.category}
              />
            ))}
          </div>
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
          <Categories />
        </div>
        {/* ending container div */}
      </div>

    )

  }

}

export default Category;