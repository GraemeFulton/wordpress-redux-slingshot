import React from 'react';
import {shallow} from 'enzyme';
import {HomePage} from './HomePage';
import PostLoop from '../../components/PostLoop/PostLoop';

describe('<PostLoop />', () => {
  it('should contain <PrototyprBlogPage />', () => {

    const wrapper = shallow(<HomePage  />);

    expect(wrapper.find(PostLoop).length).toEqual(1);
  });
});
