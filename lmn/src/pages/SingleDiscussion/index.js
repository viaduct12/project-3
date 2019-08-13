import React, {Component} from 'react';
// import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";
import './style.css';
import LikeDislike from '../../components/LikeDislikeButton';
import CommentList from '../../components/CommentList';
import CommentForm from '../../components/CommentForm';



class SingleDiscussion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true });

    // get all the comments
    fetch("http://localhost:3000")
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  /**
   * Add new comment
   * @param {Object} comment
   */
  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }


render () {
  
  // const loadingSpin = this.state.loading ? "progress" : "indeterminate";

  return (
  <div className="container">
      <div className="col s6" id="discussion-container">
      {/* z-depth-2 */}
        <h2>CATEGORY Discussion</h2>
      <div className="divider"></div>
        <div className="section">
          <h5>Title</h5>
          <h6>Description</h6>
          <p>lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem 
          </p>
          <div className="aside">
          <LikeDislike/>
          </div>
        </div>

{/* Comment area */}

        <div className="row">
          <div className="col-4  pt-3 border-right">
            <h6>Comment Section</h6>
            {/* Comment Form Component */}
            <CommentForm addComment={this.addComment}/>
          </div>
          <div className="col-8  pt-3 bg-white">
            {/* Comment List Component */}
            <CommentList
              //  loading={this.state.loading}
              comments={this.state.comments}
            />
          </div>
        </div>
  </div>
  </div>
    )
  
}

  }

  export default SingleDiscussion;