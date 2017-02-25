import React from 'react';
import { shallow } from 'enzyme';
import PostLoop from './PostLoop';

describe('<PostLoop />', () => {
  it('should contain <QueryPosts /> components');

  const expected = <PostLoop />;

  const wrapper = shallow(<PostLoop />);
  expect(wrapper.contains(expected)).toBeTruthy();

});
