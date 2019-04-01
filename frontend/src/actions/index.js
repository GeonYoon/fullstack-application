import axios from 'axios';
import {FETCH_MESSAGE,
        SORT_MESSAGE,
        HIGHLIGHT_MESSAGE,
        STAR_MESSAGE,
        DELETE_MESSAGE,
        CLICK_TRASH
} from './types';


export const fetchMessages = () => async dispatch => {
    const res = await axios.get('/api/messages');
    dispatch({type: FETCH_MESSAGE, payload: res.data});
};

export const updateStar = (id,value) => async dispatch => {
    const res = await axios.put(`/api/star/${id}`,{value})
    dispatch({type: STAR_MESSAGE, payload: res.data});
}

export const deleteMessage = (id) => async dispatch => {
    const res = await axios.put(`/api/delete/${id}`)
    dispatch({type: DELETE_MESSAGE, payload: res.data});
}

export const clickTrash = () => ({type: CLICK_TRASH});
