import React from 'react';
import { shallow } from 'enzyme';

import CommentBox from 'components/CommentBox';

describe('<CommentBox />', () => {
  const wrapper = shallow(<CommentBox />);
  it('shows a textarea and a button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });
});
