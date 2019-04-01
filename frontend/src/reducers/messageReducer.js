import { handleActions } from 'redux-actions';
import {
  FETCH_MESSAGE
} from '../actions/types';

const InitialState = {
    // mock-up data
    messages : [],
    length : ''
}
export default handleActions({
  [FETCH_MESSAGE] : (state, action) => {
      return {
        messages : action.payload.messages,
        length : action.payload.length
      }
  },
}, InitialState)