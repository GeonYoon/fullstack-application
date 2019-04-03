import { handleActions } from 'redux-actions';
import {
  FETCH_MESSAGE,
  STAR_MESSAGE,
  DELETE_MESSAGE,
  CLICK_TRASH,
  SORT_MESSAGE,
  HIGHLIGHT_MESSAGE
} from '../actions/types';

const InitialState = {
    messages : [],
    length : '',
    showTrash: 0,
    areSorted: false
}

function changeLength(star,length){
  if(star === 1) return length+1
  else return length-1
}

function changedLengthTrash(star,length){
  if(star === 1) return length -1
  else return length
}

export default handleActions({
  [FETCH_MESSAGE] : (state, action) => {
      return {
        ...state,
        areSorted : false,
        messages : action.payload.messages,
        length : action.payload.length,

      }
  },
  [STAR_MESSAGE] : (state, action) => {
    const id = action.payload.message.id
    const star = action.payload.message.isStarred
    return {
        ...state,
        messages: state.messages.map(
          (message) => message.id === id ? {...message, isStarred: star}: message),
        length: changeLength(star,state.length),

    }
  },
  [DELETE_MESSAGE] : (state, action) => {
    const id = action.payload.message.id
    const trash = action.payload.message.isTrashed
    return {
        ...state,
        messages: state.messages.map(
          (message) => message.id === id ? {...message, isTrashed: trash}: message),
        length: changedLengthTrash(action.payload.message.isStarred,state.length),
    }
  },
  [CLICK_TRASH] : (state, action) => {
    return {
      ...state,
      showTrash: 1-state.showTrash
    }
  },
  [SORT_MESSAGE] : (state, action) => {
    return {
      ...state,
      areSorted: true,
      messages : action.payload
    }
  },
  [HIGHLIGHT_MESSAGE] : (state, action) => {
    return {
      ...state,
      messages: action.payload
    }
  },
}, InitialState)