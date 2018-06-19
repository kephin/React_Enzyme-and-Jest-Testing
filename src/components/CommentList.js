import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CommentList extends Component {
  renderComments() {
    return this.props.comments.map(comment => <li key={comment}>{comment}</li>);
  }

  render() {
    return (
      <ul>
        {this.renderComments()}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
});

export default connect(mapStateToProps)(CommentList);
