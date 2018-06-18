import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
  it('has a type of SAVE_COMMENT', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('produces the correct payload', () => {
    const action = saveComment('New Comment');
    expect(action.payload).toEqual('New Comment');
  });
});
