import React, {PropTypes} from 'react';
import QueryPosts from 'wordpress-query-posts';

class PostLoop extends React.Component {

  render() {
    console.log(this.props.posts);

    return (
      <div>
        <QueryPosts postType={'inspiration'} query={{search: '' }}/>
        <h2>Inspiration</h2>

          {Object.keys(this.props.posts.items).map((item, id) => {
                 return (
                   <div key={id}>
                     <a href={this.props.posts.items[item].link} target={'_new'}>
                        <p>{this.props.posts.items[item].title.rendered} </p>
                        <img width={350} src={this.props.posts.items[item].og_image} />
                      </a>
                      <p>Source: {this.props.posts.items[item].og_site_name} | {this.props.posts.items[item].date}</p>
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
