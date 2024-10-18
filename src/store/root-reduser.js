import {combineReducers} from 'redux';

import {cardsReduser} from './cards/cards-reduser';
import {filterReduser} from './filters/filters-reduser'


export const rootReduser = combineReducers ({
    cards: cardsReduser, 
    filters: filterReduser,
}); 