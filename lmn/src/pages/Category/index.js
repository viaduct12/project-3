import React, { Component } from 'react';
import './style.css';
import Modal from '../../components/Modal';
import Categories from '../../components/Categories';
import Discussions from '../../components/Discussions';


class Category extends Component {

state = {
  category: this.props.match.params.category
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
      
  <Discussions/>
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