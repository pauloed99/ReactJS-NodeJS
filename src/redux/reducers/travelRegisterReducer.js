const initialState = {
    stadium : '',
    country : '',
    city : ''
}

export default function travelRegister(state = initialState, action){
    switch(action.type){
        case 'SET_STADIUM' : 
            return {...state, stadium : action.payload};
        case 'SET_COUNTRY' :
            return {...state, country : action.payload};
        case 'SET_CITY' :
            return {...state, city : action.payload};
        default :
            return state;            
    }
}

