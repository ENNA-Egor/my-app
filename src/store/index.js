import {createStore} from 'redux';

import {rootReduser} from './root-reduser';

const store = createStore (
    rootReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export {store};