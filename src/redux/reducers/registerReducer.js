/* eslint-disable default-case */
const initialState = {
    name : '',
    lastName : '',
    cpf : '',
    email : '',
    password : '',
    password2 : ''
}

export default function register(state = initialState, action){
    switch(action.type){
        case 'SET_NAME' : 
            return {...state, name : action.payload};
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
        default :
            return state;                
    }
}