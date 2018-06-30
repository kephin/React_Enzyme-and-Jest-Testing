import axios from 'axios';

import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export function fetchComments() {
  return {
    type: FETCH_COMMENTS,
    payload: axios.get('https://jsonplaceholder.typicode.com/comments'),
  };
}
