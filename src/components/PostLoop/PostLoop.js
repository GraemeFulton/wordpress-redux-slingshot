import React, {PropTypes} from 'react';
import QueryPosts from 'wordpress-query-posts';
import PostLoopItem from './PostLoopItem/PostLoopItem';

class PostLoop extends React.Component {

  render() {

    return (
      <div>
        <QueryPosts postType={'inspiration'} query={{search: '' }}/>
        <h2>Inspiration</h2>

          {Object.keys(this.props.posts.items).map((item, id) => {
                 return (
                   <PostLoopItem
                     key = {id}
                     link = {this.props.posts.items[item].link}
                     title = {this.props.posts.items[item].title.rendered}
                     image = {this.props.posts.items[item].og_image}
                     siteName = {this.props.posts.items[item].og_site_name}
                     date = {this.props.posts.items[item].date} />
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
