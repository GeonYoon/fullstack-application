import { handleActions } from 'redux-actions';
import {
  FETCH_MESSAGE,
  STAR_MESSAGE
} from '../actions/types';

const InitialState = {
    // mock-up data
    messages : [],
    length : ''
}

function changeLength(star,length){
  if(star === 1) return length+1
  else return length-1
}

export default handleActions({
  [FETCH_MESSAGE] : (state, action) => {
      return {
        messages : action.payload.messages,
        length : action.payload.length
      }
  },
  [STAR_MESSAGE] : (state, action) => {
    const id = action.payload.message.id
    const star = action.payload.message.isStarred
    return {
        messages: state.messages.map(
          (message) => message.id === id ? {...message, isStarred: star}: message),
        length: changeLength(star,state.length)
    }
},
}, InitialState)