import React, {Component} from 'react';
// import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";
import './style.css';
import LikeDislike from '../../components/LikeDislikeButton';
import CommentList from '../../components/CommentList';
import CommentForm from '../../components/CommentForm';
import PostContainer from '../../components/PostContainer';
import API from "../../utils/API";



class SingleDiscussion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      id: this.props.match.params.id,
      post: [],
      comments: [],
      loading: false
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    this.fetchPost();
    this.changeCategory();
  }

  changeCategory = () => {
    this.setState({
      category: this.props.match.params.category
    });
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevState.category !== this.state.category){
      this.fetchPost();
    }
    // console.log(snapshot, "snapshot");
    // this.fetchPost();
  }
  fetchPost = () => {
    // loading
    this.setState({ loading: true });

    // get all the comments
    API.getOnePost(this.state.category, this.state.id).then(result => {
      this.setState({
        post: result.data,
        loading: false
      })
    }).catch(err => {
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
<<<<<<< HEAD
        <h2>{this.props.match.params.category} discussion</h2>
      {/* <div className="divider"></div> */}
        <PostContainer/>
=======
        <h2>{this.state.category} discussion</h2>

      <div className="divider"></div>
        
          <PostContainer
            id={this.state.post.id}
            topic={this.state.post.topic}
            username={this.state.post.username}
            description={this.state.post.description}
            createdAt={this.state.post.createdAt}
            category={this.state.post.category}
          />
>>>>>>> 3281b3d5c4e0bf5d52e79c9dc630c670ddc7f493

          <div className="aside">
          <LikeDislike/>
          </div>
      

{/* Comment area */}

        <div className="row" id="comment-area">
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