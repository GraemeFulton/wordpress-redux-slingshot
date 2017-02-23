import React from 'react';
import {shallow} from 'enzyme';
import {PostsPage} from './PostsPage';
import PostLoop from '../../components/PostLoop/PostLoop';

describe('<PostLoop />', () => {
  it('should contain <QueryPosts />', () => {

    const wrapper = shallow(<PostsPage  />);

    expect(wrapper.find(PostLoop).length).toEqual(1);
  });
});
