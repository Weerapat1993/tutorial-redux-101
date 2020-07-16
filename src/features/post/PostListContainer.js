import React, { PureComponent, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchPost } from './redux/actions'

const Text = styled.div`
  color: ${props => props.color};
`

class PostListContainer extends PureComponent {
  componentDidMount() {
    const { isLoaded } = this.props.post
    if(!isLoaded) {
      this.props.fetchPost();
    }
  }

  render() {
    const { post } = this.props
    const { loading, data, error } = post
    return (
      <Fragment>
        {loading && <div>Loading ...</div>}
        {error && <Text color="red">Error !!!</Text> }
        {data.length > 0 ? (
          <ul>
            {data.map(item => (
              <li><Link to={`posts/${item.id}`}>{item.title}</Link></li>
            ))}
          </ul>
        ) : null}
      </Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: state.post,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPost: () => dispatch(fetchPost())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)
