import registerReducer from './registerReducer';
import travelRegisterReducer from './travelRegisterReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    register : registerReducer,
    travelRegister : travelRegisterReducer
});

