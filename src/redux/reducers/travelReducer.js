const initialState = {
    travel : null
};

export default function travel(state=initialState, action){
    switch(action.type){
        case 'SET_TRAVEL' :
            return {...state, travel : action.payload};
        default :
            return state;    
    }
}