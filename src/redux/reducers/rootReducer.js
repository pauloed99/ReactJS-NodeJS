import register from './registerReducer';
import travelRegister from './travelRegisterReducer';
import isLogged from './isLoggedReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    register,
    travelRegister, 
    isLogged
});


