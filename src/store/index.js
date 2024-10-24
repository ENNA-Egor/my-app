import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {rootReducer} from './root-reduser';

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: [],
    blacklist: ['cards'],
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore (
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export {store};
export const persistor = persistStore(store);