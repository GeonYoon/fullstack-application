import axios from 'axios';
import {FETCH_MESSAGE,
        SORT_MESSAGE,
        HIGHLIGHT_MESSAGE,
        STAR_MESSAGE,
        DELETE_MESSAGE
} from './types';


export const fetchMessages = () => async dispatch => {
    const res = await axios.get('/api/messages');
    dispatch({type: FETCH_MESSAGE, payload: res.data});
};