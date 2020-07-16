import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { commentSlice } from './redux/commentSlice'
import { Text } from '../../components/Text'

// Actions
const { fetchCommentByPostId } = commentSlice.actions 

class CommentListContainer extends PureComponent {
  componentDidMount() {
    const { postId } = this.props
    this.props.fetchCommentByPostId(postId);
  }

  render() {
    const { comment } = this.props
    const { loading, data, error } = comment;
    return (
      <div>
        <h3>Comments</h3>
        {loading && <div>Loading ...</div>}
        {error && <Text color="red">Error !!!</Text> }
        {data.length > 0 && !loading ? data.map(item => (
          <div>
            <b>{item.email}</b>
            <p>{item.body}</p>
            <hr />
          </div>
        )) : null}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  comment: state.comment,
})

const mapDispatchToProps = {
  fetchCommentByPostId,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer)

