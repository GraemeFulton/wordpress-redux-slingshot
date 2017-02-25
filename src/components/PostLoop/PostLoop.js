import React, {PropTypes} from 'react';
import QueryPosts from 'wordpress-query-posts';

class PostLoop extends React.Component {

  render() {

    return (
      <div>
        <QueryPosts query={{search: '' }}/>
        <h2>Posts</h2>

          {Object.keys(this.props.posts.items).map((item, id) => {
                 return (
                     <p key={id}>{this.props.posts.items[item].title.rendered} </p>
                 );
             })
           }
      </div>
    );
  }
}

PostLoop.propTypes = {
  posts: PropTypes.array
};

export default PostLoop;
