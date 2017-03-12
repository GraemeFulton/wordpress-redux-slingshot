import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/fuelSavingsActions';
import * as constants from '../../constants/global';
import {bindActionCreators} from 'redux';

import PostLoop from '../../components/PostLoop/PostLoop';

export const PostsPage = (props) => {
  return (
    <PostLoop
        posts={props.posts.items}
        postType = {'inspiration'}
        SiteSettings = {constants}
    />
  );
};


PostsPage.propTypes = {
  posts: PropTypes.array,
  SiteSettings:PropTypes.array
};


function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsPage);
