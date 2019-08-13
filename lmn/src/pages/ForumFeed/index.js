import React from 'react';
// import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";
import './style.css';
import Categories from '../../components/Categories';
import RecentPosts from '../../components/RecentPosts';



export default function ForumFeed () {

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
      <RecentPosts/>
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