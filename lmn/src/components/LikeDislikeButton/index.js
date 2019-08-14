import React from 'react';
import './style.css';

class LikeDislike extends React.Component {
  state = {
    count: 0,
    dislikeCount: 0
  }


incrementLike = () => {
  let newCount = this.state.count + 1 
  this.setState({
    count: newCount
  })
}

incrementDislike = () => {
  let newCount = this.state.dislikeCount + 1 
  this.setState({
    dislikeCount: newCount
  })
}



render() {
  return (
    <div>

<div className="dislike">
<span className="new badge" data-badge-caption="Dislikes" onClick={this.incrementDislike}>{this.state.dislikeCount}</span>
    

      </div>
<div className="like">
    <span className="new badge" data-badge-caption="Likes" onClick={this.incrementLike}>{this.state.count}</span>

</div>
      
    </div>


  )
}

}

export default LikeDislike;