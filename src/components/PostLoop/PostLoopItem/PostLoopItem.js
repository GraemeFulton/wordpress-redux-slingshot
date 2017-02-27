import React, {PropTypes} from 'react';

class PostLoopItem extends React.Component {

  render() {

    return (
      <div>
        <div key={this.props.key}>
            <a href={this.props.link} target={'_new'}>
              <p>{this.props.title} </p>
              <img width={350} src={this.props.image} />
            </a>
            <p>Source: {this.props.siteName} | {this.props.date}</p>
        </div>
      </div>
    );
  }
}

PostLoopItem.propTypes = {
  posts: PropTypes.array,
  key: PropTypes.number,
  link: PropTypes.string,
  title:PropTypes.string,
  image:PropTypes.string,
  siteName:PropTypes.string,
  date:PropTypes.string
};

export default PostLoopItem;
