import React from 'react';
import { shallow } from 'enzyme';

import { CommentBox } from 'components/CommentBox';

describe('<CommentBox />', () => {
  const mockSaveComment = jest.fn();
  const wrapper = shallow(<CommentBox saveComment={mockSaveComment} />);

  it('shows a textarea and a button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('can enter input into the textarea and submit', () => {
    wrapper.find('textarea').simulate('change', { target: { value: 'new comment' } });
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
    wrapper.find('form').simulate('submit', { preventDefault() { } });
    expect(mockSaveComment.mock.calls[0][0]).toEqual('new comment');
    expect(mockSaveComment.mock.calls.length).toEqual(1);
  });

  it('when the input is submitted, textarea should be emptied', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
});
