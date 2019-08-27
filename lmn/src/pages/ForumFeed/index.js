import React, { Component } from 'react';
// import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";
import './style.css';
import Categories from '../../components/Categories';
import RecentPosts from '../../components/RecentPosts';
import API from "../../utils/API";
// import PostContainer from '../../components/PostContainer';

class ForumFeed extends Component {

  state= {
    recents: []
  }

  componentDidMount(){
    this.getRecent();
  }

  getRecent = () => {
    API.getRecentPost().then(result => {
      this.setState({
        recents: result.data
      })
    }).catch(err => console.log(err));
  }

  render() {
    return (

      <div className="container">
        {/* <!-- Page Layout here --> */}
        <div className="row">
          <div className="col s12">
            <div className="jumbotron">
              <h2>Learn More News Forum</h2>
            </div>
            {/* This div is 12-columns wide on all screen sizes */}
            {/* <a className="waves-effect waves-light btn right" id="new-topic-btn">Create a new topic</a> */}
          </div>
          <div className="col s6" id="discussion-container">
            <h2>Recent Posts</h2>
            <div className="divider"></div>
          {this.state.recents.map(recent => (
            <RecentPosts
              topic={recent.topic}
              category={recent.category}
              id={recent.id}
              username={recent.username}
              description={recent.description}
              createdAt={recent.createdAt}
            />
            ))}
          </div>
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

export default ForumFeed;