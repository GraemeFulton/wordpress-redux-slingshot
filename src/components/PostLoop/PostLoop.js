import React, {PropTypes} from 'react';
import QueryPosts from 'wordpress-query-posts';

class PostLoop extends React.Component {

  render() {
    console.log(this.props.posts);

    return (
      <div>
        <QueryPosts postType={'inspiration'} query={{search: '' }}/>
        <h2>Posts</h2>

          {Object.keys(this.props.posts.items).map((item, id) => {
                 return (
                   <div key={id}>
                      <p>{this.props.posts.items[item].title.rendered} </p>
                      <img width={350} src={this.props.posts.items[item].og_image} />
                    </div>
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
