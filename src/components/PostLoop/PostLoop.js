import React, {PropTypes} from 'react';
import QueryPosts from 'wordpress-query-posts';
import PostLoopItem from './PostLoopItem/PostLoopItem';

class PostLoop extends React.Component {

  render() {

    return (
      <div>
        <QueryPosts postType={this.props.postType} query={{search: '' }}/>
        <h2>Inspiration</h2>

          {Object.keys(this.props.posts).map((item, id) => {
                 return (
                   <PostLoopItem
                     key = {id}
                     link = {this.props.posts[item].link}
                     title = {this.props.posts[item].title.rendered}
                     image = {this.props.posts[item].og_image}
                     siteName = {this.props.posts[item].og_site_name}
                     date = {this.props.posts[item].date} />
                 );
             })
           }
      </div>
    );
  }
}

PostLoop.propTypes = {
  posts: PropTypes.array,
  postType:PropTypes.string
};

export default PostLoop;
