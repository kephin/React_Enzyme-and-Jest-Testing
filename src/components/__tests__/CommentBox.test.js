import React from 'react';
import { shallow } from 'enzyme';

import CommentBox from 'components/CommentBox';

describe('<CommentBox />', () => {
  const wrapper = shallow(<CommentBox />);
  it('shows a textarea and a button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('can enter input into the textarea', () => {
    wrapper.find('textarea').simulate('change', { target: { value: 'new comment' }});
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
  })

  it('when the input is submitted, textarea should be emptied', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
});
