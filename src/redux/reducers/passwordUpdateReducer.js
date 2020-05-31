const initialState = {
    password : '',
    password2 : '',
    password3 : '',
    msgError : null
};


export default function passwordUpdate(state=initialState, action){
    switch(action.type){
        case 'SET_PASSWORD' :
            return {...state, password : action.payload};
        case 'SET_PASSWORD_2' :
            return {...state, password2 : action.payload};
        case 'SET_PASSWORD_3' :
            return {...state, password3 : action.payload};
        case 'SET_MSG_ERROR' :
            return {...state, msgError : action.payload};        
        default :
            return state;
    }
}