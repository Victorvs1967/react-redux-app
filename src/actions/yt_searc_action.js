import YTSearch from 'youtube-api-search';

import { FETCH_YTSEARCH } from './types';
const API_KEY = 'AIzaSyAvpjC6dvoGJMna_XmJ9mIJUqQ9O_cTV88';

export const getSearchResult = searchTerm => dispatch => {
    return YTSearch({ key: API_KEY, term: searchTerm }, data => {
        console.log(data);
        dispatch({ type: FETCH_YTSEARCH, payload: data })
    })
};