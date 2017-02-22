import React from 'react';
import { shallow } from 'enzyme';
import PrototyprBlogPage from './PrototyprBlogPage';

describe('<PrototyprBlogPage />', () => {
  it('should contain <QueryPosts /> components', () => {
    const SiteSettings = () => {
    };
  })
  const expected = <PrototyprBlogPage />;

  const wrapper = shallow(<PrototyprBlogPage
    SiteSettings={SiteSettings}
    />);
  expect(wrapper.contains(expected)).toBeTruthy();

});
