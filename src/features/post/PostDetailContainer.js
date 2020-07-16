import React, { PureComponent, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import CommentListContainer from '../comment/CommentListContainer'
import { fetchPost } from './redux/actions'
import { Text } from '../../components/Text';

class PostDetailContainer extends PureComponent {
  componentDidMount() {
    const { post } = this.props
    if(!post.isLoaded) {
      this.props.fetchPost();
    }
  }

  render() {
    const { post, match } = this.props
    const { loading, data, error } = post
    const postId = parseInt(match.params.id)
    const postById = data.find(item => item.id === postId)
    return (
      <Fragment>
        {loading && <div>Loading ...</div>}
        {error && <Text color="red">Error !!!</Text> }
        {postById ? (
          <Fragment>
            <h2>{postById.title}</h2>
            <p>{postById.body}</p>
          </Fragment>
        ) : <Text color="red">Data Not Found.</Text>}
        <CommentListContainer postId={postId} />
      </Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: state.post,
})

const mapDispatchToProps = {
  fetchPost,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer))
