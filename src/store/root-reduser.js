import {combineReducers} from 'redux';

import {cardsReduser} from './cards/cards-reduser'


export const rootReduser = combineReducers ({
    cards: cardsReduser, 
}); 