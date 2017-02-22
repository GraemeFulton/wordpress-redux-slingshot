import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/fuelSavingsActions';
import {bindActionCreators} from 'redux';

import PostLoop from '../../components/PostLoop/PostLoop';

export const HomePage = (props) => {
  return (
    <PostLoop
        posts={props.posts}
    />
  );
};


HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired
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
)(HomePage);
