import register from './registerReducer';
import travelRegister from './travelRegisterReducer';
import isLogged from './isLoggedReducer';
import passwordUpdate from '../reducers/passwordUpdateReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    register,
    travelRegister, 
    isLogged,
    passwordUpdate
});


