import {ADD_FILTER, CLEAR_FILTER, REMOVE_FILTER } from './filters-actions';

export const filterReduser =(state=[], action) => {
    switch (action.type) {
        case ADD_FILTER: {
            if (!state.includes(action.filter)){
                return [...state, action.filter];
            }
            return state;
        }
        case REMOVE_FILTER : {
            return state.filter(item => item !== action.filter);
        }
        case CLEAR_FILTER: {
            return [];
        }
        default:{
            return state;
        };
    }
}