/* eslint-disable default-case */
const initialState = {
    firstName : '',
    lastName : '',
    cpf : '',
    email : '',
    password : '',
    password2 : '',
    msgError : null,
};

export default function register(state = initialState, action){
    switch(action.type){
        case 'SET_FIRST_NAME' : 
            return {...state, firstName : action.payload};
        case 'SET_LAST_NAME' :
            return {...state, lastName : action.payload};
        case 'SET_CPF' : 
            return {...state , cpf : action.payload};
        case 'SET_EMAIL' :
            return {...state, email : action.payload};
        case 'SET_PASSWORD' :
            return {...state, password : action.payload};
        case 'SET_PASSWORD2' :
            return {...state, password2 : action.payload};
        case 'SET_MSG_ERROR' :
            return {...state, msgError : action.payload};    
        default :
            return state;                
    }
}