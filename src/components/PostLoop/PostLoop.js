import React from 'react';
import QueryPosts from 'wordpress-query-posts';

class PostLoop extends React.Component {

  render() {
    return (
      <div>
        <QueryPosts query={ { search: '' } } />
        <h2>Prototypr.io</h2>

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

export default PostLoop;
