import {configureStore} from '@reduxjs/toolkit';

import {rootReduser} from './root-reduser';

const store = configureStore (
    rootReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export {store};