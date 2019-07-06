//reducerを集めてrootReducerを作ります！こいつをStoreに送ります
import { combineReducers } from 'redux';

import playerReducer from './playerReducer';
import formReducer from './playerRegisterReducer';

const rootReducer = combineReducers({
  form: formReducer,
  players: playerReducer,
})

export default rootReducer;
