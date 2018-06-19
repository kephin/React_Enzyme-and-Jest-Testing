import React from 'react';
import { shallow } from 'enzyme';

import { CommentList } from 'components/CommentList';

describe('<CommentList />', () => {
  const wrapper = shallow(<CommentList comments={['Comment 1', 'Comment 2']} />);
  it('shows one "li" element per comment', () => {
    expect(wrapper.find('li').length).toEqual(2);
  });

  it('shows the text for each comment', () => {
    expect(wrapper.render().text()).toContain('Comment 1');
    expect(wrapper.render().text()).toContain('Comment 2');
    // expect(wrapper.text()).toContain('Comment 1');
  });
});
